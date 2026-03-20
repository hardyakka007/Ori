# THE BEAUTIFUL GAME 2026
## Product Requirements Document (PRD)
### Full Release — Version 2.0
**Author:** Claude (on behalf of Ori Franklin)
**Date:** 2026-03-20
**Status:** APPROVED — Full build in progress

---

## 1. VISION

A **web-based** football simulation game built for football fans who want the *feel* of a modern football game without a controller or a GPU. The experience should be atmospheric, stat-driven, and replayable in under 10 minutes per session.

**Guiding principle:** Every screen should feel like you're inside a football world, not a spreadsheet.

**V2.0 commitment:** All features ship in a single version. No staged releases. No "Coming Soon" buttons.

---

## 2. FULL FEATURE SET (ALL IN V1)

| # | Feature | Description |
|---|---|---|
| 1 | **Stadium Splash Screen** | The first thing you see. Full atmosphere before any menu. |
| 2 | **Match Engine** | The simulation core — stats-based, outcome-varied, event-driven. |
| 3 | **Play the Game** | PRIMARY feature — keyboard + touch controlled interactive match on HTML5 Canvas. |
| 4 | **Watch the Play** | Auto-simulation — pick two teams, watch the event feed unfold. |
| 5 | **Career Mode** | Pick a club, manage a season — transfers, training, standings, save/load. |
| 6 | **The Journey** | Story mode as Ori Franklin — narrative chapters + matches. |
| 7 | **TBG Pack System** | Ultimate Team equivalent — coins, packs, squad builder, chemistry. |
| 8 | **Player Database** | Browse, filter, and compare all players by any stat. |
| 9 | **Leagues** | Full season table per division — standings, GD, fixtures, end-of-season awards. |
| 10 | **Save / Load** | Persistent state for Career Mode and TBG Pack System via localStorage. |
| 11 | **Mobile Controls** | Touch D-pad + action buttons for Play the Game on mobile. |
| 12 | **Footy Street** | 5v5 street football on a compact pitch. Wall bounces, no offsides, faster pace. |

---

## 3. NOTHING OUT OF SCOPE

All features previously listed as V2+ are now in scope for V1. The game ships complete.

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
Real player names are **not trademarked** (they are people's names) and are used for informational/simulation purposes. No player likeness, image, or signature is reproduced.

### 4.4 Leagues
| Real League | In-Game Name |
|---|---|
| Premier League | **Premier Division** |
| La Liga | **Primera División** |
| Bundesliga | **German Top Flight** |
| Serie A | **Italian First Division** |
| Ligue 1 | **French First Division** |

---

## 5. FEATURE SPEC: STADIUM SPLASH SCREEN

### 5.1 Purpose
The landing page. Full atmospheric stadium before any menu interaction.

### 5.2 Layout (Web)
```
┌─────────────────────────────────────────────────────────────────┐
│  TOP HALF: Stadium hero section                                 │
│   [Stadium SVG/CSS art — stands, pitch markings, floodlights]  │
│   [Player Spotlight card — random player each load]            │
├─────────────────────────────────────────────────────────────────┤
│  BOTTOM HALF: Main menu                                         │
│   THE BEAUTIFUL GAME 2026                                       │
│   [ Play the Game ]                                             │
│   [ Watch the Play ]                                            │
│   [ Career Mode ]      ← FULLY ENABLED                         │
│   [ The Journey ]      ← FULLY ENABLED                         │
│   [ TBG Pack System ]  ← FULLY ENABLED                         │
│   [ Player Database ]  ← FULLY ENABLED                         │
└─────────────────────────────────────────────────────────────────┘
```

### 5.3 Player Spotlight
- Random player each page load from the full roster
- Card tier: 90+ OVR → Gold, 85–89 → Silver, <85 → Standard
- Face portrait with CSS silhouette fallback

---

## 6. FEATURE SPEC: MATCH ENGINE

### 6.1 Simulation Model
Possession-then-attack model. Unchanged from existing engine.

**Phase 1 — Possession:** Base 50/50, modified by midfield rating, capped at 70/30.
**Phase 2 — Attack generation:** Derived from possession %, style multiplier, Gaussian noise (±3), minimum 4 per team.
**Phase 3 — Attack resolution:** GOAL / SAVE / MISS per attack, using attack vs defence ratio + Gaussian noise.
**Phase 4 — Events:** `MatchEvent` with minute, type, player, detail.
**Phase 5 — Ratings:** 1.0–10.0 per player. Man of the Match = highest.

### 6.2 Team Styles

| Style | Possession Δ | Attack Freq | Press Intensity |
|---|---|---|---|
| Tiki-Taka | +8% | ×1.0 | ×1.1 |
| High Press | 0% | ×1.3 | ×1.4 |
| Counter-Attack | -6% | ×0.9 | ×0.7 |
| Gegenpressing | +2% | ×1.4 | ×1.5 |
| Direct Play | -3% | ×1.2 | ×0.9 |
| Balanced | 0% | ×1.0 | ×1.0 |

---

## 7. FEATURE SPEC: PLAY THE GAME

### 7.1 Purpose
Core interactive match on HTML5 Canvas. Keyboard + touch controls. AI opponent.

### 7.2 Controls

| Input | Desktop | Mobile |
|---|---|---|
| Move | Arrow keys | D-pad (virtual buttons) |
| Pass | Space | Pass button |
| Shoot | Z | Shoot button |
| Sprint | X | Sprint button |
| Tackle | S | Tackle button |
| Pause | Esc | Pause button |

### 7.3 Match Settings
- Match length: 3 real minutes = 90 game minutes
- Half-time at 1:30 real time (45 game min), teams swap sides
- GOAL overlay: 2-second flash → auto kick-off
- Controlled player: auto-switch to nearest home player to ball

### 7.4 Mobile Touch Overlay
```
┌──────────────────────────────────────────────┐
│          [Canvas — pitch + players]          │
├──────────────────────────────────────────────┤
│  [↑]              [PASS] [SHOOT]             │
│[←][→]     [SPR]  [TACK] [PAUS]              │
│  [↓]                                         │
└──────────────────────────────────────────────┘
```
Rendered below the Canvas on screens < 900 px wide.

---

## 8. FEATURE SPEC: WATCH THE PLAY

Auto-simulation mode. Pick two clubs → POST /api/simulate → animated event feed → post-match stats with scorers, ratings, MoTM.

---

## 9. FEATURE SPEC: CAREER MODE

### 9.1 Purpose
Manage a football club through a full season — play matches, sign players, train your squad, track standings.

### 9.2 Career Flow
```
Start Career → Pick Club → Season begins
  → Fixture list shown (all matches in the division, 38 for Premier Division)
  → For each fixture:
      Option A: Play the Game (interactive Canvas match)
      Option B: Simulate (instant result from match engine)
  → After all 38 matchdays:
      → Season standings shown
      → End-of-season awards (top scorer, golden glove, player of the year)
      → Transfer window (buy/sell)
      → Next season begins
```

### 9.3 Transfer System
- Budget assigned based on club prestige (prestige × £5M)
- Buy: browse free-agent pool (generated players) + clubs willing to sell
- Sell: list any player in your squad for a generated bid
- Transfer window opens at end of season (simplified: one window per season)

### 9.4 Training
- Each week of the season, assign one player to "focus training"
- Focus training: +1 to one chosen stat (capped at 99)
- Training slot refreshes every 5 simulated matchdays

### 9.5 Standings Table
```
Pos | Club                  | P  | W  | D  | L  | GF | GA | GD  | Pts
  1 | Red Devils United     | 38 | 24 |  8 |  6 | 72 | 38 | +34 |  80
  2 | Blues Man City        | 38 | 23 |  7 |  8 | 69 | 40 | +29 |  76
  ...
```
Rules: Win = 3pts, Draw = 1pt, Loss = 0pts. Tiebreaker: GD → GF → head-to-head.

### 9.6 Save / Load
Career state persisted to localStorage under key `tbg_career`. Auto-saved after every match. Manual save button available.

---

## 10. FEATURE SPEC: THE JOURNEY

### 10.1 Purpose
Story mode as **Ori Franklin** — a rising midfielder fighting his way to the top. Narrative chapters with dialogue, choices, and matches.

### 10.2 Structure
5 chapters, each with:
- Intro cutscene (text + atmospheric background)
- One or two matches (Play or Simulate)
- Post-match cutscene with outcome branching

| Chapter | Title | Club | Objective |
|---|---|---|---|
| 1 | "The Trial" | Youth Academy FC | Score in trial match → earn contract |
| 2 | "The Breakthrough" | Hotspur FC | Come on as sub, win the match |
| 3 | "The Rival" | Red Devils United | Beat your former club |
| 4 | "The Derby" | Blues Man City | Survive a derby with 10 men |
| 5 | "The Final" | White Madrid FC | Win the championship final |

### 10.3 Choices
At certain story beats the player makes a choice (e.g. "Call out the manager publicly" vs "Keep it internal"). Both paths continue to the next chapter but with different narrative flavour and slight stat modifiers for Ori's match card.

### 10.4 Ori Franklin Player Card
- Position: CM, OVR starts at 72, improves with each chapter win
- Displayed on the Journey hub screen

---

## 11. FEATURE SPEC: TBG PACK SYSTEM

### 11.1 Purpose
Build your dream squad from pack openings — the game's Ultimate Team equivalent. No real money. Coins earned by playing matches.

### 11.2 Currency
- **TBG Coins** — earned by playing/simulating matches and completing daily objectives
- Starting balance: 5,000 coins
- Match win: +500 coins | Draw: +200 coins | Loss: +100 coins

### 11.3 Packs

| Pack | Cost | Cards | Gold Guaranteed |
|---|---|---|---|
| Standard Pack | 750 coins | 5 players | 0 |
| Premium Pack | 2,500 coins | 10 players | 1 |
| Elite Pack | 7,500 coins | 15 players | 3 |

Each card drawn from the full roster (including Icons) with rarity weighting.

### 11.4 Squad Builder
- Pick 11 players from your collection to form a squad
- Position requirements enforced (must include 1 GK, 4 DEF, etc.)
- Chemistry score (0–110): players from same club/league get chemistry bonus
- Squad OVR = weighted average of 11 starters

### 11.5 TBG vs TBG Match
- Simulate your built squad vs any other club's default squad via /api/simulate
- Result awards coins

### 11.6 Save / Load
TBG squad + coin balance persisted to localStorage under key `tbg_ultimate_team`.

---

## 12. FEATURE SPEC: PLAYER DATABASE

### 12.1 Purpose
Browse the complete player roster. Search, filter, sort, compare.

### 12.2 Filters
- Position: ALL / GK / DEF / MID / ATT
- Club: dropdown (all 15 clubs + Icons)
- League: dropdown (all 5 leagues)
- OVR range: slider (60–99)
- Free text search by name

### 12.3 Sort Options
OVR (default, desc), Name (A-Z), Club, Pace, Shooting, Passing, Dribbling, Defending, Physical.

### 12.4 Player Detail Card
Clicking any player opens a full stat card showing all 6 core stats, age, value, wage, contract years, and position heat map (text-based for MVP).

---

## 13. FEATURE SPEC: LEAGUES

### 13.1 Purpose
Simulate a full division season — see the table, top scorers, fixtures, results.

### 13.2 Divisions Available
All 5 in-game leagues (Premier Division, Primera División, German Top Flight, Italian First Division, French First Division).

### 13.3 Season Simulation
- Generate a round-robin fixture list for all clubs in the selected division
- Simulate all matches using the match engine
- Display final standings table
- Display top 5 scorers
- Display end-of-season awards: Champion, Top Scorer, Golden Glove

### 13.4 Fixture Browser
- View all matchday results
- Click any fixture to see its event feed + ratings (same PostMatch component)

---

## 14. FEATURE SPEC: FOOTY STREET

### Purpose
Fast-paced 5v5 street football on a compact pitch. The vibe is freestyle, urban, skillful. Think cage football or futsal.

### Rules
- 5 players per side (including goalkeeper)
- Compact pitch: 60×40 game units
- Walls are in play (ball bounces off all 4 sides)
- No offsides
- Match length: 2 real minutes = 60 game minutes
- First to 3 goals wins (golden goal in case of draw at full time)
- Touch controls supported

### Controls
Same as Play the Game (arrow keys, Space=pass, Z=shoot, X=sprint, S=tackle)

### Team Selection
Pick any club — 5 best players by OVR are selected automatically. Goalkeeper included.

### Pitch Layout
Smaller canvas (700×300), darker surface (grey/asphalt tone), orange ball, different player colours.

---

## 15. TECHNICAL ARCHITECTURE

### 15.1 Stack

| Layer | Technology |
|---|---|
| Backend | Python 3.10+, Flask, Flask-SocketIO |
| Frontend | Vue 3 (Vite build) |
| Real-time (Play the Game) | Socket.IO (WebSocket) |
| Styling | Plain CSS (no UI framework) |
| Data | Static Python modules (no database) |
| Persistence | localStorage (client-side) + JSON files in `/saves/` |

### 15.2 File Structure
```
/
├── app.py
├── requirements.txt
├── data/
│   ├── players.py         ← 76 players + Icons
│   └── clubs.py           ← Club data, leagues, styles
├── engine/
│   ├── match.py           ← Core match simulation
│   ├── game_loop.py       ← Real-time Play the Game state
│   ├── career.py          ← Career mode engine (fixtures, standings)
│   ├── league.py          ← Full season simulation
│   ├── journey.py         ← The Journey story data + logic
│   └── ultimate_team.py   ← Pack system + chemistry
├── api/
│   └── routes.py          ← All REST endpoints
├── sockets/
│   └── game.py            ← SocketIO handlers
└── frontend/src/
    ├── views/
    │   ├── SplashView.vue
    │   ├── PlayView.vue
    │   ├── WatchView.vue
    │   ├── CareerView.vue    ← NEW
    │   ├── JourneyView.vue   ← NEW
    │   ├── UltimateTeamView.vue ← NEW
    │   ├── PlayerDBView.vue  ← NEW
    │   └── LeagueView.vue    ← NEW
    └── components/
        ├── PlayerCard.vue
        ├── EventFeed.vue
        ├── Scorebar.vue
        ├── PostMatch.vue
        └── TouchControls.vue ← NEW
```

### 15.3 API Endpoints (complete)

| Method | Path | Description |
|---|---|---|
| GET | `/api/spotlight` | Random player for splash |
| GET | `/api/clubs` | Full club list |
| GET | `/api/players` | Full player list (with filters via query params) |
| POST | `/api/simulate` | Match simulation |
| GET | `/api/league/:league` | Simulate full season for a division |
| POST | `/api/career/start` | Start new career |
| POST | `/api/career/fixture` | Simulate a career fixture |
| GET | `/api/journey/chapter/:n` | Journey chapter data |
| POST | `/api/journey/result` | Submit chapter match result |
| POST | `/api/pack/open` | Open a pack (returns player cards) |
| GET | `/api/teams/:club` | Squad data for Play the Game |
| WS | `socket.io` | Real-time game state |

### 15.4 Save / Load Strategy
- Career Mode → `localStorage['tbg_career']`
- TBG Pack System → `localStorage['tbg_ultimate_team']`
- Journey progress → `localStorage['tbg_journey']`
- Backend `/saves/` directory kept for future server-side sync

---

## 16. NON-FUNCTIONAL REQUIREMENTS

| Requirement | Target |
|---|---|
| Match simulation speed | < 0.5s per /api/simulate |
| Splash load time | < 1s first contentful paint |
| Canvas frame rate | ≥ 30 fps |
| WebSocket latency | < 50 ms (localhost) |
| Browser support | Chrome 110+, Firefox 110+, Safari 16+ |
| Mobile | Supported via touch overlay (screen ≥ 375 px) |
| Minimum desktop width | 900 px |
| Python version | 3.10+ |
| External Python deps | Flask, Flask-SocketIO only |

---

## 17. SUCCESS CRITERIA

The game is complete when:

**Splash & Nav**
- [ ] All 6 menu items are enabled and navigate correctly
- [ ] Player spotlight loads a different player each time

**Play the Game**
- [ ] Arrow keys move controlled player
- [ ] Space passes, Z shoots, X sprints, S tackles
- [ ] Half-time overlay at 45', teams swap sides
- [ ] GOAL overlay + 2-second auto-resume
- [ ] Touch D-pad works on mobile

**Watch the Play**
- [ ] Club selection → event feed → post-match screen

**Career Mode**
- [ ] Club selection → fixture list for full division season
- [ ] Can play or simulate each fixture
- [ ] Standings table updates correctly after each result
- [ ] Transfer window at end of season
- [ ] Training slot available every 5 matchdays
- [ ] Career auto-saves to localStorage

**The Journey**
- [ ] All 5 chapters load with narrative text
- [ ] Choices change flavour text in next chapter
- [ ] Ori Franklin card shows updated OVR after chapter wins

**TBG Pack System**
- [ ] Coins displayed and update after matches
- [ ] Standard / Premium / Elite packs open correctly
- [ ] Squad builder enforces position requirements
- [ ] Chemistry score calculated
- [ ] TBG squad saves to localStorage

**Player Database**
- [ ] All 76+ players shown by default
- [ ] Position / club / league / OVR / name filters work
- [ ] Sort by any stat works
- [ ] Clicking a player opens full stat card

**Leagues**
- [ ] Select any division → simulate full season → standings table
- [ ] Top scorers list shown
- [ ] Champion, top scorer, golden glove awarded
- [ ] Click any fixture to view match detail

**General**
- [ ] The word "FIFA" appears zero times in any source file
- [ ] No trademarked brand appears in UI

---

## 18. RESOLVED QUESTIONS

| # | Question | Answer |
|---|---|---|
| 1 | Game name | THE BEAUTIFUL GAME 2026 ✅ |
| 2 | Club names | Altered per §4.2 ✅ |
| 3 | Staged release? | No — everything in one version ✅ |
| 4 | Spotlight | Existing roster ✅ |
| 5 | Pitch view | Side-scrolling ✅ |
| 6 | Player control | Auto-switch to nearest ✅ |
| 7 | Match length | 3 real min = 90 game min ✅ |
| 8 | Mobile | Touch overlay for Canvas ✅ |
| 9 | Persistence | localStorage ✅ |
| 10 | Career saves | Auto-save per fixture ✅ |
| 11 | Journey protagonist | Ori Franklin, CM, starts OVR 72 ✅ |
| 12 | Ultimate Team currency | TBG Coins (no real money) ✅ |

---

*End of PRD — Version 2.0 — Full game, single release. Build in progress.*
