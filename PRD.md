# THE BEAUTIFUL GAME 2026
## Product Requirements Document (PRD)
### MVP Release — Version 1.0
**Author:** Claude (on behalf of Ori Franklin)
**Date:** 2026-03-17
**Status:** DRAFT — Awaiting owner approval

---

## 1. VISION

A terminal-based football simulation game built for football fans who want the *feel* of a modern football game without a controller or a GPU. The experience should be atmospheric, stat-driven, and replayable in under 10 minutes per session.

**Guiding principle:** Every screen should feel like you're inside a football world, not a spreadsheet.

---

## 2. MVP SCOPE

The MVP contains exactly four features:

| # | Feature | Description |
|---|---|---|
| 1 | **Stadium Splash Screen** | The first thing you see when launching. Full atmosphere before any menu. |
| 2 | **Match Engine** | The simulation core — stats-based, outcome-varied, event-driven. |
| 3 | **Play the Game** | PRIMARY feature — keyboard-controlled interactive football match vs AI. |
| 4 | **Watch the Play** | Auto-simulation mode (formerly Quick Match) — pick two teams, watch it unfold. |

---

## 3. OUT OF SCOPE (V2+)

The following are explicitly **not** in MVP. They will be designed after v1 ships:

| Feature | Rationale |
|---|---|
| The Journey (Ori Franklin story mode) | Requires personal narrative content — gathered post-MVP |
| Career Mode | Full season loop, transfers, training — too broad for v1 |
| FIFA Ultimate Team equivalent | Pack system + chemistry = separate product complexity |
| Player Database browser | Utility screen, no gameplay value at MVP |
| Leagues / Tournaments | Season simulation requires standings, scheduling, tiebreakers |
| Save / Load | No persistent state needed when there's only one mode |

---

## 4. BRANDING & COPYRIGHT GUIDELINES

### 4.1 Game Name
**THE BEAUTIFUL GAME 2026**
- "The Beautiful Game" is a widely used football expression (attributed to Pelé) — not trademarked for software
- No "FIFA", "EA", "EA Sports", "Frostbite", or any registered game title may appear anywhere in the codebase, UI, or assets

### 4.2 Club Names — CONFIRMED BY ORI

| Real Club | In-Game Name (confirmed) |
|---|---|
| Manchester United | **Red Devils United** |
| Manchester City | **Blues Man City** |
| Liverpool | **The Reds Liverpool** |
| Arsenal | **The Gunners FC** |
| Chelsea | **The Blues Chelsea** |
| Tottenham Hotspur | **Hotspur FC** |
| Real Madrid | **White Madrid FC** |
| FC Barcelona | **Catalonia FC** |
| Atletico Madrid | **Colchoneros Madrid** |
| Bayern Munich | **Munich FC** |
| Borussia Dortmund | **Yellow Wall FC** |
| Juventus | **La Vecchia FC** |
| PSG | **Parisians FC** |
| Inter Milan | **Nerazzurri FC** |
| AC Milan | **Rossoneri FC** |

### 4.3 Player Names
Real player names are **not trademarked** (they are people's names) and are used for informational/simulation purposes. No player likeness, image, or signature is reproduced. This is consistent with how football stats websites, fantasy football platforms, and journalism operate.

### 4.4 Leagues
| Real League | In-Game Name |
|---|---|
| Premier League | **Premier Division** |
| La Liga | **Primera División** (descriptive, not trademarked) |
| Bundesliga | **German Top Flight** |
| Serie A | **Italian First Division** |
| Ligue 1 | **French First Division** |

---

## 5. FEATURE SPEC: STADIUM SPLASH SCREEN

### 5.1 Purpose
Replace the current plain text main menu with a full atmospheric stadium screen. This is the emotional hook — the thing that makes you *feel* like you're about to play football.

### 5.2 Layout
```
┌─────────────────────────────────────────────────────────────────┐
│  TOP HALF: Stadium art + rotating player card                   │
│                                                                 │
│   [ASCII Stadium — stands, pitch markings, floodlights]        │
│   [Crowd rows in ASCII across the stands]                       │
│                                                                 │
│   ★  PLAYER SPOTLIGHT  ★                                       │
│   [Player card: name, club, OVR, key stats]                     │
│   [Different player rendered on every launch]                   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│  BOTTOM HALF: Main menu                                         │
│                                                                 │
│   THE BEAUTIFUL GAME 2026                                       │
│                                                                 │
│   1. Quick Match                                                │
│   2. [greyed out — coming soon] Career Mode                     │
│   3. [greyed out — coming soon] The Journey                     │
│   4. Quit                                                       │
└─────────────────────────────────────────────────────────────────┘
```

### 5.3 Stadium Art Requirements
- Visible **pitch markings**: centre circle, penalty areas, touchlines
- **Stands** on both sides with ASCII crowd characters (`♟ ♙ | o O`)
- **Floodlights** implied by top corners
- **Scoreboard** element (blank/00:00 on startup)
- Minimum terminal width: 80 columns
- Scales gracefully to 120 columns

### 5.4 Player Spotlight
- On each launch, one player is selected at random from the full roster (76 players + Icons)
- The card shows: Name, Club (in-game name), Position, OVR, and three headline stats relevant to their position
  - GK: Reflexes, Positioning, Kicking
  - DEF: Defending, Physical, Pace
  - MID: Passing, Dribbling, Vision
  - ATT: Shooting, Pace, Dribbling
- Cards are styled differently by overall tier:
  - 90+ OVR → Gold border styling
  - 85–89 → Silver border styling
  - 75–84 → Standard
- One new player is shown per session (not per keypress — it randomises at load, stays fixed during the session)

### 5.5 "Coming Soon" Menu Items
Career Mode and The Journey appear in the menu but are visually dimmed and non-selectable, with a `[Coming Soon]` tag. This communicates roadmap intent without shipping incomplete features.

---

## 6. FEATURE SPEC: MATCH ENGINE

### 6.1 Purpose
The statistical simulation core that determines match outcomes, generates minute-by-minute events, calculates player ratings, and identifies the Man of the Match.

### 6.2 Simulation Model
The engine uses a **possession-then-attack** model per simulated phase:

**Phase 1 — Possession**
- Base possession split: 50/50
- Modified by: midfield rating differential, team style (pressing vs counter)
- Capped at 70/30 maximum split

**Phase 2 — Attack generation**
- Number of attacks per team derived from: possession %, team attack style multiplier, Gaussian noise (±3)
- Minimum 4 attacks per team per match

**Phase 3 — Attack resolution (per attack)**
Each attack resolves to one of three outcomes:
```
GOAL   → attacker scores
SAVE   → keeper stops the shot
MISS   → off target / blocked / over the bar
```
Resolution probability uses:
- Attack rating vs defence rating ratio
- Fitness modifier (degrades with matches played — not tracked in MVP, fixed at 100%)
- Team pressing intensity penalty
- Random noise (Gaussian, σ=0.08)

**Phase 4 — Events**
Each resolved attack generates a `MatchEvent` with:
- Minute (unique, 1–90)
- Type (goal / save / miss / yellow / red)
- Player name (weighted random selection by position rating)
- Detail string (goal type, miss type, save by)

**Phase 5 — Player Ratings**
Post-match ratings assigned (1.0–10.0 scale) based on:
- Player overall vs squad average
- Goal scored: +1.5
- Clean sheet (GK): +1.0
- Gaussian noise: ±0.4

Man of the Match = highest individual rating.

### 6.3 Team Styles
Each club has a defined playing style that modifies simulation parameters:

| Style | Possession Δ | Attack Freq | Press Intensity |
|---|---|---|---|
| Tiki-Taka | +8% | ×1.0 | ×1.1 |
| High Press | 0% | ×1.3 | ×1.4 |
| Counter-Attack | -6% | ×0.9 | ×0.7 |
| Gegenpressing | +2% | ×1.4 | ×1.5 |
| Direct Play | -3% | ×1.2 | ×0.9 |
| Balanced | 0% | ×1.0 | ×1.0 |

### 6.4 Output
The engine returns a `MatchResult` object containing:
- Final score
- Scorer list with minutes
- Full event timeline
- Possession stats
- Shot counts (total + on target)
- Player rating map
- Man of the Match

### 6.5 Match Display
Events are printed chronologically with colour coding:
- ⚽ Goals → **Green**
- 🟨 Yellow card → **Yellow**
- 🟥 Red card → **Red**
- 🧤 Saves → **Cyan**
- 💨 Misses → **Dim**

Post-match: score, possession bar, shot stats, player ratings table, MoTM callout.

---

## 7. FEATURE SPEC: PLAY THE GAME (PRIMARY MVP FEATURE)

### 7.1 Purpose
The core product. An interactive, real-time, keyboard-controlled football match played
against the computer AI in a side-scrolling terminal view.

### 7.2 Confirmed Design Decisions

| Decision | Choice |
|---|---|
| Pitch view | Side-scrolling (camera follows ball horizontally) |
| Player control | Auto-switch to nearest home player to ball |
| Match length | 3 real minutes = 90 game minutes |
| Half-time | At 1:30 real time, scoreboard shows 45' |
| AI difficulty | Fixed for MVP |
| Goal moment | 2-second flash + GOAL! banner, then auto kick-off |

### 7.3 Control Scheme

| Key | Action |
|---|---|
| `↑ ↓ ← →` | Move controlled player |
| `Space` | Pass to nearest teammate in attacking direction |
| `Z` | Shoot toward goal |
| `X` | Sprint (burst speed, temporary) |
| `S` | Tackle / press nearest opponent |
| `Q` | Quit match (return to menu) |

### 7.4 Screen Layout (80-column terminal)
```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Red Devils United  0 - 0  Catalonia FC                           00'        │
├──────────────────────────────────────────────────────────────────────────────┤
│▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▓│
│▓  x   x       x              A    A    A                               [G] ▓│
│▓  G        x           ● ★                   A         A                  ▓│
│▓  x   x       x              A    A    A                                   ▓│
│▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▓│
├──────────────────────────────────────────────────────────────────────────────┤
│ [↑↓←→] Move  [SPC] Pass  [Z] Shoot  [X] Sprint  [S] Tackle  [Q] Quit       │
└──────────────────────────────────────────────────────────────────────────────┘
```

Symbols: `★` controlled player · `A` teammate · `x` opponent · `G` keeper · `●` ball

### 7.5 Pitch Mechanics
- Abstract pitch: 200 units wide × 5 rows tall (y: 0.0–4.0)
- Goals at x=0 (home GK) and x=200 (away GK), y=1.5–2.5 (centre strip)
- Camera: 76-unit window following ball horizontally
- Ball friction: decelerates naturally after pass/shot
- Ball bounces off top/bottom touchlines
- Out of bounds (side): bounces back (no throw-in logic in MVP)

### 7.6 AI Behaviour (fixed difficulty)
- **Ball carrier:** moves toward opponent goal, shoots when close (x > 150)
- **Attackers (no ball):** run into space ahead of the ball
- **Midfielders:** press toward ball when opponent has possession
- **Defenders:** position between ball and own goal
- **GK:** tracks ball vertically, stays near goal line

### 7.7 Half-Time
- Pause at 45 game minutes (1:30 real time)
- Show half-time screen with score
- Teams swap attack direction for second half
- Press `Enter` to kick off second half

### 7.8 Full-Time
- At 90 game minutes (3:00 real time), match ends
- Show full-time screen: score, goal scorers, Player of the Match
- Press `Enter` to return to main menu

---

## 8. FEATURE SPEC: WATCH THE PLAY (formerly Quick Match)

### 8.1 Purpose
Auto-simulation mode — pick two clubs, watch the match play out as a live event feed.
No interaction during the match. Good for seeing how teams match up statistically.

### 8.2 User Flow
```
Stadium Splash → Main Menu → Watch the Play
  → Show club list (numbered, with league)
  → User picks Home team
  → User picks Away team
  → Confirm: "Kick off? [y/n]"
  → Match simulation runs instantly
  → Live event feed displayed (coloured by event type)
  → Post-match stats screen
  → Press Enter → return to Main Menu
```

### 8.3 Post-Match Screen
1. **Score** (large, prominent)
2. **Goal scorers** with minutes
3. **Match stats** — possession, shots, shots on target
4. **Player ratings** — top 5 performers from each side
5. **Man of the Match** — highlighted callout

---

## 9. TECHNICAL ARCHITECTURE

### 8.1 Stack
- **Language:** Python 3.10+
- **Dependencies:** Standard library only (no pip installs required)
- **Terminal:** ANSI escape codes for colour — works on macOS, Linux, Windows Terminal

### 9.2 File Structure (MVP)
```
/
├── main.py                ← Entry point
├── data/
│   ├── players.py         ← Player roster (76 players + Icons)
│   └── clubs.py           ← Club data (renamed), leagues, styles
├── engine/
│   ├── match.py           ← Watch the Play simulation engine
│   └── display.py         ← Terminal UI (colours, tables, menus)
├── screens/
│   └── stadium.py         ← Splash screen (ASCII art + player card)
└── modes/
    ├── play_game.py        ← Play the Game (curses interactive)
    └── watch_play.py       ← Watch the Play (auto-simulation)
```

### 9.3 Entry Point
```
python main.py
```

### 9.4 Terminal Requirements
- Minimum 80-column width (Play the Game requires exactly 80+)
- UTF-8 support (for ⚽ 🟨 🟥 ★ ● characters)
- ANSI colour support
- curses support (standard on macOS/Linux; `windows-curses` on Windows)

---

## 10. NON-FUNCTIONAL REQUIREMENTS

| Requirement | Target |
|---|---|
| Match simulation speed | < 0.5 seconds per match |
| Splash screen load time | < 0.2 seconds |
| Terminal width minimum | 80 columns |
| Python version | 3.10+ |
| External dependencies | Zero |
| OS compatibility | macOS, Linux, Windows Terminal |

---

## 11. SUCCESS CRITERIA FOR MVP

The MVP is considered complete when:

- [ ] `python main.py` launches and shows the stadium splash screen
- [ ] A different player is spotlit every time the game loads
- [ ] The main menu shows: Play the Game, Watch the Play, Career Mode [Coming Soon], The Journey [Coming Soon], Quit
- [ ] **Play the Game:** arrow keys move the controlled player
- [ ] **Play the Game:** Space passes to nearest teammate
- [ ] **Play the Game:** Z shoots toward goal
- [ ] **Play the Game:** X sprints
- [ ] **Play the Game:** S tackles
- [ ] **Play the Game:** controlled player auto-switches to nearest player to ball
- [ ] **Play the Game:** scoreboard shows game time (00'–90')
- [ ] **Play the Game:** half-time pause at 45', teams swap sides for second half
- [ ] **Play the Game:** GOAL flash when ball crosses goal line, 2-second pause, auto kick-off
- [ ] **Watch the Play:** auto-simulation in under 1 second with coloured event feed
- [ ] No FIFA, EA Sports, Premier League, or other trademarked brand names appear anywhere in the output
- [ ] The word "FIFA" appears zero times in any source file

---

## 12. RESOLVED QUESTIONS

| # | Question | Answer |
|---|---|---|
| 1 | Game name | THE BEAUTIFUL GAME 2026 ✅ |
| 2 | Club names | Altered names per §4.2 ✅ |
| 3 | Spotlight players | Existing roster is good ✅ |
| 4 | Pitch view | Side-scrolling ✅ |
| 5 | Player control | Auto-switch to nearest ✅ |
| 6 | Match length | 3 real min = 90 game min, half at 1:30 ✅ |
| 7 | AI difficulty | Fixed for MVP ✅ |
| 8 | Goal moment | Flash + 2-second auto-resume ✅ |

---

*End of PRD — Version 1.1 — All open questions resolved. Build approved.*
