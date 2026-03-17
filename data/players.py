"""FIFA 18 Player Data - Real players with accurate ratings"""

from dataclasses import dataclass, field
from typing import List, Optional


@dataclass
class Player:
    id: int
    name: str
    nationality: str
    club: str
    position: str  # GK, CB, LB, RB, CDM, CM, CAM, LW, RW, ST
    overall: int
    pace: int
    shooting: int
    passing: int
    dribbling: int
    defending: int
    physical: int
    age: int
    value: int  # in thousands EUR
    wage: int   # in thousands EUR/week
    weak_foot: int  # 1-5
    skill_moves: int  # 1-5
    is_icon: bool = False
    contract_years: int = 2
    fitness: int = 100  # 0-100
    morale: int = 75    # 0-100

    @property
    def attack_rating(self) -> float:
        if self.position == "GK":
            return self.overall
        weights = {"pace": 0.15, "shooting": 0.35, "passing": 0.2, "dribbling": 0.3}
        return (self.pace * weights["pace"] + self.shooting * weights["shooting"] +
                self.passing * weights["passing"] + self.dribbling * weights["dribbling"])

    @property
    def defense_rating(self) -> float:
        if self.position == "GK":
            return self.overall
        weights = {"pace": 0.15, "defending": 0.5, "physical": 0.35}
        return (self.pace * weights["pace"] + self.defending * weights["defending"] +
                self.physical * weights["physical"])

    def to_dict(self) -> dict:
        return {
            "id": self.id, "name": self.name, "nationality": self.nationality,
            "club": self.club, "position": self.position, "overall": self.overall,
            "pace": self.pace, "shooting": self.shooting, "passing": self.passing,
            "dribbling": self.dribbling, "defending": self.defending,
            "physical": self.physical, "age": self.age, "value": self.value,
            "wage": self.wage, "weak_foot": self.weak_foot,
            "skill_moves": self.skill_moves, "is_icon": self.is_icon,
            "contract_years": self.contract_years, "fitness": self.fitness,
            "morale": self.morale
        }

    @classmethod
    def from_dict(cls, d: dict) -> "Player":
        return cls(**d)


# ── REAL FIFA 18 PLAYER ROSTER ─────────────────────────────────────────────
PLAYERS: List[Player] = [
    # ── REAL MADRID ──────────────────────────────────────────────────────────
    Player(1,  "Cristiano Ronaldo",  "Portugal",  "Real Madrid",   "LW",  94, 89, 94, 88, 89, 35, 80, 32, 95000, 365, 4, 5),
    Player(2,  "Luka Modric",        "Croatia",   "Real Madrid",   "CM",  92, 74, 76, 92, 90, 72, 66, 32, 65000, 200, 4, 4),
    Player(3,  "Sergio Ramos",       "Spain",     "Real Madrid",   "CB",  91, 74, 61, 74, 67, 91, 83, 31, 60000, 200, 3, 2),
    Player(4,  "Toni Kroos",         "Germany",   "Real Madrid",   "CM",  92, 55, 77, 93, 80, 64, 72, 27, 80000, 200, 3, 2),
    Player(5,  "Karim Benzema",      "France",    "Real Madrid",   "ST",  87, 76, 83, 82, 84, 38, 74, 29, 55000, 150, 4, 4),
    Player(6,  "Gareth Bale",        "Wales",     "Real Madrid",   "RW",  89, 93, 82, 77, 84, 35, 82, 28, 90000, 260, 3, 3),
    Player(7,  "Isco",               "Spain",     "Real Madrid",   "CAM", 88, 72, 76, 88, 91, 50, 62, 25, 70000, 120, 3, 4),
    Player(8,  "Marcelo",            "Brazil",    "Real Madrid",   "LB",  88, 82, 62, 84, 89, 63, 67, 29, 55000, 120, 3, 4),
    Player(9,  "Casemiro",           "Brazil",    "Real Madrid",   "CDM", 85, 61, 59, 73, 67, 87, 85, 25, 35000, 90,  3, 1),
    Player(10, "Keylor Navas",       "Costa Rica","Real Madrid",   "GK",  87, 52, 14, 46, 58, 20, 69, 30, 30000, 90,  3, 1),

    # ── FC BARCELONA ─────────────────────────────────────────────────────────
    Player(11, "Lionel Messi",       "Argentina", "FC Barcelona",  "RW",  93, 87, 90, 91, 96, 35, 68, 30, 95000, 565, 4, 4),
    Player(12, "Neymar Jr",          "Brazil",    "PSG",           "LW",  92, 90, 84, 85, 96, 28, 59, 25, 123000,600, 5, 5),
    Player(13, "Andres Iniesta",     "Spain",     "FC Barcelona",  "CM",  88, 74, 70, 92, 91, 57, 62, 33, 25000, 150, 4, 4),
    Player(14, "Luis Suarez",        "Uruguay",   "FC Barcelona",  "ST",  92, 77, 88, 86, 88, 45, 81, 30, 80000, 370, 4, 4),
    Player(15, "Gerard Pique",       "Spain",     "FC Barcelona",  "CB",  87, 72, 56, 81, 69, 87, 78, 30, 30000, 120, 3, 1),
    Player(16, "Jordi Alba",         "Spain",     "FC Barcelona",  "LB",  88, 88, 63, 79, 77, 74, 69, 28, 35000, 100, 3, 3),
    Player(17, "Ivan Rakitic",       "Croatia",   "FC Barcelona",  "CM",  87, 68, 73, 87, 78, 74, 79, 29, 55000, 120, 4, 3),
    Player(18, "Marc-Andre ter Stegen","Germany", "FC Barcelona",  "GK",  88, 48, 13, 49, 55, 14, 73, 25, 50000, 120, 3, 1),
    Player(19, "Sergio Busquets",    "Spain",     "FC Barcelona",  "CDM", 88, 49, 59, 88, 72, 79, 68, 29, 25000, 100, 3, 1),
    Player(20, "Ousmane Dembele",    "France",    "FC Barcelona",  "LW",  83, 94, 75, 75, 88, 32, 62, 20, 82000, 130, 3, 4),

    # ── PARIS SAINT-GERMAIN ───────────────────────────────────────────────────
    Player(21, "Kylian Mbappe",      "France",    "PSG",           "ST",  87, 96, 81, 80, 92, 36, 76, 18, 95000, 100, 4, 4),
    Player(22, "Edinson Cavani",     "Uruguay",   "PSG",           "ST",  87, 83, 87, 74, 80, 45, 82, 30, 40000, 150, 3, 2),
    Player(23, "Marco Verratti",     "Italy",     "PSG",           "CM",  86, 71, 64, 88, 87, 68, 64, 24, 45000, 100, 4, 4),

    # ── MANCHESTER CITY ────────────────────────────────────────────────────────
    Player(24, "Kevin De Bruyne",    "Belgium",   "Man City",      "CAM", 92, 76, 82, 93, 86, 64, 78, 26, 100000,200, 4, 4),
    Player(25, "Leroy Sane",         "Germany",   "Man City",      "LW",  83, 95, 76, 78, 85, 30, 65, 21, 55000, 100, 3, 4),
    Player(26, "Raheem Sterling",    "England",   "Man City",      "LW",  83, 92, 74, 77, 84, 43, 70, 22, 55000, 100, 3, 4),
    Player(27, "Sergio Aguero",      "Argentina", "Man City",      "ST",  89, 80, 88, 78, 86, 29, 73, 29, 65000, 160, 4, 4),
    Player(28, "Ederson",            "Brazil",    "Man City",      "GK",  84, 50, 14, 51, 51, 13, 74, 24, 35000, 70,  3, 1),
    Player(29, "David Silva",        "Spain",     "Man City",      "CAM", 90, 74, 74, 93, 89, 56, 62, 31, 30000, 130, 4, 4),
    Player(30, "Vincent Kompany",    "Belgium",   "Man City",      "CB",  84, 68, 48, 67, 52, 84, 84, 31, 20000, 100, 3, 1),

    # ── CHELSEA ────────────────────────────────────────────────────────────────
    Player(31, "Eden Hazard",        "Belgium",   "Chelsea",       "LW",  91, 84, 83, 87, 94, 33, 78, 26, 90000, 280, 4, 4),
    Player(32, "N'Golo Kante",       "France",    "Chelsea",       "CDM", 89, 76, 56, 77, 78, 90, 83, 26, 65000, 100, 3, 2),
    Player(33, "Diego Costa",        "Spain",     "Atletico Madrid","ST", 86, 81, 85, 69, 78, 55, 90, 28, 45000, 120, 4, 2),
    Player(34, "Thibaut Courtois",   "Belgium",   "Chelsea",       "GK",  89, 53, 12, 52, 55, 12, 83, 25, 60000, 140, 3, 1),

    # ── ATLETICO MADRID ────────────────────────────────────────────────────────
    Player(35, "Antoine Griezmann",  "France",    "Atletico Madrid","ST", 92, 88, 88, 84, 87, 58, 76, 26, 100000,210, 4, 4),
    Player(36, "Jan Oblak",          "Slovenia",  "Atletico Madrid","GK", 91, 48, 12, 46, 52, 10, 80, 24, 55000, 100, 3, 1),

    # ── JUVENTUS ───────────────────────────────────────────────────────────────
    Player(37, "Paulo Dybala",       "Argentina", "Juventus",      "CAM", 89, 82, 86, 85, 91, 33, 69, 23, 90000, 120, 4, 4),
    Player(38, "Gianluigi Buffon",   "Italy",     "Juventus",      "GK",  90, 48, 12, 49, 52, 14, 78, 39, 15000, 120, 3, 1),
    Player(39, "Giorgio Chiellini",  "Italy",     "Juventus",      "CB",  90, 66, 50, 66, 55, 91, 84, 33, 30000, 100, 3, 1),
    Player(40, "Miralem Pjanic",     "Bosnia",    "Juventus",      "CM",  87, 62, 78, 90, 82, 57, 70, 27, 50000, 100, 3, 3),

    # ── BAYERN MUNICH ─────────────────────────────────────────────────────────
    Player(41, "Robert Lewandowski", "Poland",    "Bayern Munich", "ST",  92, 79, 91, 78, 85, 44, 82, 29, 80000, 270, 3, 4),
    Player(42, "Manuel Neuer",       "Germany",   "Bayern Munich", "GK",  92, 54, 13, 53, 48, 14, 87, 31, 55000, 220, 3, 1),
    Player(43, "Thomas Muller",      "Germany",   "Bayern Munich", "CAM", 88, 68, 82, 85, 75, 57, 72, 27, 60000, 150, 3, 2),
    Player(44, "Arjen Robben",       "Netherlands","Bayern Munich","RW",  87, 86, 82, 82, 88, 37, 72, 33, 30000, 150, 3, 4),
    Player(45, "Franck Ribery",      "France",    "Bayern Munich", "LW",  85, 84, 74, 85, 89, 35, 72, 34, 15000, 120, 4, 5),
    Player(46, "Jerome Boateng",     "Germany",   "Bayern Munich", "CB",  87, 71, 44, 71, 55, 87, 80, 29, 40000, 100, 3, 1),
    Player(47, "David Alaba",        "Austria",   "Bayern Munich", "LB",  84, 78, 59, 80, 79, 78, 68, 25, 40000, 100, 4, 3),

    # ── LIVERPOOL ─────────────────────────────────────────────────────────────
    Player(48, "Mohamed Salah",      "Egypt",     "Liverpool",     "RW",  88, 94, 85, 80, 89, 45, 75, 25, 75000, 130, 3, 4),
    Player(49, "Roberto Firmino",    "Brazil",    "Liverpool",     "ST",  86, 77, 80, 84, 87, 62, 78, 26, 50000, 100, 3, 3),
    Player(50, "Sadio Mane",         "Senegal",   "Liverpool",     "LW",  86, 93, 79, 76, 88, 44, 76, 25, 60000, 100, 4, 4),
    Player(51, "Philippe Coutinho",  "Brazil",    "FC Barcelona",  "CAM", 88, 77, 80, 88, 88, 55, 64, 25, 80000, 130, 4, 4),
    Player(52, "Jordan Henderson",   "England",   "Liverpool",     "CM",  80, 69, 65, 78, 72, 73, 82, 27, 20000, 60,  3, 2),

    # ── MANCHESTER UNITED ─────────────────────────────────────────────────────
    Player(53, "Paul Pogba",         "France",    "Man United",    "CM",  84, 72, 74, 83, 86, 72, 86, 24, 90000, 290, 4, 4),
    Player(54, "David De Gea",       "Spain",     "Man United",    "GK",  91, 51, 13, 50, 58, 11, 73, 26, 65000, 200, 3, 1),
    Player(55, "Romelu Lukaku",      "Belgium",   "Man United",    "ST",  85, 83, 83, 68, 77, 35, 86, 24, 65000, 130, 3, 3),
    Player(56, "Marcus Rashford",    "England",   "Man United",    "ST",  81, 90, 74, 73, 82, 42, 74, 19, 30000, 40,  3, 3),

    # ── ARSENAL ───────────────────────────────────────────────────────────────
    Player(57, "Alexis Sanchez",     "Chile",     "Arsenal",       "LW",  89, 87, 85, 82, 88, 55, 79, 28, 55000, 300, 4, 4),
    Player(58, "Mesut Ozil",         "Germany",   "Arsenal",       "CAM", 88, 72, 73, 93, 89, 36, 59, 29, 45000, 350, 4, 4),
    Player(59, "Hector Bellerin",    "Spain",     "Arsenal",       "RB",  81, 89, 56, 73, 75, 72, 72, 22, 30000, 40,  3, 3),

    # ── TOTTENHAM ─────────────────────────────────────────────────────────────
    Player(60, "Harry Kane",         "England",   "Tottenham",     "ST",  89, 76, 90, 77, 80, 47, 83, 24, 80000, 100, 3, 2),
    Player(61, "Dele Alli",          "England",   "Tottenham",     "CAM", 85, 78, 77, 79, 85, 59, 76, 21, 55000, 60,  3, 3),
    Player(62, "Christian Eriksen",  "Denmark",   "Tottenham",     "CAM", 87, 72, 80, 90, 82, 61, 66, 25, 60000, 60,  3, 3),

    # ── BORUSSIA DORTMUND ─────────────────────────────────────────────────────
    Player(63, "Pierre-Emerick Aubameyang","Gabon","Dortmund",     "ST",  87, 96, 84, 70, 84, 30, 73, 28, 60000, 110, 3, 3),
    Player(64, "Christian Pulisic",  "USA",       "Dortmund",      "LW",  79, 85, 68, 76, 84, 52, 63, 19, 30000, 20,  4, 4),

    # ── INTER MILAN ───────────────────────────────────────────────────────────
    Player(65, "Mauro Icardi",       "Argentina", "Inter Milan",   "ST",  85, 75, 86, 65, 79, 32, 78, 24, 45000, 80,  4, 2),

    # ── AC MILAN ──────────────────────────────────────────────────────────────
    Player(66, "Gianluigi Donnarumma","Italy",    "AC Milan",      "GK",  82, 52, 12, 43, 48, 12, 77, 18, 60000, 40,  3, 1),

    # ── FUT ICONS ─────────────────────────────────────────────────────────────
    Player(101, "Ronaldo Nazario",   "Brazil",    "Icon",          "ST",  98, 92, 94, 88, 93, 44, 82, 99, 0, 0,    4, 5, True),
    Player(102, "Zinedine Zidane",   "France",    "Icon",          "CAM", 96, 74, 85, 94, 95, 60, 74, 99, 0, 0,    4, 5, True),
    Player(103, "Ronaldinho",        "Brazil",    "Icon",          "CAM", 95, 85, 85, 88, 97, 44, 72, 99, 0, 0,    5, 5, True),
    Player(104, "Thierry Henry",     "France",    "Icon",          "ST",  95, 94, 90, 82, 91, 38, 78, 99, 0, 0,    4, 4, True),
    Player(105, "Pele",              "Brazil",    "Icon",          "ST",  98, 89, 96, 92, 95, 52, 80, 99, 0, 0,    4, 5, True),
    Player(106, "Diego Maradona",    "Argentina", "Icon",          "CAM", 97, 87, 86, 92, 97, 50, 65, 99, 0, 0,    4, 5, True),
    Player(107, "Rio Ferdinand",     "England",   "Icon",          "CB",  91, 73, 46, 72, 55, 90, 78, 99, 0, 0,    3, 1, True),
    Player(108, "Roberto Carlos",    "Brazil",    "Icon",          "LB",  92, 90, 72, 82, 85, 73, 75, 99, 0, 0,    3, 4, True),
    Player(109, "Cafu",              "Brazil",    "Icon",          "RB",  92, 91, 68, 80, 79, 80, 82, 99, 0, 0,    3, 2, True),
    Player(110, "Patrick Vieira",    "France",    "Icon",          "CM",  91, 73, 72, 85, 79, 86, 88, 99, 0, 0,    3, 2, True),
]

# Quick lookup helpers
PLAYER_BY_ID = {p.id: p for p in PLAYERS}
PLAYERS_BY_CLUB: dict[str, List[Player]] = {}
for _p in PLAYERS:
    PLAYERS_BY_CLUB.setdefault(_p.club, []).append(_p)

CLUBS = [
    "Real Madrid", "FC Barcelona", "PSG", "Man City", "Chelsea",
    "Atletico Madrid", "Juventus", "Bayern Munich", "Liverpool",
    "Man United", "Arsenal", "Tottenham", "Dortmund", "Inter Milan", "AC Milan",
]

FORMATIONS = {
    "4-3-3":   ["GK", "RB", "CB", "CB", "LB", "CM", "CM", "CM", "RW", "LW", "ST"],
    "4-2-3-1": ["GK", "RB", "CB", "CB", "LB", "CDM", "CDM", "CAM", "RW", "LW", "ST"],
    "4-4-2":   ["GK", "RB", "CB", "CB", "LB", "CM", "CM", "CM", "CM", "ST", "ST"],
    "3-5-2":   ["GK", "CB", "CB", "CB", "CM", "CM", "CDM", "LW", "RW", "ST", "ST"],
    "5-3-2":   ["GK", "RB", "CB", "CB", "CB", "LB", "CM", "CM", "CM", "ST", "ST"],
}
