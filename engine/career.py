"""Career Mode engine — fixture generation and standings."""

import random
from dataclasses import dataclass, field
from typing import List, Dict, Optional


@dataclass
class Fixture:
    matchday: int
    home: str
    away: str
    home_score: int = -1
    away_score: int = -1
    played: bool = False

    def to_dict(self) -> dict:
        return {
            "matchday": self.matchday,
            "home": self.home,
            "away": self.away,
            "home_score": self.home_score,
            "away_score": self.away_score,
            "played": self.played,
        }


@dataclass
class StandingsRow:
    club: str
    played: int = 0
    won: int = 0
    drawn: int = 0
    lost: int = 0
    gf: int = 0
    ga: int = 0
    points: int = 0

    @property
    def gd(self) -> int:
        return self.gf - self.ga

    def to_dict(self) -> dict:
        return {
            "club": self.club,
            "played": self.played,
            "won": self.won,
            "drawn": self.drawn,
            "lost": self.lost,
            "gf": self.gf,
            "ga": self.ga,
            "gd": self.gd,
            "points": self.points,
        }


def generate_fixtures(club_names: List[str]) -> List[Fixture]:
    """Generate a round-robin fixture list (home + away) for the given clubs."""
    clubs = list(club_names)
    n = len(clubs)
    if n % 2 == 1:
        clubs.append(None)  # bye placeholder

    rounds = len(clubs) - 1
    half = len(clubs) // 2
    fixtures: List[Fixture] = []
    matchday = 1

    working = list(clubs)
    for _ in range(rounds):
        for i in range(half):
            home = working[i]
            away = working[len(working) - 1 - i]
            if home is not None and away is not None:
                fixtures.append(Fixture(matchday=matchday, home=home, away=away))
        # Rotate: keep index 0 fixed, rotate the rest
        working = [working[0]] + [working[-1]] + working[1:-1]
        matchday += 1

    # Second leg — reverse fixtures
    first_half = list(fixtures)
    for f in first_half:
        fixtures.append(Fixture(matchday=f.matchday + rounds, home=f.away, away=f.home))

    return fixtures


def calculate_standings(club_names: List[str], fixtures: List[Fixture]) -> List[StandingsRow]:
    """Compute the league standings table from a list of (possibly partial) fixtures."""
    rows: Dict[str, StandingsRow] = {c: StandingsRow(club=c) for c in club_names}

    for f in fixtures:
        if not f.played:
            continue
        h, a = f.home, f.away
        hg, ag = f.home_score, f.away_score

        if h not in rows or a not in rows:
            continue

        rows[h].played += 1
        rows[h].gf += hg
        rows[h].ga += ag

        rows[a].played += 1
        rows[a].gf += ag
        rows[a].ga += hg

        if hg > ag:
            rows[h].won += 1
            rows[h].points += 3
            rows[a].lost += 1
        elif ag > hg:
            rows[a].won += 1
            rows[a].points += 3
            rows[h].lost += 1
        else:
            rows[h].drawn += 1
            rows[h].points += 1
            rows[a].drawn += 1
            rows[a].points += 1

    return sorted(
        rows.values(),
        key=lambda r: (-r.points, -r.gd, -r.gf, r.club),
    )


def get_league_clubs(league_name: str) -> List[str]:
    """Return all club names that belong to the given league."""
    from data.clubs import CLUBS
    return [name for name, club in CLUBS.items() if club.league == league_name]
