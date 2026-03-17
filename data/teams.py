"""FIFA 18 Team Data — club info, league structure, team styles"""

from dataclasses import dataclass, field
from typing import List, Dict


@dataclass
class TeamStyle:
    """Defines how a team plays — affects match simulation AI"""
    name: str           # e.g. "Tiki-Taka", "High Press", "Counter-Attack"
    possession_bonus: float    # +/- % possession tendency
    attack_frequency: float    # shots per game multiplier
    pressing_intensity: float  # defensive pressure multiplier
    description: str


TEAM_STYLES: Dict[str, TeamStyle] = {
    "tiki_taka":     TeamStyle("Tiki-Taka",      +8.0, 1.0, 1.1,
                               "Short passing, high possession, patient build-up"),
    "high_press":    TeamStyle("High Press",       0.0, 1.3, 1.4,
                               "Aggressive pressing, quick transitions, high intensity"),
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
    name: str
    league: str
    country: str
    stadium: str
    capacity: int
    style_key: str      # key into TEAM_STYLES
    prestige: int       # 1-10, affects transfer attractiveness
    budget: int         # transfer budget in thousands EUR
    wage_budget: int    # weekly wage budget in thousands EUR

    @property
    def style(self) -> TeamStyle:
        return TEAM_STYLES[self.style_key]


CLUBS: Dict[str, Club] = {
    "Real Madrid":     Club("Real Madrid",     "La Liga",         "Spain",   "Santiago Bernabeu",    81044, "balanced",      10, 200000, 2500),
    "FC Barcelona":    Club("FC Barcelona",    "La Liga",         "Spain",   "Camp Nou",             99354, "tiki_taka",     10, 180000, 2800),
    "PSG":             Club("PSG",             "Ligue 1",         "France",  "Parc des Princes",     48712, "direct",         9, 500000, 5000),
    "Man City":        Club("Man City",        "Premier League",  "England", "Etihad Stadium",       55097, "gegenpressing",  9, 300000, 3000),
    "Chelsea":         Club("Chelsea",         "Premier League",  "England", "Stamford Bridge",      40853, "counter",        8, 150000, 2200),
    "Atletico Madrid": Club("Atletico Madrid", "La Liga",         "Spain",   "Wanda Metropolitano",  68456, "counter",        8, 80000,  1500),
    "Juventus":        Club("Juventus",        "Serie A",         "Italy",   "Juventus Stadium",     41507, "balanced",       9, 120000, 2000),
    "Bayern Munich":   Club("Bayern Munich",   "Bundesliga",      "Germany", "Allianz Arena",        75000, "high_press",    10, 200000, 2500),
    "Liverpool":       Club("Liverpool",       "Premier League",  "England", "Anfield",              54074, "gegenpressing",  8, 100000, 1800),
    "Man United":      Club("Man United",      "Premier League",  "England", "Old Trafford",         74879, "balanced",       9, 160000, 2200),
    "Arsenal":         Club("Arsenal",         "Premier League",  "England", "Emirates Stadium",     60260, "tiki_taka",      7, 80000,  1600),
    "Tottenham":       Club("Tottenham",       "Premier League",  "England", "Wembley Stadium",      90000, "high_press",     7, 80000,  1400),
    "Dortmund":        Club("Dortmund",        "Bundesliga",      "Germany", "Signal Iduna Park",    81365, "gegenpressing",  7, 80000,  1200),
    "Inter Milan":     Club("Inter Milan",     "Serie A",         "Italy",   "San Siro",             80018, "counter",        7, 60000,  1000),
    "AC Milan":        Club("AC Milan",        "Serie A",         "Italy",   "San Siro",             80018, "balanced",       6, 50000,  900),
}

LEAGUES: Dict[str, List[str]] = {
    "Premier League": ["Man City", "Man United", "Chelsea", "Arsenal", "Tottenham", "Liverpool"],
    "La Liga":        ["Real Madrid", "FC Barcelona", "Atletico Madrid"],
    "Bundesliga":     ["Bayern Munich", "Dortmund"],
    "Serie A":        ["Juventus", "Inter Milan", "AC Milan"],
    "Ligue 1":        ["PSG"],
}
