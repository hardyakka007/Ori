# THE BEAUTIFUL GAME 2026
## Product Requirements Document (PRD)
### Full Release — Version 4.0
**Author:** Claude (on behalf of Ori Franklin)
**Date:** 2026-03-24
**Status:** PENDING APPROVAL — 3D upgrade spec

---

## 1. VISION

A **web-based 3D football game** built for football fans who want the *feel* of a modern console football game — in a browser, no download required. Powered by **Three.js**, the game features a real 3D pitch, humanoid player models, ball physics, broadcast-style camera angles, and animations. Atmospheric, stat-driven, and replayable in under 10 minutes per session.

**Guiding principle:** Every screen should feel like you're inside a football world — not a spreadsheet, not a Flash game.

**V4.0 commitment:** All features ship in a single version. No staged releases. No "Coming Soon" buttons. 3D rendering replaces the old 2D canvas across all match modes.

---

## 2. FULL FEATURE SET (ALL IN V1)

| # | Feature | Description |
|---|---|---|
| 1 | **Stadium Splash Screen** | The first thing you see. Full atmosphere before any menu. |
| 2 | **Match Engine** | The simulation core — stats-based, outcome-varied, event-driven. |
| 3 | **Play the Game** | PRIMARY feature — keyboard + touch controlled interactive 3D match (Three.js). |
| 4 | **Watch the Play** | Auto-simulation — pick two teams, watch the event feed unfold in 3D. |
| 5 | **Career Mode** | Pick a club, manage a season — transfers, training, standings, save/load. |
| 6 | **The Journey** | Story mode as Ori Franklin — narrative chapters + 3D matches. |
| 7 | **TBG Pack System** | Ultimate Team equivalent — coins, packs, squad builder, chemistry. |
| 8 | **Player Database** | Browse, filter, and compare all players by any stat. |
| 9 | **Leagues** | Full season table per division — standings, GD, fixtures, end-of-season awards. |
| 10 | **Save / Load** | Persistent state for Career Mode and TBG Pack System via localStorage. |
| 11 | **Mobile Controls** | Touch D-pad + action buttons for Play the Game on mobile. |
| 12 | **Footy Street** | 5v5 street football in 3D. Wall bounces, no offsides, faster pace. |
| 13 | **3D Engine & Pitch** | Three.js scene — grass pitch, stadium stands, goals, floodlight shadows. |
| 14 | **3D Player Models** | Low-to-mid poly humanoid characters with running, shooting, tackle animations. |
| 15 | **Ball Physics** | Real 3D ball movement — curves, bounces, spin. |
| 16 | **Camera Angles** | TV broadcast, behind-the-goal, wide, player-follow — switchable mid-match. |
| 17 | **Manager Editor** | 3D character creator — build your manager's look (EA FC style). |

---

## 3. NOTHING OUT OF SCOPE

All features previously listed as V2+ are now in scope for V1. The game ships complete.

---

## 4. BRANDING & COPYRIGHT GUIDELINES

### 4.1 Game Name
**THE BEAUTIFUL GAME 2026**
- "The Beautiful Game" is a widely used football expression (attributed to Pelé) — not trademarked for software
- No "FIFA", "EA", "EA Sports", "Frostbite", or any registered game title may appear anywhere in the codebase, UI, or assets

### 4.2 Club Names — USE REAL NAMES

All clubs now use their **real-world names** as confirmed by Ori Franklin (24 March 2026). Copyright is not a concern.

| Club |
|---|
| Manchester United |
| Manchester City |
| Liverpool |
| Arsenal |
| Chelsea |
| Tottenham Hotspur |
| Real Madrid |
| FC Barcelona |
| Atletico Madrid |
| Bayern Munich |
| Borussia Dortmund |
| Juventus |
| Paris Saint-Germain (PSG) |
| Inter Milan |
| AC Milan |

### 4.3 Player Names
Real player names used throughout. No player likeness, image, or signature is reproduced.

### 4.4 Leagues — USE REAL NAMES

All leagues, tournaments, and cups now use their **real-world names**.

| Competition | Real Name |
|---|---|
| Top English division | **Premier League** |
| Top Spanish division | **La Liga** |
| Top German division | **Bundesliga** |
| Top Italian division | **Serie A** |
| Top French division | **Ligue 1** |
| European club competition (elite) | **UEFA Champions League** |
| European club competition (second tier) | **UEFA Europa League** |
| English domestic cup | **FA Cup** |
| English League Cup | **Carabao Cup** |
| Spanish domestic cup | **Copa del Rey** |
| German domestic cup | **DFB-Pokal** |
| Italian domestic cup | **Coppa Italia** |
| French domestic cup | **Coupe de France** |
| European Super Cup | **UEFA Super Cup** |
| World club tournament | **FIFA Club World Cup** |

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

## 7. FEATURE SPEC: PLAY THE GAME (3D)

### 7.1 Purpose
Core interactive match rendered in **Three.js** — a full 3D football match in the browser. Keyboard + touch controls. AI opponent. Replaces the old 2D Canvas entirely.

### 7.2 Controls

| Input | Desktop | Mobile |
|---|---|---|
| Move | Arrow keys | D-pad (virtual buttons) |
| Pass | Space | Pass button |
| Shoot | Z | Shoot button |
| Sprint | X | Sprint button |
| Tackle | S | Tackle button |
| Pause | Esc | Pause button |
| Switch camera | C | Camera button |

### 7.3 Match Settings
- Match length: 3 real minutes = 90 game minutes
- Half-time at 1:30 real time (45 game min), teams swap ends
- GOAL overlay: 2-second celebration animation → auto kick-off
- Controlled player: auto-switch to nearest home player to ball

### 7.4 3D Rendering Details

| Element | Implementation |
|---|---|
| Pitch surface | Three.js PlaneGeometry with green grass texture, white line markings |
| Goals | BoxGeometry posts + crossbar + net mesh (white) |
| Stadium stands | Simple extruded geometry surrounding the pitch — crowd colour texture |
| Floodlights | Four corner light towers, SpotLight casting shadows onto pitch |
| Sky | Background colour gradient (day = blue/white, night = dark purple) |
| Players | Low-poly humanoid mesh (~500 polygons) — see §16 for full model spec |
| Ball | SphereGeometry with black panel texture, CastShadow enabled |
| Shadows | PCFSoftShadowMap on Three.js WebGLRenderer |

### 7.5 Camera Angles

| Mode | Description | Toggle key |
|---|---|---|
| **TV Broadcast** (default) | Fixed wide side-on view, slight elevation — classic broadcast angle | C → 1 |
| **Behind the Goal** | Low angle behind the attacking goal — immersive | C → 2 |
| **Wide** | High top-down — full pitch visible | C → 3 |
| **Player Follow** | Camera tracks the controlled player in third-person | C → 4 |

### 7.6 Mobile Touch Overlay
```
┌──────────────────────────────────────────────┐
│        [Three.js Canvas — 3D match]          │
├──────────────────────────────────────────────┤
│  [↑]              [PASS] [SHOOT]             │
│[←][→]     [SPR]  [TACK] [CAM]               │
│  [↓]                                         │
└──────────────────────────────────────────────┘
```
Rendered below the Three.js canvas on screens < 900 px wide.

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
  → Fixture list shown (all matches in the division, 38 for Premier League)
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
  1 | Manchester United     | 38 | 24 |  8 |  6 | 72 | 38 | +34 |  80
  2 | Manchester City       | 38 | 23 |  7 |  8 | 69 | 40 | +29 |  76
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
| 2 | "The Breakthrough" | Tottenham Hotspur | Come on as sub, win the match |
| 3 | "The Rival" | Manchester United | Beat your former club |
| 4 | "The Derby" | Manchester City | Survive a derby with 10 men |
| 5 | "The Final" | Real Madrid | Win the Champions League Final |

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
All 5 real leagues (Premier League, La Liga, Bundesliga, Serie A, Ligue 1).

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

## 14. FEATURE SPEC: FOOTY STREET (3D)

### Purpose
Fast-paced 5v5 street football rendered in Three.js. The vibe is freestyle, urban, skillful. Think cage football or futsal. Same 3D engine as Play the Game but with a different environment.

### Rules
- 5 players per side (including goalkeeper)
- Compact pitch: 60×40 game units
- Walls are in play (ball bounces off all 4 sides with physics)
- No offsides
- Match length: 2 real minutes = 60 game minutes
- First to 3 goals wins (golden goal in case of draw at full time)
- Touch controls supported

### Controls
Same as Play the Game (arrow keys, Space=pass, Z=shoot, X=sprint, S=tackle, C=camera)

### Team Selection
Pick any club — 5 best players by OVR are selected automatically. Goalkeeper included.

### 3D Environment
- Compact Three.js scene — asphalt-textured floor, concrete cage walls, chain-link fence mesh
- Orange ball (different texture from main game)
- Night lighting — overhead sodium lamp SpotLights casting warm yellow pools of light
- No crowd — raw urban atmosphere

---

## 15. TECHNICAL ARCHITECTURE

### 15.1 Stack

| Layer | Technology |
|---|---|
| Backend | Python 3.10+, Flask, Flask-SocketIO |
| Frontend | Vue 3 (Vite build) |
| **3D Engine** | **Three.js** (imported via npm, rendered in `<canvas>` inside Vue components) |
| Real-time (Play the Game) | Socket.IO (WebSocket) |
| Styling | Plain CSS (scoped, no UI framework) |
| Data | Static Python modules (no database) |
| Persistence | localStorage (client-side) |

### 15.2 Why Three.js

Three.js is the industry-standard JavaScript 3D library — it runs on WebGL in every modern browser, has zero install friction (just `npm install three`), has extensive documentation, and supports everything needed: geometries, materials, lighting, shadows, animation loops, and GLTF model loading. No native app required.

Babylon.js is a valid alternative but Three.js has a larger ecosystem and lighter bundle for this use case.

### 15.3 3D Build — Phase 1 (First deliverable)

The first thing to build and test in browser:

1. **Three.js scene initialisation** inside `PlayView.vue` — renderer, camera, scene, lighting
2. **3D pitch** — green plane, white line markings (centre circle, penalty areas, halfway line)
3. **Goals** — both ends — posts, crossbar, net
4. **Stadium shell** — simple stands geometry around the pitch
5. **Floodlights** — 4 corner SpotLights with shadows
6. **Basic player capsules** — cylindrical placeholder models (one per player, colour-coded by team)
7. **Ball** — sphere with texture
8. **Game loop** — requestAnimationFrame driving player movement + ball movement in 3D space
9. **TV broadcast camera** — default view

This is what Ori will see first in the browser.

### 15.4 File Structure

```
/
├── app.py
├── requirements.txt
├── data/
│   ├── players.py             ← 76 players + Icons
│   └── clubs.py               ← Club data, leagues, styles
├── engine/
│   ├── match.py               ← Core match simulation
│   ├── game_loop.py           ← Real-time match state (now feeds 3D positions)
│   ├── career.py              ← Career mode engine
│   ├── league.py              ← Full season simulation
│   ├── journey.py             ← The Journey story data
│   ├── street_story.py        ← Footy Street story data
│   └── ultimate_team.py       ← Pack system + chemistry
├── api/
│   └── routes.py              ← All REST endpoints
├── sockets/
│   └── game.py                ← SocketIO handlers
└── frontend/src/
    ├── views/
    │   ├── SplashView.vue
    │   ├── PlayView.vue        ← THREE.js 3D match (replaces Canvas 2D)
    │   ├── WatchView.vue
    │   ├── CareerView.vue
    │   ├── JourneyView.vue
    │   ├── UltimateTeamView.vue
    │   ├── PlayerDBView.vue
    │   ├── LeagueView.vue
    │   └── FootyStreetView.vue ← THREE.js 3D street match
    ├── components/
    │   ├── PlayerCard.vue
    │   ├── EventFeed.vue
    │   ├── Scorebar.vue
    │   ├── PostMatch.vue
    │   └── TouchControls.vue
    └── three/                  ← NEW — Three.js scene modules
        ├── scene.js            ← Scene, renderer, camera setup
        ├── pitch.js            ← Pitch geometry + markings
        ├── stadium.js          ← Stands + floodlights
        ├── playerModel.js      ← 3D player mesh + animations
        ├── ball.js             ← Ball mesh + physics
        └── cameraRig.js        ← Camera angle switching
```

### 15.5 API Endpoints (complete)

| Method | Path | Description |
|---|---|---|
| GET | `/api/spotlight` | Random player for splash |
| GET | `/api/clubs` | Full club list |
| GET | `/api/players` | Full player list (with filters) |
| POST | `/api/simulate` | Match simulation |
| GET | `/api/league/:league` | Simulate full season for a division |
| POST | `/api/career/start` | Start new career |
| POST | `/api/career/fixture` | Simulate a career fixture |
| GET | `/api/journey/chapter/:n` | Journey chapter data |
| POST | `/api/journey/result` | Submit chapter match result |
| GET | `/api/street-story/chapters` | All 7 street story chapters |
| GET | `/api/street-story/chapter/:n` | Single chapter with rival flavour |
| POST | `/api/street-story/simulate` | Simulate street story match |
| POST | `/api/pack/open` | Open a TBG pack |
| GET | `/api/teams/:club` | Squad data for 3D match |
| WS | `socket.io` | Real-time 3D game state (player positions, ball) |

### 15.6 Save / Load Strategy
- Career Mode → `localStorage['tbg_career']`
- TBG Pack System → `localStorage['tbg_ultimate_team']`
- Journey progress → `localStorage['tbg_journey']`
- Street Story progress → `localStorage['tbg_street_story']`
- Manager appearance → `localStorage['tbg_manager']`

---

## 16. FEATURE SPEC: 3D PLAYER MODELS & ANIMATIONS

**Decision: CONFIRMED by Ori Franklin (24 March 2026) — upgrade to full 3D.**

### 16.1 Player Model Approach

**Low-to-mid poly humanoid** built with Three.js geometry primitives (no external 3D modelling software required for Phase 1). Each player is constructed from:

| Body Part | Geometry | Notes |
|---|---|---|
| Head | SphereGeometry | Skin-tone material, face detail via texture |
| Torso | BoxGeometry (tapered) | Kit colour = club primary colour |
| Arms × 2 | CylinderGeometry | Skin tone |
| Legs × 2 | CylinderGeometry | Short texture = club kit shorts colour |
| Boots × 2 | BoxGeometry (small) | Black or club colour |

All parts assembled as a **THREE.Group** — moveable as a single unit. Total ~600 polygons per player = 22 players on pitch with very comfortable browser performance.

### 16.2 Kit Colours per Club

| Club | Primary (kit) | Secondary (shorts) |
|---|---|---|
| Manchester United | Red `#DA291C` | White `#FFFFFF` |
| Manchester City | Sky Blue `#6CABDD` | White `#FFFFFF` |
| Liverpool | Red `#C8102E` | Red `#C8102E` |
| Arsenal | Red `#EF0107` | White `#FFFFFF` |
| Chelsea | Royal Blue `#034694` | Royal Blue `#034694` |
| Tottenham Hotspur | White `#FFFFFF` | Navy `#132257` |
| Real Madrid | White `#FFFFFF` | White `#FFFFFF` |
| FC Barcelona | Blue/Red stripe `#004D98` | Blue `#004D98` |
| Atletico Madrid | Red/White stripe `#CB3524` | Blue `#003366` |
| Bayern Munich | Red `#DC052D` | Red `#DC052D` |
| Borussia Dortmund | Yellow `#FDE100` | Black `#000000` |
| Juventus | Black/White stripe `#000000` | Black `#000000` |
| PSG | Navy `#004170` | Navy `#004170` |
| Inter Milan | Blue/Black stripe `#010E80` | Black `#000000` |
| AC Milan | Red/Black stripe `#FB090B` | White `#FFFFFF` |

### 16.3 Animations

All animations implemented as **keyframe tweens** in the Three.js animation loop — no external animation library required for Phase 1.

| Animation | Trigger | Description |
|---|---|---|
| **Idle** | Standing still | Slight weight-shift sway, breathing motion |
| **Run** | Moving | Arms and legs swing in alternating cycle |
| **Sprint** | Sprinting | Faster leg cycle, body leans forward |
| **Kick** | Shoot / Pass | Dominant leg swings forward, body rotates |
| **Tackle** | Tackle input | Body lowers, leg slides forward |
| **Save** | GK saves | Arms extend left or right depending on ball direction |
| **Celebrate** | Goal scored | Arms raised, short jump, spin |
| **Fall** | Fouled | Body tips and drops to pitch surface |

### 16.4 Ball Physics

| Property | Implementation |
|---|---|
| 3D movement | Position updated each frame using velocity vector (x, y, z) |
| Gravity | Downward acceleration on y-axis when ball is airborne |
| Bounce | On pitch contact: y-velocity inverted × restitution coefficient (0.6) |
| Spin / curve | Angular velocity on z-axis creates curved trajectories for shots |
| Rolling | Velocity decays each frame (friction coefficient 0.97 on ground) |
| Wall bounce (Street) | x/z velocity inverted on cage wall contact |

### 16.5 Manager Editor (3D Character Creator)

A standalone mode accessible from the main menu — build the look of your manager.

| Feature | Options |
|---|---|
| Head shape | 4 presets (round, angular, oval, square) |
| Skin tone | 8 skin tone swatches |
| Hair | 8 styles (short, long, bald, afro, fade, etc.) + colour picker |
| Facial hair | None, stubble, beard, moustache |
| Outfit | Tracksuit (club colour), suit (dark/light/navy), casual |
| Club badge | Displayed on tracksuit chest |

Manager model rendered live in a rotating Three.js preview panel. Saved to `localStorage['tbg_manager']` and displayed in Career Mode hub and The Journey cutscenes.

---

## 17. NON-FUNCTIONAL REQUIREMENTS

| Requirement | Target |
|---|---|
| Match simulation speed | < 0.5s per /api/simulate |
| Splash load time | < 1.5s first contentful paint (includes Three.js bundle) |
| **3D frame rate** | **≥ 60 fps** on desktop Chrome/Firefox with integrated GPU |
| **3D frame rate (mobile)** | **≥ 30 fps** on mid-range mobile (2022+) |
| WebSocket latency | < 50 ms (localhost) |
| Three.js bundle size | < 600 KB gzipped (tree-shaken via Vite) |
| Browser support | Chrome 110+, Firefox 110+, Safari 16+ (all support WebGL 2.0) |
| Mobile | Touch overlay, screen ≥ 375 px, WebGL required |
| Minimum desktop width | 900 px |
| Python version | 3.10+ |
| External Python deps | Flask, Flask-SocketIO only |
| npm deps added | `three` (Three.js) |

---

## 18. SUCCESS CRITERIA

The game is complete when:

**Splash & Nav**
- [ ] All 6 menu items are enabled and navigate correctly
- [ ] Player spotlight loads a different player each time

**Play the Game (3D)**
- [ ] Three.js scene loads in browser — pitch, goals, stadium visible
- [ ] 22 player models visible on pitch, colour-coded by team
- [ ] Arrow keys move controlled player in 3D space
- [ ] Space passes, Z shoots (kick animation plays), X sprints, S tackles
- [ ] Ball moves with physics — gravity, bounce, rolling friction
- [ ] Camera angle switches with C key (TV / Behind-goal / Wide / Follow)
- [ ] Half-time overlay at 45', teams swap ends
- [ ] GOAL overlay + 2-second celebration animation → auto kick-off
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

**3D Engine**
- [ ] Three.js pitch renders at ≥ 60 fps on desktop
- [ ] Player animations play correctly (run, kick, tackle, celebrate)
- [ ] Ball physics — bounces and rolls realistically
- [ ] All 4 camera angles work and are switchable
- [ ] Manager Editor renders 3D character and saves to localStorage

**General**
- [ ] All club and league names are real-world names
- [ ] No "FIFA", "EA Sports", or competing game titles appear in source or UI

---

## 19. RESOLVED QUESTIONS

| # | Question | Answer |
|---|---|---|
| 1 | Game name | THE BEAUTIFUL GAME 2026 ✅ |
| 2 | Club & league names | Real-world names used — no copyright concern ✅ |
| 3 | Staged release? | No — everything in one version ✅ |
| 4 | Spotlight | Existing roster ✅ |
| 5 | Player control | Auto-switch to nearest ✅ |
| 6 | Match length | 3 real min = 90 game min ✅ |
| 7 | Mobile | Touch overlay ✅ |
| 8 | Persistence | localStorage ✅ |
| 9 | Career saves | Auto-save per fixture ✅ |
| 10 | Journey protagonist | Ori Franklin, CM, starts OVR 72 ✅ |
| 11 | Ultimate Team currency | TBG Coins (no real money) ✅ |
| 12 | 2D or 3D? | **3D — Three.js** ✅ confirmed 24 March 2026 |
| 13 | 3D player models | Low-poly humanoids, kit colours, animations ✅ |
| 14 | Camera angles | TV broadcast / behind-goal / wide / follow ✅ |
| 15 | Manager editor | 3D character creator, saves to localStorage ✅ |

---

*End of PRD — Version 4.0 — Full 3D game, single release. Awaiting Ori's approval before build begins.*
