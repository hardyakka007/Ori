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

import curses
import time
import math
import random
from copy import deepcopy

# ── Pitch constants ──────────────────────────────────────────────────────────
PITCH_W   = 200      # abstract width (x: 0 – 200)
PITCH_H   = 4.0      # abstract height (y: 0.0 – 4.0)
GOAL_Y1   = 1.3      # top of goal opening
GOAL_Y2   = 2.7      # bottom of goal opening
GOAL_X_L  = 0        # home GK's goal (left)
GOAL_X_R  = PITCH_W  # away GK's goal (right)

# Screen pitch viewport
VIEW_W    = 74       # pitch columns visible (fits in 80-col terminal)
VIEW_H    = 5        # pitch rows on screen (y snapped to 0–4)
PITCH_ROW = 3        # screen row where pitch starts

# Timing
FPS             = 15
FRAME_TIME      = 1.0 / FPS
REAL_HALF_SECS  = 90            # 1.5 min per half
GAME_HALF_MINS  = 45
TIME_PER_FRAME  = GAME_HALF_MINS / (REAL_HALF_SECS * FPS)  # game-min per frame

# Physics
PLAYER_SPEED    = 0.8    # units per frame (unsprinted)
SPRINT_MULT     = 1.55
SPRINT_MAX_FRAMES = 30   # ~2 seconds before slowdown
BALL_PASS_SPD   = 3.5
BALL_SHOT_SPD   = 6.0
BALL_FRICTION   = 0.88   # per frame when free
BALL_STOP_VEL   = 0.08   # stop threshold
PICKUP_RADIUS   = 0.55   # how close to pick up ball
TACKLE_RADIUS   = 1.0    # tackle range

# AI timing
AI_UPDATE_EVERY = 3      # update AI every N frames
SHOT_DIST       = 40     # AI shoots when within this x-distance of goal


# ── Data classes ─────────────────────────────────────────────────────────────
class Ball:
    def __init__(self):
        self.x   = float(PITCH_W // 2)
        self.y   = PITCH_H / 2
        self.vx  = 0.0
        self.vy  = 0.0
        self.carrier = None   # GamePlayer or None

    def update(self):
        if self.carrier:
            offset = 0.6 if self.carrier.attacking_right else -0.6
            self.x = self.carrier.x + offset
            self.y = self.carrier.y
        else:
            self.x += self.vx
            self.y += self.vy
            self.vx *= BALL_FRICTION
            self.vy *= BALL_FRICTION
            if abs(self.vx) < BALL_STOP_VEL: self.vx = 0.0
            if abs(self.vy) < BALL_STOP_VEL: self.vy = 0.0
            # bounce top/bottom
            if self.y < 0.0:
                self.y = 0.0
                self.vy = abs(self.vy) * 0.7
            elif self.y > PITCH_H:
                self.y = PITCH_H
                self.vy = -abs(self.vy) * 0.7
            # bounce off side walls (not goal areas)
            if self.x < 0:
                if not (GOAL_Y1 <= self.y <= GOAL_Y2):
                    self.x = 0.0
                    self.vx = abs(self.vx) * 0.7
            elif self.x > PITCH_W:
                if not (GOAL_Y1 <= self.y <= GOAL_Y2):
                    self.x = float(PITCH_W)
                    self.vx = -abs(self.vx) * 0.7


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
        self.role            = role           # 'GK', 'DEF', 'MID', 'ATT'
        self.attacking_right = attacking_right
        self.sprint_frames   = 0

    @property
    def speed(self) -> float:
        return PLAYER_SPEED * (0.6 + self.pace / 160.0)

    def dist(self, ox, oy) -> float:
        return math.sqrt((self.x - ox)**2 + (self.y - oy)**2)

    def move_toward(self, tx, ty, spd=None):
        spd = spd or self.speed
        dx = tx - self.x
        dy = ty - self.y
        d  = math.sqrt(dx*dx + dy*dy)
        if d > 0.01:
            self.x += (dx / d) * spd
            self.y += (dy / d) * spd
        self._clamp()

    def _clamp(self):
        self.x = max(1.0, min(float(PITCH_W) - 1.0, self.x))
        self.y = max(0.0, min(PITCH_H, self.y))


# ── Formation positions ───────────────────────────────────────────────────────
# Returns list of (x, y, role) for 11 players in a 4-3-3
_433_HOME = [
    (8,   2.0, "GK"),
    (28,  0.3, "DEF"),  # RB
    (25,  1.2, "DEF"),  # CB
    (25,  2.8, "DEF"),  # CB
    (28,  3.7, "DEF"),  # LB
    (52,  1.0, "MID"),  # RM
    (50,  2.0, "MID"),  # CM
    (52,  3.0, "MID"),  # LM
    (72,  0.4, "ATT"),  # RW
    (75,  2.0, "ATT"),  # ST
    (72,  3.6, "ATT"),  # LW
]

def _formation_positions(attacking_right: bool):
    if attacking_right:
        return [(x, y, r) for x, y, r in _433_HOME]
    else:
        return [(PITCH_W - x, PITCH_H - y, r) for x, y, r in _433_HOME]


def _build_squad(players, attacking_right: bool):
    """Create 11 GamePlayer objects from a data squad list."""
    positions = _formation_positions(attacking_right)
    team      = "home" if attacking_right else "away"
    squad     = []
    for i, (px, py, role) in enumerate(positions):
        if i < len(players):
            p = players[i]
            name  = p.name
            pace  = p.pace
            ovr   = p.overall
        else:
            name  = f"Player {i+1}"
            pace  = 70
            ovr   = 75
        squad.append(GamePlayer(name, team, px, py, pace, ovr, role, attacking_right))
    return squad


# ── Main game class ──────────────────────────────────────────────────────────
class PlayGame:

    def __init__(self, home_name, away_name, home_players, away_players):
        self.home_name    = home_name
        self.away_name    = away_name
        self.home_score   = 0
        self.away_score   = 0
        self.game_time    = 0.0     # 0–90 game-minutes
        self.half         = 1
        self.running      = True
        self.scorers      = []      # [(minute, team, name)]
        self.flash_msg    = ""
        self.flash_timer  = 0
        self.ai_tick      = 0

        # Build sides
        self.home_squad = _build_squad(home_players, attacking_right=True)
        self.away_squad = _build_squad(away_players, attacking_right=False)
        self.all_players  = self.home_squad + self.away_squad

        # Ball — kick-off: home ST has possession
        self.ball         = Ball()
        self.ball.x       = float(PITCH_W // 2)
        self.ball.y       = PITCH_H / 2
        st                = next((p for p in self.home_squad if p.role == "ATT"), self.home_squad[-1])
        st.x              = self.ball.x - 0.6
        st.y              = self.ball.y
        self.ball.carrier = st

        # Controlled player
        self.controlled   = st

        # Camera
        self.cam_x        = max(0, int(self.ball.x) - VIEW_W // 2)

        # Sprint state
        self.sprinting    = False

    # ── Main curses entry ────────────────────────────────────────────────────

    def run(self, stdscr):
        self._setup_colors(stdscr)
        curses.curs_set(0)
        stdscr.nodelay(True)
        stdscr.keypad(True)

        while self.running:
            t0  = time.time()
            key = stdscr.getch()
            self._handle_input(key, stdscr)

            if not self.flash_timer:
                self._update_game()

            self._render(stdscr)

            elapsed = time.time() - t0
            sleep   = FRAME_TIME - elapsed
            if sleep > 0:
                time.sleep(sleep)

        return self._build_result()

    # ── Input ────────────────────────────────────────────────────────────────

    def _handle_input(self, key, stdscr):
        c = self.controlled
        spd = c.speed * (SPRINT_MULT if self.sprinting else 1.0)

        dx, dy = 0.0, 0.0
        if   key == curses.KEY_UP:    dy = -spd
        elif key == curses.KEY_DOWN:  dy =  spd
        elif key == curses.KEY_LEFT:  dx = -spd
        elif key == curses.KEY_RIGHT: dx =  spd

        c.x += dx;  c.y += dy
        c._clamp()

        if self.ball.carrier is c:
            self.ball.x = c.x + (0.6 if c.attacking_right else -0.6)
            self.ball.y = c.y

        if key == ord(' ') or key == ord(' '):
            self._do_pass()
        elif key in (ord('z'), ord('Z')):
            self._do_shoot()
        elif key in (ord('x'), ord('X')):
            self.sprinting = True
            c.sprint_frames += 1
            if c.sprint_frames > SPRINT_MAX_FRAMES:
                self.sprinting = False
                c.sprint_frames = 0
        elif key in (ord('s'), ord('S')):
            self._do_tackle()
        elif key in (ord('q'), ord('Q')):
            self.running = False

        if key not in (ord('x'), ord('X')):
            self.sprinting = False
            c.sprint_frames = max(0, c.sprint_frames - 1)

    # ── Actions ──────────────────────────────────────────────────────────────

    def _do_pass(self):
        if self.ball.carrier is not self.controlled:
            return
        b  = self.ball
        c  = self.controlled
        # Find nearest teammate ahead in attacking direction
        sign     = 1 if c.attacking_right else -1
        ahead    = [p for p in self.home_squad if p is not c
                    and (p.x - c.x) * sign > -5]
        if not ahead:
            ahead = [p for p in self.home_squad if p is not c]
        if not ahead:
            return
        target   = min(ahead, key=lambda p: p.dist(c.x, c.y))
        dx       = target.x - c.x
        dy       = target.y - c.y
        dist     = math.sqrt(dx*dx + dy*dy)
        if dist < 0.1:
            return
        b.carrier = None
        b.vx      = (dx / dist) * BALL_PASS_SPD
        b.vy      = (dy / dist) * BALL_PASS_SPD

    def _do_shoot(self):
        if self.ball.carrier is not self.controlled:
            return
        b   = self.ball
        c   = self.controlled
        gx  = float(GOAL_X_R) if c.attacking_right else float(GOAL_X_L)
        gy  = (GOAL_Y1 + GOAL_Y2) / 2
        dx  = gx - c.x
        dy  = gy - c.y
        dist = math.sqrt(dx*dx + dy*dy)
        if dist < 0.1:
            return
        b.carrier = None
        b.vx      = (dx / dist) * BALL_SHOT_SPD
        b.vy      = (dy / dist) * BALL_SHOT_SPD
        # add slight inaccuracy
        b.vy     += random.uniform(-0.3, 0.3)

    def _do_tackle(self):
        c = self.controlled
        if self.ball.carrier and self.ball.carrier.team == "away":
            opp = self.ball.carrier
            if c.dist(opp.x, opp.y) <= TACKLE_RADIUS:
                # Tackle success probability based on ratings
                success_p = 0.45 + (c.overall - opp.overall) * 0.008
                success_p = max(0.2, min(0.75, success_p))
                if random.random() < success_p:
                    self.ball.carrier = None
                    self.ball.vx = random.uniform(-0.5, 0.5)
                    self.ball.vy = random.uniform(-0.5, 0.5)

    # ── Update ───────────────────────────────────────────────────────────────

    def _update_game(self):
        # Advance time
        self.game_time += TIME_PER_FRAME

        # Update ball
        self.ball.update()

        # Check for pickup by any player
        self._check_pickups()

        # AI update every N frames
        self.ai_tick = (self.ai_tick + 1) % AI_UPDATE_EVERY
        if self.ai_tick == 0:
            self._update_ai()

        # Auto-switch controlled player
        self._auto_switch_controlled()

        # Camera
        self.cam_x = int(max(0, min(PITCH_W - VIEW_W, self.ball.x - VIEW_W // 2)))

        # Tick flash down
        if self.flash_timer > 0:
            self.flash_timer -= 1

        # Check goal
        self._check_goal()

        # Check half-time / full-time
        if self.game_time >= 45.0 and self.half == 1:
            self._halftime()
        elif self.game_time >= 90.0:
            self.running = False

    def _check_pickups(self):
        if self.ball.carrier:
            return
        b = self.ball
        for p in self.all_players:
            if p.dist(b.x, b.y) <= PICKUP_RADIUS:
                self.ball.carrier = p
                b.vx = 0.0
                b.vy = 0.0
                break

    def _check_goal(self):
        b = self.ball
        scored = None

        if b.x <= GOAL_X_L and GOAL_Y1 <= b.y <= GOAL_Y2:
            # Ball in home goal → away scores
            self.away_score += 1
            scorer = self._last_away_toucher()
            scored = ("away", scorer)

        elif b.x >= GOAL_X_R and GOAL_Y1 <= b.y <= GOAL_Y2:
            # Ball in away goal → home scores
            self.home_score += 1
            scorer = self._last_home_toucher()
            scored = ("home", scorer)

        if scored:
            team, name = scored
            minute = int(self.game_time)
            self.scorers.append((minute, team, name))
            self.flash_msg   = f"  GOAL!  {name}  {minute}'"
            self.flash_timer = FPS * 2   # 2 seconds
            self._reset_kickoff(scored_team=team)

    def _last_home_toucher(self):
        # Return the controlled player as likely scorer
        if self.controlled and self.controlled.team == "home":
            return self.controlled.name
        return next((p.name for p in self.home_squad if p.role == "ATT"), self.home_squad[-1].name)

    def _last_away_toucher(self):
        carrier = self.ball.carrier
        if carrier and carrier.team == "away":
            return carrier.name
        return next((p.name for p in self.away_squad if p.role == "ATT"), self.away_squad[-1].name)

    def _reset_kickoff(self, scored_team: str):
        """Reset ball to centre; team that conceded kicks off."""
        self.ball.carrier = None
        self.ball.vx = 0.0
        self.ball.vy = 0.0
        self.ball.x  = float(PITCH_W // 2)
        self.ball.y  = PITCH_H / 2

        # Reset all players to formation positions
        home_pos = _formation_positions(attacking_right=True)
        away_pos = _formation_positions(attacking_right=False)
        for p, (px, py, _) in zip(self.home_squad, home_pos):
            p.x = float(px); p.y = float(py)
            p.home_x = float(px); p.home_y = float(py)
        for p, (px, py, _) in zip(self.away_squad, away_pos):
            p.x = float(px); p.y = float(py)
            p.home_x = float(px); p.home_y = float(py)

        # Give ball to the conceding team's striker
        ko_squad = self.away_squad if scored_team == "away" else self.home_squad
        st = next((p for p in ko_squad if p.role == "ATT"), ko_squad[-1])
        st.x = float(PITCH_W // 2) + (-0.6 if st.attacking_right else 0.6)
        st.y = PITCH_H / 2
        self.ball.carrier = st
        self.controlled   = st if st.team == "home" else self.controlled

    def _halftime(self):
        """Trigger half-time: pause and swap sides."""
        self.half       = 2
        self.game_time  = 45.0

        # Swap attacking direction for all players
        for p in self.home_squad:
            p.attacking_right = False
            p.home_x = float(PITCH_W) - p.home_x
            p.home_y = PITCH_H - p.home_y
            p.x      = p.home_x
            p.y      = p.home_y
        for p in self.away_squad:
            p.attacking_right = True
            p.home_x = float(PITCH_W) - p.home_x
            p.home_y = PITCH_H - p.home_y
            p.x      = p.home_x
            p.y      = p.home_y

        self.ball.carrier = None
        self.ball.x = float(PITCH_W // 2)
        self.ball.y = PITCH_H / 2
        # Away ST kicks off second half
        st = next((p for p in self.away_squad if p.role == "ATT"), self.away_squad[-1])
        st.x = float(PITCH_W // 2) + 0.6
        st.y = PITCH_H / 2
        self.ball.carrier = st
        self.controlled   = next((p for p in self.home_squad if p.role == "ATT"), self.home_squad[-1])
        self.flash_msg    = "  H A L F   T I M E  —  Press any key to continue"
        self.flash_timer  = FPS * 4

    # ── AI ───────────────────────────────────────────────────────────────────

    def _update_ai(self):
        b = self.ball
        for p in self.away_squad:
            goal_x = float(GOAL_X_L) if not p.attacking_right else float(GOAL_X_R)

            if b.carrier is p:
                # Ball carrier: move toward goal, shoot if close
                dist_to_goal = abs(p.x - goal_x)
                if dist_to_goal < SHOT_DIST and GOAL_Y1 <= p.y <= GOAL_Y2 + 1:
                    # Shoot
                    dy = (GOAL_Y1 + GOAL_Y2) / 2 - p.y
                    dx = goal_x - p.x
                    dist = math.sqrt(dx*dx + dy*dy)
                    if dist > 0.1:
                        b.carrier = None
                        b.vx = (dx / dist) * BALL_SHOT_SPD
                        b.vy = (dy / dist) * BALL_SHOT_SPD + random.uniform(-0.25, 0.25)
                else:
                    # Dribble toward goal
                    ty = PITCH_H / 2 + random.uniform(-0.3, 0.3)
                    p.move_toward(goal_x, ty, p.speed)

            elif b.carrier and b.carrier.team == "away":
                # Teammate has ball — run into space
                sign = -1 if p.attacking_right else 1
                tx   = p.home_x + sign * 10
                ty   = p.home_y + random.uniform(-0.5, 0.5)
                tx   = max(1.0, min(float(PITCH_W) - 1.0, tx))
                ty   = max(0.0, min(PITCH_H, ty))
                p.move_toward(tx, ty, p.speed * 0.8)

            elif p.role == "GK":
                # GK tracks ball vertically, stays near goal line
                gk_x = 5.0 if not p.attacking_right else float(PITCH_W) - 5.0
                p.move_toward(gk_x, b.y, p.speed * 0.7)

            elif p.role == "DEF":
                # Defenders: get between ball and own goal
                own_goal_x = float(GOAL_X_R) if not p.attacking_right else float(GOAL_X_L)
                tx = (b.x + own_goal_x) / 2
                ty = b.y + random.uniform(-0.5, 0.5)
                tx = max(1.0, min(float(PITCH_W) - 1.0, tx))
                ty = max(0.0, min(PITCH_H, ty))
                p.move_toward(tx, ty, p.speed * 0.85)

            else:
                # MID/ATT: press toward ball
                p.move_toward(b.x + random.uniform(-2, 2),
                               b.y + random.uniform(-0.3, 0.3),
                               p.speed * 0.75)

        # AI passing: if away carrier far from goal, pass to nearby teammate
        carrier = self.ball.carrier
        if carrier and carrier.team == "away":
            goal_x = float(GOAL_X_L) if not carrier.attacking_right else float(GOAL_X_R)
            if abs(carrier.x - goal_x) > 80 and random.random() < 0.04:
                teammates = [p for p in self.away_squad if p is not carrier]
                if teammates:
                    t   = random.choice(teammates)
                    dx  = t.x - carrier.x
                    dy  = t.y - carrier.y
                    d   = math.sqrt(dx*dx + dy*dy)
                    if d > 0.1:
                        self.ball.carrier = None
                        self.ball.vx      = (dx / d) * BALL_PASS_SPD
                        self.ball.vy      = (dy / d) * BALL_PASS_SPD

    def _auto_switch_controlled(self):
        """Switch controlled player to whoever is nearest the ball on home team."""
        b = self.ball
        if b.carrier and b.carrier.team == "home":
            self.controlled = b.carrier
        elif b.carrier is None:
            nearest = min(self.home_squad,
                          key=lambda p: p.dist(b.x, b.y))
            self.controlled = nearest

    # ── Rendering ────────────────────────────────────────────────────────────

    def _setup_colors(self, stdscr):
        if curses.has_colors():
            curses.start_color()
            curses.use_default_colors()
            curses.init_pair(1, curses.COLOR_WHITE,  curses.COLOR_GREEN)  # home player
            curses.init_pair(2, curses.COLOR_YELLOW, curses.COLOR_GREEN)  # controlled
            curses.init_pair(3, curses.COLOR_RED,    curses.COLOR_GREEN)  # opponent
            curses.init_pair(4, curses.COLOR_WHITE,  curses.COLOR_GREEN)  # ball
            curses.init_pair(5, curses.COLOR_BLACK,  curses.COLOR_GREEN)  # pitch BG
            curses.init_pair(6, curses.COLOR_WHITE,  -1)                  # UI text
            curses.init_pair(7, curses.COLOR_YELLOW, -1)                  # score
            curses.init_pair(8, curses.COLOR_GREEN,  -1)                  # goal flash
            curses.init_pair(9, curses.COLOR_CYAN,   -1)                  # controls

    def _render(self, stdscr):
        stdscr.erase()
        h, w = stdscr.getmaxyx()

        if w < 80 or h < 12:
            self._safe_addstr(stdscr, 0, 0, "Terminal too small — needs 80x12 minimum.", curses.A_BOLD)
            stdscr.refresh()
            return

        self._render_scoreboard(stdscr, w)
        self._render_pitch(stdscr, w)
        self._render_players(stdscr)
        self._render_ball(stdscr)
        if self.flash_timer > 0:
            self._render_flash(stdscr, w)
        self._render_controls(stdscr, w)
        stdscr.refresh()

    def _render_scoreboard(self, stdscr, w):
        minute = int(min(self.game_time, 90))
        half_tag = "HT" if self.half == 2 and minute == 45 else f"{minute:02d}'"
        score_str = f"  {self.home_name}  {self.home_score} - {self.away_score}  {self.away_name}"
        time_str  = f"{half_tag}  "
        line = f"{score_str:<{w-len(time_str)-2}}{time_str}"
        self._safe_addstr(stdscr, 0, 0, "─" * min(w-1, 78), curses.color_pair(6))
        self._safe_addstr(stdscr, 1, 0, line[:w-1], curses.color_pair(7) | curses.A_BOLD)
        self._safe_addstr(stdscr, 2, 0, "─" * min(w-1, 78), curses.color_pair(6))

    def _render_pitch(self, stdscr, w):
        pitch_bg = curses.color_pair(5) | curses.A_DIM
        # Draw grass rows
        for row in range(VIEW_H):
            sy = PITCH_ROW + row
            # Left border column
            self._safe_addch(stdscr, sy, 1, '▓', pitch_bg)
            # Grass
            for col in range(VIEW_W):
                self._safe_addch(stdscr, sy, col + 2, ' ', pitch_bg)
            # Right border column
            self._safe_addch(stdscr, sy, VIEW_W + 2, '▓', pitch_bg)

        # Goal posts (if in camera view)
        self._render_goalpost(stdscr, GOAL_X_L, left=True)
        self._render_goalpost(stdscr, GOAL_X_R, left=False)

    def _render_goalpost(self, stdscr, goal_x, left: bool):
        sx = (goal_x - self.cam_x) + 2
        if not (0 <= sx < VIEW_W + 4):
            return
        for gy in (GOAL_Y1, GOAL_Y2):
            sy = PITCH_ROW + round(gy)
            self._safe_addch(stdscr, sy, int(sx), '|',
                             curses.color_pair(6) | curses.A_BOLD)

    def _render_players(self, stdscr):
        for p in self.home_squad:
            sx = round(p.x - self.cam_x) + 2
            sy = PITCH_ROW + round(p.y)
            if 1 <= sx <= VIEW_W + 2 and PITCH_ROW <= sy < PITCH_ROW + VIEW_H:
                if p is self.controlled:
                    ch   = ord('*') if p.role == "GK" else ord('A')
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
                attr = curses.color_pair(3)
                self._safe_addch(stdscr, sy, sx, ch, attr)

    def _render_ball(self, stdscr):
        b  = self.ball
        sx = round(b.x - self.cam_x) + 2
        sy = PITCH_ROW + round(b.y)
        if 1 <= sx <= VIEW_W + 2 and PITCH_ROW <= sy < PITCH_ROW + VIEW_H:
            self._safe_addch(stdscr, sy, sx, ord('o'),
                             curses.color_pair(4) | curses.A_BOLD)

    def _render_flash(self, stdscr, w):
        msg = self.flash_msg
        row = PITCH_ROW + VIEW_H // 2
        col = max(0, (w - len(msg)) // 2)
        self._safe_addstr(stdscr, row, col, msg[:w-1],
                         curses.color_pair(8) | curses.A_BOLD)

    def _render_controls(self, stdscr, w):
        ctrl = " [Arrows] Move  [SPC] Pass  [Z] Shoot  [X] Sprint  [S] Tackle  [Q] Quit"
        row  = PITCH_ROW + VIEW_H
        self._safe_addstr(stdscr, row,     0, "─" * min(w-1, 78), curses.color_pair(6))
        self._safe_addstr(stdscr, row + 1, 0, ctrl[:w-1],          curses.color_pair(9))

    # ── Helpers ──────────────────────────────────────────────────────────────

    @staticmethod
    def _safe_addch(stdscr, y, x, ch, attr=0):
        try:
            stdscr.addch(y, x, ch, attr)
        except curses.error:
            pass

    @staticmethod
    def _safe_addstr(stdscr, y, x, s, attr=0):
        try:
            stdscr.addstr(y, x, s, attr)
        except curses.error:
            pass

    def _build_result(self) -> dict:
        return {
            "home_name":  self.home_name,
            "away_name":  self.away_name,
            "home_score": self.home_score,
            "away_score": self.away_score,
            "scorers":    self.scorers,
        }


# ── Full-time screen (non-curses) ────────────────────────────────────────────
def _show_fulltime(result: dict):
    from engine.display import (
        clear, header, section, pause,
        BOLD, RESET, GREEN, YELLOW, CYAN, DIM, GOLD, color
    )
    clear()
    header("F U L L   T I M E", 60)
    print(f"\n  {BOLD}{GOLD}{result['home_name']:<26}  {result['home_score']} - {result['away_score']}  {result['away_name']}{RESET}\n")

    if result["scorers"]:
        section("GOALS", 60)
        for minute, team, name in sorted(result["scorers"]):
            t_color = GREEN if team == "home" else CYAN
            print(f"  {color('⚽', t_color)}  {name:<28} {minute}'")
    else:
        print(f"  {DIM}No goals scored.{RESET}")

    pause()


# ── Pre-match club selector ───────────────────────────────────────────────────
def run():
    """Play the Game entry point."""
    from data.players import PLAYERS_BY_CLUB, PLAYERS
    from data.clubs import CLUBS, CLUB_LIST
    from engine.display import (
        clear, header, section, confirm, pause,
        BOLD, RESET, CYAN, YELLOW, RED, DIM, color
    )
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
                print(f"  {RED}Enter 1–{len(CLUB_LIST)}.{RESET}")
            except (ValueError, EOFError):
                return random.choice(CLUB_LIST)

    home_name = pick("YOUR team (home) number")
    away_name = pick("Opponent (away) number")

    print(f"\n  {BOLD}{color(home_name, CYAN)}  (YOU)  vs  {color(away_name, YELLOW)}{RESET}")
    if not confirm("Kick off?"):
        return

    # Build data squads
    home_players = PLAYERS_BY_CLUB.get(home_name, [])
    away_players = PLAYERS_BY_CLUB.get(away_name, [])
    while len(home_players) < 11:
        home_players = list(home_players) + [random.choice(PLAYERS)]
    while len(away_players) < 11:
        away_players = list(away_players) + [random.choice(PLAYERS)]

    game   = PlayGame(home_name, away_name,
                      home_players[:11], away_players[:11])
    result = curses.wrapper(game.run)
    _show_fulltime(result)
