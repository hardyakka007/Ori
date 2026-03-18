"""
The Beautiful Game 2026 — Play the Game
Interactive side-scrolling football match controlled with arrow keys.

Controls:
  ↑ ↓ ← →   Move controlled player
  Space      Pass to nearest teammate
  Z          Shoot toward goal
  X          Sprint (hold for burst speed)
  S          Tackle / press nearest opponent
  Q          Quit match
"""

try:
    import curses
except ImportError:
    try:
        import windows_curses as curses  # pip install windows-curses
    except ImportError:
        raise SystemExit(
            "\n  ERROR: curses is not available.\n"
            "  On Windows, run:  pip install windows-curses\n"
            "  Then restart the game.\n"
        )
import time
import math
import random

# ── Pitch constants ──────────────────────────────────────────────────────────
PITCH_W         = 200
PITCH_H         = 4.0
GOAL_Y1         = 1.3
GOAL_Y2         = 2.7
GOAL_X_L        = 0
GOAL_X_R        = PITCH_W

VIEW_W          = 74
VIEW_H          = 5
PITCH_ROW       = 3

FPS             = 15
FRAME_TIME      = 1.0 / FPS
REAL_HALF_SECS  = 90
GAME_HALF_MINS  = 45
TIME_PER_FRAME  = GAME_HALF_MINS / (REAL_HALF_SECS * FPS)

PLAYER_SPEED    = 0.8
SPRINT_MULT     = 1.55
SPRINT_MAX_FRAMES = 30
BALL_PASS_SPD   = 3.5
BALL_SHOT_SPD   = 6.0
BALL_FRICTION   = 0.88
BALL_STOP_VEL   = 0.08
PICKUP_RADIUS   = 0.55
TACKLE_RADIUS   = 1.0
AI_UPDATE_EVERY = 3
SHOT_DIST       = 40

# ── Celebration animation frames ─────────────────────────────────────────────
# Each pose is 3 lines for one stick figure
_POSES = [
    ("\\o/", " | ", "/ \\"),
    (" o/", "/| ", "/ \\"),
    ("\\o ", " |\\", "/ \\"),
    ("\\o/", " | ", "/ \\"),
    (" o ", "/|\\", "/ \\"),
]

_CROWD_LINES = [
    "  * * *  THE CROWD GOES WILD!  * * *  ",
    "  + + +  WHAT A GOAL!  + + +  ",
    "  * * *  THE STADIUM ERUPTS!  * * *  ",
    "  + + +  UNBELIEVABLE SCENES!  + + +  ",
    "  * * *  GET IN THERE!!!  * * *  ",
]


# ── Physics classes ──────────────────────────────────────────────────────────
class Ball:
    def __init__(self):
        self.x  = float(PITCH_W // 2)
        self.y  = PITCH_H / 2
        self.vx = 0.0
        self.vy = 0.0
        self.carrier = None

    def update(self):
        if self.carrier:
            off = 0.6 if self.carrier.attacking_right else -0.6
            self.x = self.carrier.x + off
            self.y = self.carrier.y
        else:
            self.x += self.vx
            self.y += self.vy
            self.vx *= BALL_FRICTION
            self.vy *= BALL_FRICTION
            if abs(self.vx) < BALL_STOP_VEL: self.vx = 0.0
            if abs(self.vy) < BALL_STOP_VEL: self.vy = 0.0
            if self.y < 0.0:
                self.y = 0.0; self.vy = abs(self.vy) * 0.7
            elif self.y > PITCH_H:
                self.y = PITCH_H; self.vy = -abs(self.vy) * 0.7
            if self.x < 0 and not (GOAL_Y1 <= self.y <= GOAL_Y2):
                self.x = 0.0; self.vx = abs(self.vx) * 0.7
            elif self.x > PITCH_W and not (GOAL_Y1 <= self.y <= GOAL_Y2):
                self.x = float(PITCH_W); self.vx = -abs(self.vx) * 0.7


class GamePlayer:
    def __init__(self, name, team, x, y, pace, overall, role, attacking_right):
        self.name            = name
        self.team            = team
        self.x               = float(x)
        self.y               = float(y)
        self.home_x          = float(x)
        self.home_y          = float(y)
        self.pace            = pace
        self.overall         = overall
        self.role            = role
        self.attacking_right = attacking_right
        self.sprint_frames   = 0

    @property
    def speed(self):
        return PLAYER_SPEED * (0.6 + self.pace / 160.0)

    def dist(self, ox, oy):
        return math.sqrt((self.x - ox)**2 + (self.y - oy)**2)

    def move_toward(self, tx, ty, spd=None):
        spd = spd or self.speed
        dx, dy = tx - self.x, ty - self.y
        d = math.sqrt(dx*dx + dy*dy)
        if d > 0.01:
            self.x += (dx / d) * spd
            self.y += (dy / d) * spd
        self._clamp()

    def _clamp(self):
        self.x = max(1.0, min(float(PITCH_W) - 1.0, self.x))
        self.y = max(0.0, min(PITCH_H, self.y))


# ── Formation ────────────────────────────────────────────────────────────────
_433_HOME = [
    (8,  2.0, "GK"),
    (28, 0.3, "DEF"), (25, 1.2, "DEF"), (25, 2.8, "DEF"), (28, 3.7, "DEF"),
    (52, 1.0, "MID"), (50, 2.0, "MID"), (52, 3.0, "MID"),
    (72, 0.4, "ATT"), (75, 2.0, "ATT"), (72, 3.6, "ATT"),
]

def _formation_positions(attacking_right):
    if attacking_right:
        return list(_433_HOME)
    return [(PITCH_W - x, PITCH_H - y, r) for x, y, r in _433_HOME]

def _build_squad(players, attacking_right):
    positions = _formation_positions(attacking_right)
    team      = "home" if attacking_right else "away"
    squad     = []
    for i, (px, py, role) in enumerate(positions):
        p = players[i] if i < len(players) else None
        name  = p.name    if p else f"Player {i+1}"
        pace  = p.pace    if p else 70
        ovr   = p.overall if p else 75
        squad.append(GamePlayer(name, team, px, py, pace, ovr, role, attacking_right))
    return squad


# ── Main game class ──────────────────────────────────────────────────────────
class PlayGame:

    def __init__(self, home_name, away_name, home_players, away_players):
        self.home_name     = home_name
        self.away_name     = away_name
        self.home_score    = 0
        self.away_score    = 0
        self.game_time     = 0.0
        self.half          = 1
        self.running       = True
        self.scorers       = []
        self.pending_goal  = None   # dict with goal info, triggers scene
        self.halftime_pending = False
        self.ai_tick       = 0
        self.sprinting     = False

        self.home_squad  = _build_squad(home_players,  attacking_right=True)
        self.away_squad  = _build_squad(away_players,  attacking_right=False)
        self.all_players = self.home_squad + self.away_squad

        self.ball        = Ball()
        st               = next((p for p in self.home_squad if p.role == "ATT"), self.home_squad[-1])
        st.x             = float(PITCH_W // 2) - 0.6
        st.y             = PITCH_H / 2
        self.ball.carrier = st
        self.controlled   = st
        self.cam_x        = max(0, int(self.ball.x) - VIEW_W // 2)

    # ── Curses entry ─────────────────────────────────────────────────────────

    def run(self, stdscr):
        self._setup_colors(stdscr)
        curses.curs_set(0)
        stdscr.nodelay(True)
        stdscr.keypad(True)

        while self.running:
            t0  = time.time()
            key = stdscr.getch()

            # ── Goal scene (takes over the screen) ──────────────────────────
            if self.pending_goal:
                info              = self.pending_goal
                self.pending_goal = None
                self._run_goal_scene(stdscr, info)
                self._reset_kickoff(info["team"])

            # ── Half-time screen ────────────────────────────────────────────
            elif self.halftime_pending:
                self.halftime_pending = False
                self._run_halftime_screen(stdscr)

            else:
                self._handle_input(key, stdscr)
                self._update_game()
                self._render(stdscr)

            elapsed = time.time() - t0
            sleep   = FRAME_TIME - elapsed
            if sleep > 0:
                time.sleep(sleep)

        return self._build_result()

    # ── Input ────────────────────────────────────────────────────────────────

    def _handle_input(self, key, stdscr):
        c   = self.controlled
        spd = c.speed * (SPRINT_MULT if self.sprinting else 1.0)

        dx, dy = 0.0, 0.0
        if   key == curses.KEY_UP:    dy = -spd
        elif key == curses.KEY_DOWN:  dy =  spd
        elif key == curses.KEY_LEFT:  dx = -spd
        elif key == curses.KEY_RIGHT: dx =  spd

        c.x += dx; c.y += dy; c._clamp()
        if self.ball.carrier is c:
            self.ball.x = c.x + (0.6 if c.attacking_right else -0.6)
            self.ball.y = c.y

        if key == ord(' '):              self._do_pass()
        elif key in (ord('z'),ord('Z')): self._do_shoot()
        elif key in (ord('x'),ord('X')):
            self.sprinting = True
            c.sprint_frames += 1
            if c.sprint_frames > SPRINT_MAX_FRAMES:
                self.sprinting = False; c.sprint_frames = 0
        elif key in (ord('s'),ord('S')): self._do_tackle()
        elif key in (ord('q'),ord('Q')): self.running = False

        if key not in (ord('x'), ord('X')):
            self.sprinting = False
            c.sprint_frames = max(0, c.sprint_frames - 1)

    # ── Player actions ───────────────────────────────────────────────────────

    def _do_pass(self):
        if self.ball.carrier is not self.controlled:
            return
        c    = self.controlled
        sign = 1 if c.attacking_right else -1
        ahead = [p for p in self.home_squad if p is not c and (p.x - c.x) * sign > -5]
        if not ahead:
            ahead = [p for p in self.home_squad if p is not c]
        if not ahead:
            return
        target = min(ahead, key=lambda p: p.dist(c.x, c.y))
        dx, dy = target.x - c.x, target.y - c.y
        d = math.sqrt(dx*dx + dy*dy)
        if d < 0.1: return
        self.ball.carrier = None
        self.ball.vx = (dx / d) * BALL_PASS_SPD
        self.ball.vy = (dy / d) * BALL_PASS_SPD

    def _do_shoot(self):
        if self.ball.carrier is not self.controlled:
            return
        c  = self.controlled
        gx = float(GOAL_X_R) if c.attacking_right else float(GOAL_X_L)
        gy = (GOAL_Y1 + GOAL_Y2) / 2
        dx, dy = gx - c.x, gy - c.y
        d = math.sqrt(dx*dx + dy*dy)
        if d < 0.1: return
        self.ball.carrier = None
        self.ball.vx = (dx / d) * BALL_SHOT_SPD
        self.ball.vy = (dy / d) * BALL_SHOT_SPD + random.uniform(-0.3, 0.3)

    def _do_tackle(self):
        c = self.controlled
        if self.ball.carrier and self.ball.carrier.team == "away":
            opp = self.ball.carrier
            if c.dist(opp.x, opp.y) <= TACKLE_RADIUS:
                p = max(0.2, min(0.75, 0.45 + (c.overall - opp.overall) * 0.008))
                if random.random() < p:
                    self.ball.carrier = None
                    self.ball.vx = random.uniform(-0.5, 0.5)
                    self.ball.vy = random.uniform(-0.5, 0.5)

    # ── Game update ──────────────────────────────────────────────────────────

    def _update_game(self):
        self.game_time += TIME_PER_FRAME
        self.ball.update()
        self._check_pickups()
        self.ai_tick = (self.ai_tick + 1) % AI_UPDATE_EVERY
        if self.ai_tick == 0:
            self._update_ai()
        self._auto_switch_controlled()
        self.cam_x = int(max(0, min(PITCH_W - VIEW_W, self.ball.x - VIEW_W // 2)))
        self._check_goal()
        if self.game_time >= 45.0 and self.half == 1:
            self._trigger_halftime()
        elif self.game_time >= 90.0:
            self.running = False

    def _check_pickups(self):
        if self.ball.carrier:
            return
        b = self.ball
        for p in self.all_players:
            if p.dist(b.x, b.y) <= PICKUP_RADIUS:
                self.ball.carrier = p
                b.vx = b.vy = 0.0
                break

    def _check_goal(self):
        b = self.ball
        scored_team = None

        if b.x <= GOAL_X_L and GOAL_Y1 <= b.y <= GOAL_Y2:
            self.away_score += 1
            scorer = (self.ball.carrier.name if self.ball.carrier and self.ball.carrier.team == "away"
                      else next((p.name for p in self.away_squad if p.role == "ATT"), self.away_squad[-1].name))
            scored_team = "away"
        elif b.x >= GOAL_X_R and GOAL_Y1 <= b.y <= GOAL_Y2:
            self.home_score += 1
            scorer = (self.controlled.name if self.controlled else
                      next((p.name for p in self.home_squad if p.role == "ATT"), self.home_squad[-1].name))
            scored_team = "home"
        else:
            return

        minute = int(self.game_time)
        self.scorers.append((minute, scored_team, scorer))
        self.ball.carrier = None
        self.ball.vx = self.ball.vy = 0.0

        # Queue goal scene — kickoff reset happens AFTER the animation
        self.pending_goal = {
            "scorer":     scorer,
            "minute":     minute,
            "team":       scored_team,
            "home_name":  self.home_name,
            "away_name":  self.away_name,
            "home_score": self.home_score,
            "away_score": self.away_score,
        }

    def _trigger_halftime(self):
        self.half      = 2
        self.game_time = 45.0
        # Swap sides
        for p in self.home_squad:
            p.attacking_right = False
            p.home_x = float(PITCH_W) - p.home_x
            p.home_y = PITCH_H - p.home_y
            p.x, p.y = p.home_x, p.home_y
        for p in self.away_squad:
            p.attacking_right = True
            p.home_x = float(PITCH_W) - p.home_x
            p.home_y = PITCH_H - p.home_y
            p.x, p.y = p.home_x, p.home_y
        self.ball.carrier = None
        self.ball.x = float(PITCH_W // 2)
        self.ball.y = PITCH_H / 2
        st = next((p for p in self.away_squad if p.role == "ATT"), self.away_squad[-1])
        st.x, st.y = float(PITCH_W // 2) + 0.6, PITCH_H / 2
        self.ball.carrier = st
        self.controlled = next((p for p in self.home_squad if p.role == "ATT"), self.home_squad[-1])
        self.halftime_pending = True

    def _reset_kickoff(self, scored_team):
        self.ball.carrier = None
        self.ball.vx = self.ball.vy = 0.0
        self.ball.x = float(PITCH_W // 2)
        self.ball.y = PITCH_H / 2
        home_pos = _formation_positions(attacking_right=True)
        away_pos = _formation_positions(attacking_right=False)
        for p, (px, py, _) in zip(self.home_squad, home_pos):
            p.x = p.home_x = float(px); p.y = p.home_y = float(py)
        for p, (px, py, _) in zip(self.away_squad, away_pos):
            p.x = p.home_x = float(px); p.y = p.home_y = float(py)
        # Conceding team kicks off
        ko_squad = self.away_squad if scored_team == "away" else self.home_squad
        st = next((p for p in ko_squad if p.role == "ATT"), ko_squad[-1])
        st.x = float(PITCH_W // 2) + (-0.6 if st.attacking_right else 0.6)
        st.y = PITCH_H / 2
        self.ball.carrier = st
        if st.team == "home":
            self.controlled = st

    # ── AI ───────────────────────────────────────────────────────────────────

    def _update_ai(self):
        b = self.ball
        for p in self.away_squad:
            goal_x = float(GOAL_X_L) if not p.attacking_right else float(GOAL_X_R)
            if b.carrier is p:
                dist_to_goal = abs(p.x - goal_x)
                if dist_to_goal < SHOT_DIST and GOAL_Y1 - 0.5 <= p.y <= GOAL_Y2 + 0.5:
                    dy  = (GOAL_Y1 + GOAL_Y2) / 2 - p.y
                    dx  = goal_x - p.x
                    d   = math.sqrt(dx*dx + dy*dy)
                    if d > 0.1:
                        b.carrier = None
                        b.vx = (dx/d)*BALL_SHOT_SPD
                        b.vy = (dy/d)*BALL_SHOT_SPD + random.uniform(-0.25, 0.25)
                else:
                    p.move_toward(goal_x, PITCH_H/2 + random.uniform(-0.3, 0.3), p.speed)
            elif b.carrier and b.carrier.team == "away":
                sign = -1 if p.attacking_right else 1
                tx = max(1.0, min(float(PITCH_W)-1.0, p.home_x + sign*10))
                ty = max(0.0, min(PITCH_H, p.home_y + random.uniform(-0.5, 0.5)))
                p.move_toward(tx, ty, p.speed * 0.8)
            elif p.role == "GK":
                gk_x = 5.0 if not p.attacking_right else float(PITCH_W) - 5.0
                p.move_toward(gk_x, b.y, p.speed * 0.7)
            elif p.role == "DEF":
                own_x = float(GOAL_X_R) if not p.attacking_right else float(GOAL_X_L)
                tx = max(1.0, min(float(PITCH_W)-1.0, (b.x + own_x) / 2))
                ty = max(0.0, min(PITCH_H, b.y + random.uniform(-0.5, 0.5)))
                p.move_toward(tx, ty, p.speed * 0.85)
            else:
                p.move_toward(b.x + random.uniform(-2, 2),
                               b.y + random.uniform(-0.3, 0.3), p.speed * 0.75)
        # AI passing
        carrier = self.ball.carrier
        if carrier and carrier.team == "away":
            goal_x = float(GOAL_X_L) if not carrier.attacking_right else float(GOAL_X_R)
            if abs(carrier.x - goal_x) > 80 and random.random() < 0.04:
                teammates = [p for p in self.away_squad if p is not carrier]
                if teammates:
                    t  = random.choice(teammates)
                    dx, dy = t.x - carrier.x, t.y - carrier.y
                    d  = math.sqrt(dx*dx + dy*dy)
                    if d > 0.1:
                        self.ball.carrier = None
                        self.ball.vx = (dx/d)*BALL_PASS_SPD
                        self.ball.vy = (dy/d)*BALL_PASS_SPD

    def _auto_switch_controlled(self):
        b = self.ball
        if b.carrier and b.carrier.team == "home":
            self.controlled = b.carrier
        elif b.carrier is None:
            self.controlled = min(self.home_squad, key=lambda p: p.dist(b.x, b.y))

    # ── Goal scene ───────────────────────────────────────────────────────────

    def _run_goal_scene(self, stdscr, info):
        """
        3-phase animated goal scene — skippable at any point with Enter.
          Phase 1: Ball flying into goal (close-up top-down)
          Phase 2: GOAL! flash text
          Phase 3: Players celebrating with crowd noise
        """
        h, w = stdscr.getmaxyx()

        def check_skip():
            stdscr.nodelay(True)
            k = stdscr.getch()
            return k in (10, 13, curses.KEY_ENTER, ord('\n'), ord('\r'))

        def pausef(secs):
            """Pause for secs, return True if Enter pressed to skip."""
            end = time.time() + secs
            while time.time() < end:
                if check_skip():
                    return True
                time.sleep(0.02)
            return False

        team_pair = curses.color_pair(8) if info["team"] == "home" else curses.color_pair(3)
        score_str = f"{info['home_name']}  {info['home_score']} - {info['away_score']}  {info['away_name']}"

        # ── Phase 1: Ball-into-goal close-up ─────────────────────────────
        # Top-down view: ball travels right toward goal post box
        # Panel is centred on screen
        pw   = min(w - 4, 58)     # panel width
        ph   = 9                  # panel height (inner)
        px   = max(0, (w - pw) // 2)
        py   = max(0, (h - ph - 4) // 2)

        # Goal box drawn inside panel, right side
        gb_left = pw - 22         # left edge of goal box (relative to panel)
        gb_w    = 16              # goal box inner width
        gb_top  = 2               # goal box top row (relative to panel)
        gb_h    = 5               # goal box height rows (inner)
        center_y = gb_top + gb_h // 2  # ball path row

        skipped = False
        # Ball travels from col 1 → gb_left + 2 (inside net)
        ball_cols = list(range(1, gb_left + gb_w, max(1, (gb_left + gb_w) // 9)))

        for step, bx in enumerate(ball_cols):
            if skipped: break
            stdscr.erase()
            in_net   = bx >= gb_left + 1
            bulge    = max(0, bx - (gb_left + 1))

            # Panel border
            self._box(stdscr, py, px, ph + 2, pw,
                      label=" GOAL REPLAY ", attr=team_pair | curses.A_BOLD)

            # Goal structure
            for gy in range(gb_h + 2):
                row = py + 1 + gb_top + gy
                col = px + 1 + gb_left
                if gy == 0:
                    self._safe_addstr(stdscr, row, col,
                                      "+" + "-" * gb_w + "+", curses.color_pair(6))
                elif gy == gb_h + 1:
                    self._safe_addstr(stdscr, row, col,
                                      "+" + "-" * gb_w + "+", curses.color_pair(6))
                else:
                    if in_net and gy > 0 and gy <= gb_h:
                        net = "|" + (":" * min(bulge, gb_w)) + (" " * max(0, gb_w - bulge)) + "|"
                    else:
                        net = "|" + " " * gb_w + "|"
                    self._safe_addstr(stdscr, row, col, net, curses.color_pair(6))

            # Ball
            ball_row = py + 1 + center_y
            ball_col = px + 1 + bx
            ball_ch  = ord('*') if in_net else ord('o')
            ball_col = min(ball_col, px + pw - 2)
            self._safe_addch(stdscr, ball_row, ball_col, ball_ch,
                             curses.color_pair(4) | curses.A_BOLD)

            # Score + skip hint
            self._safe_addstr(stdscr, py + ph + 2, px,
                              score_str[:pw], curses.color_pair(7) | curses.A_BOLD)
            self._safe_addstr(stdscr, h - 1, 0,
                              " ENTER to skip ", curses.color_pair(6) | curses.A_DIM)
            stdscr.refresh()
            skipped = pausef(0.09)

        # ── Phase 2: GOAL! flash ─────────────────────────────────────────
        goal_lines = [
            f"   G O A L !   ",
            f"   G O A L ! !   ",
            f" *** G O A L ! *** ",
        ]
        for i, gl in enumerate(goal_lines):
            if skipped: break
            stdscr.erase()
            gr = h // 2 - 2
            gc = max(0, (w - len(gl)) // 2)
            self._safe_addstr(stdscr, gr, gc, gl, team_pair | curses.A_BOLD)
            scorer_line = f" {info['scorer']}  --  {info['minute']}' "
            self._safe_addstr(stdscr, gr + 2, max(0, (w - len(scorer_line)) // 2),
                              scorer_line, curses.color_pair(7) | curses.A_BOLD)
            self._safe_addstr(stdscr, gr + 4, max(0, (w - len(score_str)) // 2),
                              score_str, curses.color_pair(6))
            self._safe_addstr(stdscr, h - 1, 0,
                              " ENTER to skip ", curses.color_pair(6) | curses.A_DIM)
            stdscr.refresh()
            skipped = pausef(0.20)

        # ── Phase 3: Celebration ─────────────────────────────────────────
        team_label = info["home_name"] if info["team"] == "home" else info["away_name"]
        for frame in range(10):
            if skipped: break
            stdscr.erase()

            # Header
            hdr = f"  {team_label.upper()}  --  {info['scorer'].upper()}  {info['minute']}'  "
            self._safe_addstr(stdscr, 1, max(0, (w - len(hdr)) // 2),
                              hdr, team_pair | curses.A_BOLD)

            # 5 celebrating players spread across the screen
            base_row = h // 2 - 2
            spacing  = max(6, w // 6)
            for i in range(5):
                pose = _POSES[(frame + i) % len(_POSES)]
                px_  = spacing * (i + 1) - 2
                for li, line in enumerate(pose):
                    self._safe_addstr(stdscr, base_row + li,
                                      max(0, min(px_, w - len(line) - 1)),
                                      line, curses.color_pair(1) | curses.A_BOLD)

            # Bouncing crowd text
            crowd = _CROWD_LINES[(frame // 2) % len(_CROWD_LINES)]
            self._safe_addstr(stdscr, base_row + 4,
                              max(0, (w - len(crowd)) // 2),
                              crowd, curses.color_pair(7))

            # Score
            self._safe_addstr(stdscr, h - 3,
                              max(0, (w - len(score_str)) // 2),
                              score_str, curses.color_pair(7) | curses.A_BOLD)

            self._safe_addstr(stdscr, h - 1, 0,
                              " ENTER to skip ", curses.color_pair(6) | curses.A_DIM)
            stdscr.refresh()
            skipped = pausef(0.18)

        stdscr.nodelay(True)

    # ── Half-time screen ─────────────────────────────────────────────────────

    def _run_halftime_screen(self, stdscr):
        h, w = stdscr.getmaxyx()
        stdscr.erase()

        title = "H A L F   T I M E"
        score = f"{self.home_name}  {self.home_score} - {self.away_score}  {self.away_name}"
        sub   = "Teams switch ends for the second half"
        prompt = "Press ENTER to kick off the second half"

        r = h // 2 - 3
        self._safe_addstr(stdscr, r,     max(0,(w-len(title))//2), title,
                         curses.color_pair(7) | curses.A_BOLD)
        self._safe_addstr(stdscr, r + 2, max(0,(w-len(score))//2), score,
                         curses.color_pair(6) | curses.A_BOLD)
        self._safe_addstr(stdscr, r + 4, max(0,(w-len(sub))//2),   sub,
                         curses.color_pair(9))
        self._safe_addstr(stdscr, r + 6, max(0,(w-len(prompt))//2), prompt,
                         curses.color_pair(9) | curses.A_BOLD)
        stdscr.refresh()

        stdscr.nodelay(False)
        while True:
            k = stdscr.getch()
            if k in (10, 13, curses.KEY_ENTER, ord('\n'), ord('\r')):
                break
        stdscr.nodelay(True)

    # ── Rendering ────────────────────────────────────────────────────────────

    def _setup_colors(self, stdscr):
        if curses.has_colors():
            curses.start_color()
            curses.use_default_colors()
            curses.init_pair(1, curses.COLOR_WHITE,  curses.COLOR_GREEN)
            curses.init_pair(2, curses.COLOR_YELLOW, curses.COLOR_GREEN)
            curses.init_pair(3, curses.COLOR_RED,    curses.COLOR_GREEN)
            curses.init_pair(4, curses.COLOR_WHITE,  curses.COLOR_GREEN)
            curses.init_pair(5, curses.COLOR_BLACK,  curses.COLOR_GREEN)
            curses.init_pair(6, curses.COLOR_WHITE,  -1)
            curses.init_pair(7, curses.COLOR_YELLOW, -1)
            curses.init_pair(8, curses.COLOR_GREEN,  -1)
            curses.init_pair(9, curses.COLOR_CYAN,   -1)

    def _render(self, stdscr):
        stdscr.erase()
        h, w = stdscr.getmaxyx()
        if w < 80 or h < 12:
            self._safe_addstr(stdscr, 0, 0,
                              "Terminal too small — needs 80x12 minimum.", curses.A_BOLD)
            stdscr.refresh()
            return
        self._render_scoreboard(stdscr, w)
        self._render_pitch(stdscr, w)
        self._render_players(stdscr)
        self._render_ball(stdscr)
        self._render_controls(stdscr, w)
        stdscr.refresh()

    def _render_scoreboard(self, stdscr, w):
        minute   = int(min(self.game_time, 90))
        time_tag = f"{minute:02d}'"
        score_s  = (f"  {self.home_name}  {self.home_score} - "
                    f"{self.away_score}  {self.away_name}")
        line = f"{score_s:<{w - len(time_tag) - 3}}{time_tag}  "
        self._safe_addstr(stdscr, 0, 0, "─" * min(w-1,78), curses.color_pair(6))
        self._safe_addstr(stdscr, 1, 0, line[:w-1], curses.color_pair(7)|curses.A_BOLD)
        self._safe_addstr(stdscr, 2, 0, "─" * min(w-1,78), curses.color_pair(6))

    def _render_pitch(self, stdscr, w):
        bg = curses.color_pair(5) | curses.A_DIM
        for row in range(VIEW_H):
            sy = PITCH_ROW + row
            self._safe_addch(stdscr, sy, 1,         ord('\u2593'), bg)
            for col in range(VIEW_W):
                self._safe_addch(stdscr, sy, col + 2, ord(' '), bg)
            self._safe_addch(stdscr, sy, VIEW_W + 2, ord('\u2593'), bg)
        self._render_goalpost(stdscr, GOAL_X_L)
        self._render_goalpost(stdscr, GOAL_X_R)

    def _render_goalpost(self, stdscr, goal_x):
        sx = (goal_x - self.cam_x) + 2
        if not (0 <= sx < VIEW_W + 4):
            return
        for gy in (GOAL_Y1, GOAL_Y2):
            sy = PITCH_ROW + round(gy)
            self._safe_addch(stdscr, sy, int(sx), ord('|'),
                             curses.color_pair(6) | curses.A_BOLD)

    def _render_players(self, stdscr):
        for p in self.home_squad:
            sx = round(p.x - self.cam_x) + 2
            sy = PITCH_ROW + round(p.y)
            if 1 <= sx <= VIEW_W + 2 and PITCH_ROW <= sy < PITCH_ROW + VIEW_H:
                if p is self.controlled:
                    ch   = ord('G') if p.role == "GK" else ord('A')
                    attr = curses.color_pair(2) | curses.A_BOLD
                else:
                    ch   = ord('G') if p.role == "GK" else ord('A')
                    attr = curses.color_pair(1)
                self._safe_addch(stdscr, sy, sx, ch, attr)

        for p in self.away_squad:
            sx = round(p.x - self.cam_x) + 2
            sy = PITCH_ROW + round(p.y)
            if 1 <= sx <= VIEW_W + 2 and PITCH_ROW <= sy < PITCH_ROW + VIEW_H:
                ch   = ord('G') if p.role == "GK" else ord('x')
                self._safe_addch(stdscr, sy, sx, ch, curses.color_pair(3))

    def _render_ball(self, stdscr):
        b  = self.ball
        sx = round(b.x - self.cam_x) + 2
        sy = PITCH_ROW + round(b.y)
        if 1 <= sx <= VIEW_W + 2 and PITCH_ROW <= sy < PITCH_ROW + VIEW_H:
            self._safe_addch(stdscr, sy, sx, ord('o'),
                             curses.color_pair(4) | curses.A_BOLD)

    def _render_controls(self, stdscr, w):
        ctrl = " [Arrows] Move  [SPC] Pass  [Z] Shoot  [X] Sprint  [S] Tackle  [Q] Quit"
        row  = PITCH_ROW + VIEW_H
        self._safe_addstr(stdscr, row,     0, "─" * min(w-1,78), curses.color_pair(6))
        self._safe_addstr(stdscr, row + 1, 0, ctrl[:w-1],         curses.color_pair(9))

    # ── Drawing helpers ──────────────────────────────────────────────────────

    def _box(self, stdscr, y, x, h, w, label="", attr=0):
        """Draw a simple box with optional label in top border."""
        self._safe_addstr(stdscr, y,     x, "+" + "-"*(w-2) + "+", attr)
        self._safe_addstr(stdscr, y+h-1, x, "+" + "-"*(w-2) + "+", attr)
        for r in range(1, h-1):
            self._safe_addch(stdscr, y+r, x,     ord('|'), attr)
            self._safe_addch(stdscr, y+r, x+w-1, ord('|'), attr)
        if label:
            lx = x + (w - len(label)) // 2
            self._safe_addstr(stdscr, y, lx, label, attr)

    @staticmethod
    def _safe_addch(stdscr, y, x, ch, attr=0):
        try: stdscr.addch(y, x, ch, attr)
        except curses.error: pass

    @staticmethod
    def _safe_addstr(stdscr, y, x, s, attr=0):
        try: stdscr.addstr(y, x, s, attr)
        except curses.error: pass

    def _build_result(self):
        return {
            "home_name":  self.home_name,
            "away_name":  self.away_name,
            "home_score": self.home_score,
            "away_score": self.away_score,
            "scorers":    self.scorers,
        }


# ── Full-time screen ─────────────────────────────────────────────────────────
def _show_fulltime(result):
    from engine.display import clear, header, section, pause, color
    from engine.display import BOLD, RESET, GREEN, YELLOW, CYAN, DIM, GOLD
    clear()
    header("F U L L   T I M E", 60)
    print(f"\n  {BOLD}{GOLD}{result['home_name']:<26}  "
          f"{result['home_score']} - {result['away_score']}  "
          f"{result['away_name']}{RESET}\n")
    if result["scorers"]:
        section("GOALS", 60)
        for minute, team, name in sorted(result["scorers"]):
            c = GREEN if team == "home" else CYAN
            print(f"  {color('o', c)}  {name:<28} {minute}'")
    else:
        print(f"  {DIM}No goals scored.{RESET}")
    pause()


# ── Pre-match entry point ────────────────────────────────────────────────────
def run():
    from data.players import PLAYERS_BY_CLUB, PLAYERS
    from data.clubs import CLUBS, CLUB_LIST
    from engine.display import clear, header, confirm, color
    from engine.display import BOLD, RESET, CYAN, YELLOW, RED, DIM
    import random

    clear()
    header("PLAY THE GAME", 60)
    print(f"  {DIM}You control the home team. Arrow keys move your nearest player.{RESET}\n")
    print(f"  {BOLD}{'#':<4} {'Club':<26} {'League':<24} {'Style'}{RESET}")
    print(f"  {'─'*70}")
    for i, name in enumerate(CLUB_LIST, 1):
        club = CLUBS[name]
        print(f"  {YELLOW}{i:>2}{RESET}.  {name:<26} {DIM}{club.league:<24} {club.style.name}{RESET}")
    print()

    def pick(prompt):
        while True:
            try:
                idx = int(input(f"  {CYAN}{prompt}: {RESET}")) - 1
                if 0 <= idx < len(CLUB_LIST):
                    return CLUB_LIST[idx]
                print(f"  {RED}Enter 1-{len(CLUB_LIST)}.{RESET}")
            except (ValueError, EOFError):
                return random.choice(CLUB_LIST)

    home_name = pick("YOUR team (home) number")
    away_name = pick("Opponent (away) number")

    print(f"\n  {BOLD}{color(home_name, CYAN)}  (YOU)  vs  {color(away_name, YELLOW)}{RESET}")
    if not confirm("Kick off?"):
        return

    home_p = list(PLAYERS_BY_CLUB.get(home_name, []))
    away_p = list(PLAYERS_BY_CLUB.get(away_name, []))
    while len(home_p) < 11: home_p.append(random.choice(PLAYERS))
    while len(away_p) < 11: away_p.append(random.choice(PLAYERS))

    game   = PlayGame(home_name, away_name, home_p[:11], away_p[:11])
    result = curses.wrapper(game.run)
    _show_fulltime(result)
