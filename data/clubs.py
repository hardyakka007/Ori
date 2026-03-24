"""The Beautiful Game 2026 — Club data with real names."""

from dataclasses import dataclass
from typing import Dict, List


@dataclass
class TeamStyle:
    name: str
    possession_bonus: float
    attack_frequency: float
    pressing_intensity: float
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

# Kit colours for 3D player models (PRD §16.2)
KIT_COLOURS: Dict[str, Dict[str, str]] = {
    "Manchester United":   {"primary": "#DA291C", "secondary": "#FFFFFF"},
    "Manchester City":     {"primary": "#6CABDD", "secondary": "#FFFFFF"},
    "Liverpool":           {"primary": "#C8102E", "secondary": "#C8102E"},
    "Arsenal":             {"primary": "#EF0107", "secondary": "#FFFFFF"},
    "Chelsea":             {"primary": "#034694", "secondary": "#034694"},
    "Tottenham Hotspur":   {"primary": "#FFFFFF", "secondary": "#132257"},
    "Real Madrid":         {"primary": "#FFFFFF", "secondary": "#FFFFFF"},
    "FC Barcelona":        {"primary": "#004D98", "secondary": "#004D98"},
    "Atletico Madrid":     {"primary": "#CB3524", "secondary": "#003366"},
    "Bayern Munich":       {"primary": "#DC052D", "secondary": "#DC052D"},
    "Borussia Dortmund":   {"primary": "#FDE100", "secondary": "#000000"},
    "Juventus":            {"primary": "#000000", "secondary": "#000000"},
    "Paris Saint-Germain": {"primary": "#004170", "secondary": "#004170"},
    "Inter Milan":         {"primary": "#010E80", "secondary": "#000000"},
    "AC Milan":            {"primary": "#FB090B", "secondary": "#FFFFFF"},
}


@dataclass
class Club:
    name: str
    league: str
    country: str
    stadium: str
    capacity: int
    style_key: str
    prestige: int

    @property
    def style(self) -> TeamStyle:
        return TEAM_STYLES[self.style_key]

    @property
    def kit(self) -> Dict[str, str]:
        return KIT_COLOURS.get(self.name, {"primary": "#888888", "secondary": "#FFFFFF"})


CLUBS: Dict[str, Club] = {
    "Manchester United":   Club("Manchester United",   "Premier League",  "England",
                                "Old Trafford",             74879, "balanced",      9),
    "Manchester City":     Club("Manchester City",     "Premier League",  "England",
                                "Etihad Stadium",           55097, "gegenpressing", 9),
    "Liverpool":           Club("Liverpool",           "Premier League",  "England",
                                "Anfield",                  54074, "gegenpressing", 8),
    "Arsenal":             Club("Arsenal",             "Premier League",  "England",
                                "Emirates Stadium",         60260, "tiki_taka",     7),
    "Chelsea":             Club("Chelsea",             "Premier League",  "England",
                                "Stamford Bridge",          40853, "counter",       8),
    "Tottenham Hotspur":   Club("Tottenham Hotspur",   "Premier League",  "England",
                                "Tottenham Hotspur Stadium",62850, "high_press",    7),
    "Real Madrid":         Club("Real Madrid",         "La Liga",         "Spain",
                                "Santiago Bernabeu",        81044, "balanced",     10),
    "FC Barcelona":        Club("FC Barcelona",        "La Liga",         "Spain",
                                "Camp Nou",                 99354, "tiki_taka",    10),
    "Atletico Madrid":     Club("Atletico Madrid",     "La Liga",         "Spain",
                                "Wanda Metropolitano",      68456, "counter",       8),
    "Bayern Munich":       Club("Bayern Munich",       "Bundesliga",      "Germany",
                                "Allianz Arena",            75000, "high_press",   10),
    "Borussia Dortmund":   Club("Borussia Dortmund",   "Bundesliga",      "Germany",
                                "Signal Iduna Park",        81365, "gegenpressing", 7),
    "Juventus":            Club("Juventus",            "Serie A",         "Italy",
                                "Juventus Stadium",         41507, "balanced",      9),
    "Paris Saint-Germain": Club("Paris Saint-Germain", "Ligue 1",         "France",
                                "Parc des Princes",         48712, "direct",        9),
    "Inter Milan":         Club("Inter Milan",         "Serie A",         "Italy",
                                "San Siro",                 80018, "counter",       7),
    "AC Milan":            Club("AC Milan",            "Serie A",         "Italy",
                                "San Siro",                 80018, "balanced",      6),
}

CLUB_LIST: List[str] = list(CLUBS.keys())

LEAGUES: Dict[str, List[str]] = {
    "Premier League": ["Manchester United", "Manchester City", "Liverpool",
                       "Arsenal", "Chelsea", "Tottenham Hotspur"],
    "La Liga":        ["Real Madrid", "FC Barcelona", "Atletico Madrid"],
    "Bundesliga":     ["Bayern Munich", "Borussia Dortmund"],
    "Serie A":        ["Juventus", "Inter Milan", "AC Milan"],
    "Ligue 1":        ["Paris Saint-Germain"],
}
