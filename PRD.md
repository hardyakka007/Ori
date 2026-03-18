# THE BEAUTIFUL GAME 2026
## Product Requirements Document (PRD)
### MVP Release — Version 1.2
**Author:** Claude (on behalf of Ori Franklin)
**Date:** 2026-03-18
**Status:** DRAFT — Awaiting owner approval

---

## 1. VISION

A **web-based** football simulation game built for football fans who want the *feel* of a modern football game without a controller or a GPU. The experience should be atmospheric, stat-driven, and replayable in under 10 minutes per session.

**Guiding principle:** Every screen should feel like you're inside a football world, not a spreadsheet.

---

## 2. MVP SCOPE

The MVP contains exactly four features:

| # | Feature | Description |
|---|---|---|
| 1 | **Stadium Splash Screen** | The first thing you see when launching. Full atmosphere before any menu. |
| 2 | **Match Engine** | The simulation core — stats-based, outcome-varied, event-driven. |
| 3 | **Play the Game** | PRIMARY feature — keyboard-controlled interactive football match vs AI on an HTML5 Canvas. |
| 4 | **Watch the Play** | Auto-simulation mode — pick two teams, watch the event feed unfold. |

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
| Mobile / touch controls | Canvas game targets desktop keyboard for MVP |

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
The landing page of the web app. A full atmospheric stadium screen before any menu interaction. This is the emotional hook — the thing that makes you *feel* like you're about to play football.

### 5.2 Layout (Web)
```
┌─────────────────────────────────────────────────────────────────┐
│  TOP HALF: Stadium hero section                                 │
│                                                                 │
│   [Stadium SVG/CSS art — stands, pitch markings, floodlights]  │
│   [Crowd rows with animated subtle sway]                        │
│                                                                 │
│   ★  PLAYER SPOTLIGHT  ★                                       │
│   ┌──────────────────────────────────────────────┐             │
│   │  [Player Face Portrait — 120×120px circle]   │             │
│   │  Name · Club · Position · OVR                │             │
│   │  [Stat 1]  [Stat 2]  [Stat 3]               │             │
│   └──────────────────────────────────────────────┘             │
│   [Different player rendered on every page load]                │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│  BOTTOM HALF: Main menu                                         │
│                                                                 │
│   THE BEAUTIFUL GAME 2026                                       │
│                                                                 │
│   [ Play the Game ]                                             │
│   [ Watch the Play ]                                            │
│   [ Career Mode — Coming Soon ]   (greyed, disabled)           │
│   [ The Journey — Coming Soon ]   (greyed, disabled)           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 5.3 Stadium Art Requirements
- Rendered with SVG or CSS — no raster images required
- Visible **pitch markings**: centre circle, penalty areas, touchlines
- **Stands** on both sides with a stylised crowd layer
- **Floodlights** implied in the top corners
- **Scoreboard** element (blank / 00:00 on startup)
- Responsive: minimum 800 px wide desktop layout; graceful scaling up to 1440 px

### 5.4 Player Spotlight
- On each page load, the Flask backend selects one player at random from the full roster (76 players + Icons) and returns it via the `/api/spotlight` endpoint
- The Vue component displays: **Face portrait**, Name, Club (in-game name), Position, OVR, and three headline stats relevant to their position
  - GK: Reflexes, Positioning, Kicking
  - DEF: Defending, Physical, Pace
  - MID: Passing, Dribbling, Vision
  - ATT: Shooting, Pace, Dribbling
- Cards are styled differently by overall tier:
  - 90+ OVR → Gold card styling
  - 85–89 → Silver card styling
  - 75–84 → Standard card styling
- One player per page load — does not re-roll on navigation within the SPA

### 5.5 Player Face Portrait — Spotlight Card
- Each player card in the spotlight shows a **circular cropped portrait** (120 × 120 px) at the top of the card
- Portrait source: `frontend/src/assets/faces/<player_id>.png` — one image file per player
- Image rendering: `object-fit: cover`, circular clip via `border-radius: 50%`
- **Fallback** (if image file is missing): render a CSS silhouette placeholder styled in the card's tier colour (gold / silver / standard)
- The `/api/spotlight` response includes a `face_url` field pointing to the asset path; the Vue component binds `<img :src="player.face_url" />`
- Portrait images are **not** in-scope for the MVP build — the UI ships with the fallback silhouette by default. Placeholder images (e.g., solid-colour circles with player initials) are acceptable for the initial release.
- When real portrait assets are added, they drop into the assets folder with no code changes required

### 5.6 "Coming Soon" Menu Items
Career Mode and The Journey appear as disabled buttons with a `Coming Soon` badge. This communicates roadmap intent without shipping incomplete features.

---

## 6. FEATURE SPEC: MATCH ENGINE

### 6.1 Purpose
The statistical simulation core that determines match outcomes, generates minute-by-minute events, calculates player ratings, and identifies the Man of the Match. Runs entirely on the **Python backend** and is exposed via REST API.

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
- Fitness modifier (fixed at 100% for MVP)
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

### 6.4 API Output
The engine exposes results as JSON via the `/api/simulate` endpoint:

```json
{
  "home": "Red Devils United",
  "away": "Catalonia FC",
  "score": { "home": 2, "away": 1 },
  "scorers": [
    { "team": "home", "player": "Rashford", "minute": 34 },
    { "team": "away", "player": "Lewandowski", "minute": 61 },
    { "team": "home", "player": "Fernandes", "minute": 87 }
  ],
  "events": [ ... ],
  "possession": { "home": 54, "away": 46 },
  "shots": { "home": 14, "away": 9 },
  "shots_on_target": { "home": 6, "away": 4 },
  "ratings": { ... },
  "motm": { "player": "Fernandes", "rating": 8.7 }
}
```

### 6.5 Event Display (Web)
Events are rendered in the Vue event feed with colour-coded badges:
- ⚽ Goals → green highlight row
- 🟨 Yellow card → yellow highlight row
- 🟥 Red card → red highlight row
- 🧤 Saves → cyan/teal highlight row
- 💨 Misses → dimmed row

---

## 7. FEATURE SPEC: PLAY THE GAME (PRIMARY MVP FEATURE)

### 7.1 Purpose
The core product. An interactive, real-time, keyboard-controlled football match played against the computer AI. Rendered on an **HTML5 Canvas** inside the browser. The Python backend manages match state via WebSocket; the Canvas renders it at ~30 fps.

### 7.2 Confirmed Design Decisions

| Decision | Choice |
|---|---|
| Render target | HTML5 Canvas (keyboard-controlled) |
| Communication | WebSocket (Flask-SocketIO) — real-time game state |
| Pitch view | Side-scrolling (camera follows ball horizontally) |
| Player control | Auto-switch to nearest home player to ball |
| Match length | 3 real minutes = 90 game minutes |
| Half-time | At 1:30 real time, scoreboard shows 45' |
| AI difficulty | Fixed for MVP |
| Goal moment | 2-second flash + GOAL! overlay, then auto kick-off |

### 7.3 Control Scheme

| Key | Action |
|---|---|
| `↑ ↓ ← →` | Move controlled player |
| `Space` | Pass to nearest teammate in attacking direction |
| `Z` | Shoot toward goal |
| `X` | Sprint (burst speed, temporary) |
| `S` | Tackle / press nearest opponent |
| `Esc` | Pause / quit match (return to menu) |

### 7.4 Canvas Layout
```
┌──────────────────────────────────────────────────────────┐
│  Scorebar:  Red Devils United  0 - 0  Catalonia FC  00'  │
│  [Home GK face] … [Home XI faces]   [Away XI faces]      │
├──────────────────────────────────────────────────────────┤
│                                                          │
│   [HTML5 Canvas — pitch rendered at ~800×400 px]        │
│                                                          │
│   Pitch markings: centre line, penalty areas, goals     │
│   Players: coloured circles + face thumbnail overlay    │
│   Ball: white circle                                    │
│   Controlled player: highlighted ring + face thumbnail  │
│                                                          │
├──────────────────────────────────────────────────────────┤
│  [↑↓←→] Move  [SPC] Pass  [Z] Shoot  [X] Sprint         │
│  [S] Tackle  [Esc] Pause                                 │
└──────────────────────────────────────────────────────────┘
```

### 7.4a Player Face Rendering on Canvas
- Each player token on the pitch is a **coloured circle (32 px diameter)**
- If the player's face asset exists (`faces/<player_id>.png`), it is drawn **inside the circle** using `ctx.clip()` + `ctx.drawImage()` — a mini portrait clipped to the circle shape
- **Fallback** (no image): filled circle in team colour with player number drawn in the centre
- The controlled (human) player token gets an additional **glowing white ring** (4 px stroke) drawn around the face circle so it's always easy to spot
- Face thumbnails are pre-loaded at match start; Canvas draws from the in-memory image cache — no per-frame network calls

### 7.5 Pitch Mechanics
- Abstract pitch: 200 units wide × 5 rows tall (y: 0.0–4.0)
- Goals at x=0 (home GK) and x=200 (away GK), y=1.5–2.5 (centre strip)
- Canvas maps game units to pixels; camera window follows ball horizontally
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
- Canvas overlaid with half-time screen showing score
- Teams swap attack direction for second half
- Click "Kick Off" button or press `Enter` to resume

### 7.8 Full-Time
- At 90 game minutes (3:00 real time), match ends
- Canvas overlaid with full-time screen: score, goal scorers, Player of the Match
- Click "Back to Menu" or press `Enter` to return to the splash screen

---

## 8. FEATURE SPEC: WATCH THE PLAY (formerly Quick Match)

### 8.1 Purpose
Auto-simulation mode — pick two clubs, watch the match play out as a live event feed in the browser. No interaction during the match. Good for seeing how teams match up statistically.

### 8.2 User Flow
```
Splash → Main Menu → Watch the Play
  → Club selection screen (searchable dropdown or grid)
  → User picks Home team
  → User picks Away team
  → "Kick Off" button
  → POST /api/simulate returns full match result
  → Events streamed into feed one-by-one (timed, e.g. 80ms per event)
  → Post-match stats screen
  → "Back to Menu" button → Splash screen
```

### 8.3 Post-Match Screen
1. **Score** (large, prominent)
2. **Goal scorers** with minutes — each scorer's **face thumbnail (40 px circle)** shown inline next to name
3. **Match stats** — possession bar, shots, shots on target
4. **Player ratings** — top 5 performers from each side, each with a **face thumbnail (40 px circle)** next to the name and rating bar
5. **Man of the Match** — highlighted callout card with a **large face portrait (80 px circle)**, name, club, rating, and three best stats

---

## 9. TECHNICAL ARCHITECTURE

### 9.1 Stack

| Layer | Technology |
|---|---|
| Backend | Python 3.10+, Flask, Flask-SocketIO |
| Frontend | Vue 3 (Vite build) |
| Real-time (Play the Game) | Socket.IO (WebSocket) |
| Styling | Plain CSS (no UI framework) |
| Data | Static Python modules (no database) |
| Package management (BE) | pip / requirements.txt |
| Package management (FE) | npm / package.json |

### 9.2 File Structure (MVP)
```
/
├── app.py                     ← Flask entry point + SocketIO setup
├── requirements.txt           ← Python dependencies
├── data/
│   ├── players.py             ← Player roster (76 players + Icons)
│   └── clubs.py               ← Club data, leagues, styles
├── engine/
│   ├── match.py               ← Match simulation engine
│   └── game_loop.py           ← Real-time Play the Game state machine
├── api/
│   └── routes.py              ← REST endpoints (/api/simulate, /api/spotlight, /api/clubs)
├── sockets/
│   └── game.py                ← SocketIO event handlers for Play the Game
└── frontend/                  ← Vue 3 app (Vite)
    ├── index.html
    ├── vite.config.js
    ├── package.json
    └── src/
        ├── main.js
        ├── App.vue
        ├── router/
        │   └── index.js        ← Vue Router (splash, play, watch)
        ├── views/
        │   ├── SplashView.vue  ← Stadium splash + main menu
        │   ├── PlayView.vue    ← Canvas-based interactive match
        │   └── WatchView.vue   ← Auto-simulation event feed
        ├── components/
        │   ├── PlayerCard.vue  ← Spotlight card
        │   ├── EventFeed.vue   ← Live event list (Watch the Play)
        │   ├── Scorebar.vue    ← Match header (score + time)
        │   └── PostMatch.vue   ← Full-time stats screen
        ├── assets/
        │   └── faces/          ← Player portrait images (<player_id>.png)
        └── composables/
            ├── useSocket.js    ← Socket.IO connection for Play the Game
            └── useMatchSim.js  ← Watch the Play simulation API calls
```

### 9.3 API Endpoints

| Method | Path | Description |
|---|---|---|
| GET | `/api/spotlight` | Returns random player for splash screen |
| GET | `/api/clubs` | Returns full club list |
| POST | `/api/simulate` | Runs Watch the Play simulation, returns full MatchResult |
| WS | `socket.io` | Real-time game state for Play the Game |

### 9.4 Running the App (Development)
```bash
# Backend
pip install -r requirements.txt
python app.py          # Flask dev server on :5000

# Frontend (separate terminal)
cd frontend
npm install
npm run dev            # Vite dev server on :5173 (proxies /api and /socket.io to :5000)
```

---

## 10. NON-FUNCTIONAL REQUIREMENTS

| Requirement | Target |
|---|---|
| Match simulation speed | < 0.5 seconds per `/api/simulate` call |
| Splash screen load time | < 1 second (first contentful paint) |
| Canvas frame rate | ≥ 30 fps during Play the Game |
| WebSocket latency | < 50 ms game state round-trip (localhost) |
| Browser support | Chrome 110+, Firefox 110+, Safari 16+ |
| Minimum screen width | 900 px |
| Python version | 3.10+ |
| External Python dependencies | Flask, Flask-SocketIO only |
| Mobile | Out of scope for MVP |

---

## 11. SUCCESS CRITERIA FOR MVP

The MVP is considered complete when:

- [ ] Navigating to `localhost:5173` shows the stadium splash screen
- [ ] A different player is spotlit every time the page loads (`/api/spotlight`)
- [ ] The main menu shows: Play the Game, Watch the Play, Career Mode [Coming Soon], The Journey [Coming Soon]
- [ ] **Play the Game:** arrow keys move the controlled player on the Canvas
- [ ] **Play the Game:** Space passes to nearest teammate
- [ ] **Play the Game:** Z shoots toward goal
- [ ] **Play the Game:** X sprints
- [ ] **Play the Game:** S tackles
- [ ] **Play the Game:** controlled player auto-switches to nearest player to ball
- [ ] **Play the Game:** scorebar shows game time (00'–90')
- [ ] **Play the Game:** half-time overlay at 45', teams swap sides for second half
- [ ] **Play the Game:** GOAL overlay when ball crosses goal line, 2-second pause, auto kick-off
- [ ] **Watch the Play:** club selection → POST /api/simulate → animated event feed
- [ ] **Watch the Play:** post-match screen shows score, scorers, stats, ratings, MoTM
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
| 9 | App platform | Web-based (not terminal) ✅ |
| 10 | Backend | Python / Flask + Flask-SocketIO ✅ |
| 11 | Frontend | Vue 3 (Vite) ✅ |
| 12 | Interactive render | HTML5 Canvas (keyboard input) ✅ |

---

*End of PRD — Version 1.2 — Platform updated to web. Awaiting owner approval before build resumes.*
