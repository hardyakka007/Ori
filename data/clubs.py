"""The Beautiful Game 2026 — Club data with in-game names."""

from dataclasses import dataclass
from typing import Dict, List


@dataclass
class TeamStyle:
    name: str
    possession_bonus: float   # +/- % possession tendency
    attack_frequency: float   # shot attempts multiplier
    pressing_intensity: float # defensive pressure multiplier
    description: str


TEAM_STYLES: Dict[str, TeamStyle] = {
    "tiki_taka":     TeamStyle("Tiki-Taka",      +8.0, 1.0, 1.1,
                               "Short passing, high possession, patient build-up"),
    "high_press":    TeamStyle("High Press",       0.0, 1.3, 1.4,
                               "Aggressive pressing, quick transitions"),
    "counter":       TeamStyle("Counter-Attack",  -6.0, 0.9, 0.7,
                               "Sit deep, absorb pressure, lethal on the break"),
    "direct":        TeamStyle("Direct Play",     -3.0, 1.2, 0.9,
                               "Long balls, physical, target-man oriented"),
    "balanced":      TeamStyle("Balanced",         0.0, 1.0, 1.0,
                               "No specific bias, adaptable to opponent"),
    "gegenpressing": TeamStyle("Gegenpressing",   +2.0, 1.4, 1.5,
                               "Immediate counter-press after losing ball"),
}


@dataclass
class Club:
    name: str          # in-game name (confirmed by Ori)
    real_name: str     # reference only — never shown in-game
    league: str        # in-game league name
    country: str
    stadium: str
    capacity: int
    style_key: str
    prestige: int      # 1-10

    @property
    def style(self) -> TeamStyle:
        return TEAM_STYLES[self.style_key]


# ── CONFIRMED CLUB NAMES (Ori Franklin, 2026-03-17) ─────────────────────────
CLUBS: Dict[str, Club] = {
    "Red Devils United":  Club("Red Devils United",  "Manchester United",
                               "Premier Division",  "England", "Old Trafford",          74879, "balanced",      9),
    "Blues Man City":     Club("Blues Man City",     "Manchester City",
                               "Premier Division",  "England", "Etihad Stadium",         55097, "gegenpressing", 9),
    "The Reds Liverpool": Club("The Reds Liverpool", "Liverpool",
                               "Premier Division",  "England", "Anfield",                54074, "gegenpressing", 8),
    "The Gunners FC":     Club("The Gunners FC",     "Arsenal",
                               "Premier Division",  "England", "Emirates Stadium",       60260, "tiki_taka",     7),
    "The Blues Chelsea":  Club("The Blues Chelsea",  "Chelsea",
                               "Premier Division",  "England", "Stamford Bridge",        40853, "counter",       8),
    "Hotspur FC":         Club("Hotspur FC",         "Tottenham Hotspur",
                               "Premier Division",  "England", "Tottenham Hotspur Stadium", 62850, "high_press", 7),
    "White Madrid FC":    Club("White Madrid FC",    "Real Madrid",
                               "Primera Division",  "Spain",   "Santiago Bernabeu",      81044, "balanced",     10),
    "Catalonia FC":       Club("Catalonia FC",       "FC Barcelona",
                               "Primera Division",  "Spain",   "Camp Nou",               99354, "tiki_taka",    10),
    "Colchoneros Madrid": Club("Colchoneros Madrid", "Atletico Madrid",
                               "Primera Division",  "Spain",   "Wanda Metropolitano",    68456, "counter",       8),
    "Munich FC":          Club("Munich FC",          "Bayern Munich",
                               "German Top Flight", "Germany", "Allianz Arena",          75000, "high_press",   10),
    "Yellow Wall FC":     Club("Yellow Wall FC",     "Borussia Dortmund",
                               "German Top Flight", "Germany", "Signal Iduna Park",      81365, "gegenpressing", 7),
    "La Vecchia FC":      Club("La Vecchia FC",      "Juventus",
                               "Italian First Division", "Italy", "Juventus Stadium",    41507, "balanced",      9),
    "Parisians FC":       Club("Parisians FC",       "PSG",
                               "French First Division",  "France", "Parc des Princes",  48712, "direct",         9),
    "Nerazzurri FC":      Club("Nerazzurri FC",      "Inter Milan",
                               "Italian First Division", "Italy", "San Siro",            80018, "counter",       7),
    "Rossoneri FC":       Club("Rossoneri FC",       "AC Milan",
                               "Italian First Division", "Italy", "San Siro",            80018, "balanced",      6),
}

CLUB_LIST: List[str] = list(CLUBS.keys())

LEAGUES: Dict[str, List[str]] = {
    "Premier Division":       ["Red Devils United", "Blues Man City", "The Reds Liverpool",
                                "The Gunners FC", "The Blues Chelsea", "Hotspur FC"],
    "Primera Division":       ["White Madrid FC", "Catalonia FC", "Colchoneros Madrid"],
    "German Top Flight":      ["Munich FC", "Yellow Wall FC"],
    "Italian First Division": ["La Vecchia FC", "Nerazzurri FC", "Rossoneri FC"],
    "French First Division":  ["Parisians FC"],
}
