# FIFA 18 Game Simulator

A Python terminal simulation of EA Sports FIFA 18, featuring all three major game modes.

## Run

```bash
python fifa18.py
```

No external dependencies required — standard library only.

## Game Modes

### Career Mode
- Choose from 15 top clubs across 5 leagues
- Real-time transfer negotiations (fee + personal terms)
- League table, training, player development
- Season progression with trophy rewards

### FIFA Ultimate Team (FUT 18)
- Pack opening (Bronze → Icon tier)
- Squad chemistry system
- Squad Battles vs AI opponents (difficulty scaling)
- FUT Draft (4-match tournament)
- Transfer market (buy/sell)
- FUT Icons: Ronaldo, Zidane, Pele, Maradona & more

### The Journey: Hunter Returns
- 6-chapter story following Alex Hunter in Europe
- Branching choices affect morale, reputation, stats
- Celebrity cameos (Henry, Ronaldo, Neymar)
- FUT rewards unlocked per chapter

### Quick Match & Player Database
- Exhibition match between any two clubs
- Browse 76 real FIFA 18 players with accurate ratings

## Structure

```
fifa18.py          — Main entry point
data/
  players.py       — 76 real players + 10 FUT Icons
  teams.py         — 15 clubs, 5 leagues, team styles
engine/
  match.py         — Match simulation engine
  display.py       — Terminal UI (colors, tables, menus)
modes/
  career.py        — Career Mode
  fut.py           — FIFA Ultimate Team
  journey.py       — The Journey story mode
saves/             — Auto-save files (JSON)
```
