"""The Beautiful Game 2026 — Player roster with real club names."""

from dataclasses import dataclass, field
from typing import List, Optional


@dataclass
class Player:
    id: int
    name: str
    nationality: str
    club: str          # real club name
    position: str      # GK, CB, LB, RB, CDM, CM, CAM, LW, RW, ST
    overall: int
    pace: int
    shooting: int
    passing: int
    dribbling: int
    defending: int
    physical: int
    age: int
    value: int         # thousands EUR
    wage: int          # thousands EUR/week
    weak_foot: int     # 1-5
    skill_moves: int   # 1-5
    is_icon: bool = False
    contract_years: int = 2
    fitness: int = 100
    morale: int = 75

    @property
    def attack_rating(self) -> float:
        if self.position == "GK":
            return self.overall
        w = {"pace": 0.15, "shooting": 0.35, "passing": 0.2, "dribbling": 0.3}
        return (self.pace * w["pace"] + self.shooting * w["shooting"] +
                self.passing * w["passing"] + self.dribbling * w["dribbling"])

    @property
    def defense_rating(self) -> float:
        if self.position == "GK":
            return self.overall
        w = {"pace": 0.15, "defending": 0.5, "physical": 0.35}
        return (self.pace * w["pace"] + self.defending * w["defending"] +
                self.physical * w["physical"])

    def to_dict(self) -> dict:
        return {k: getattr(self, k) for k in
                ["id","name","nationality","club","position","overall",
                 "pace","shooting","passing","dribbling","defending","physical",
                 "age","value","wage","weak_foot","skill_moves","is_icon",
                 "contract_years","fitness","morale"]}

    @classmethod
    def from_dict(cls, d: dict) -> "Player":
        return cls(**d)


# ── PLAYER ROSTER ─────────────────────────────────────────────────────────────
PLAYERS: List[Player] = [

    # ── REAL MADRID ──────────────────────────────────────────────────────────
    Player(1,  "Cristiano Ronaldo",  "Portugal",    "Real Madrid",         "LW",  94, 89, 94, 88, 89, 35, 80, 32, 95000, 365, 4, 5),
    Player(2,  "Luka Modric",        "Croatia",     "Real Madrid",         "CM",  92, 74, 76, 92, 90, 72, 66, 32, 65000, 200, 4, 4),
    Player(3,  "Sergio Ramos",       "Spain",       "Real Madrid",         "CB",  91, 74, 61, 74, 67, 91, 83, 31, 60000, 200, 3, 2),
    Player(4,  "Toni Kroos",         "Germany",     "Real Madrid",         "CM",  92, 55, 77, 93, 80, 64, 72, 27, 80000, 200, 3, 2),
    Player(5,  "Karim Benzema",      "France",      "Real Madrid",         "ST",  87, 76, 83, 82, 84, 38, 74, 29, 55000, 150, 4, 4),
    Player(6,  "Gareth Bale",        "Wales",       "Real Madrid",         "RW",  89, 93, 82, 77, 84, 35, 82, 28, 90000, 260, 3, 3),
    Player(7,  "Isco",               "Spain",       "Real Madrid",         "CAM", 88, 72, 76, 88, 91, 50, 62, 25, 70000, 120, 3, 4),
    Player(8,  "Marcelo",            "Brazil",      "Real Madrid",         "LB",  88, 82, 62, 84, 89, 63, 67, 29, 55000, 120, 3, 4),
    Player(9,  "Casemiro",           "Brazil",      "Real Madrid",         "CDM", 85, 61, 59, 73, 67, 87, 85, 25, 35000, 90,  3, 1),
    Player(10, "Keylor Navas",       "Costa Rica",  "Real Madrid",         "GK",  87, 52, 14, 46, 58, 20, 69, 30, 30000, 90,  3, 1),

    # ── FC BARCELONA ─────────────────────────────────────────────────────────
    Player(11, "Lionel Messi",       "Argentina",   "FC Barcelona",        "RW",  93, 87, 90, 91, 96, 35, 68, 30, 95000, 565, 4, 4),
    Player(12, "Andres Iniesta",     "Spain",       "FC Barcelona",        "CM",  88, 74, 70, 92, 91, 57, 62, 33, 25000, 150, 4, 4),
    Player(13, "Luis Suarez",        "Uruguay",     "FC Barcelona",        "ST",  92, 77, 88, 86, 88, 45, 81, 30, 80000, 370, 4, 4),
    Player(14, "Gerard Pique",       "Spain",       "FC Barcelona",        "CB",  87, 72, 56, 81, 69, 87, 78, 30, 30000, 120, 3, 1),
    Player(15, "Jordi Alba",         "Spain",       "FC Barcelona",        "LB",  88, 88, 63, 79, 77, 74, 69, 28, 35000, 100, 3, 3),
    Player(16, "Ivan Rakitic",       "Croatia",     "FC Barcelona",        "CM",  87, 68, 73, 87, 78, 74, 79, 29, 55000, 120, 4, 3),
    Player(17, "Marc-Andre ter Stegen","Germany",   "FC Barcelona",        "GK",  88, 48, 13, 49, 55, 14, 73, 25, 50000, 120, 3, 1),
    Player(18, "Sergio Busquets",    "Spain",       "FC Barcelona",        "CDM", 88, 49, 59, 88, 72, 79, 68, 29, 25000, 100, 3, 1),
    Player(19, "Ousmane Dembele",    "France",      "FC Barcelona",        "LW",  83, 94, 75, 75, 88, 32, 62, 20, 82000, 130, 3, 4),
    Player(20, "Samuel Umtiti",      "France",      "FC Barcelona",        "CB",  84, 60, 27, 65, 46, 85, 78, 23, 35000, 80,  3, 1),

    # ── PARIS SAINT-GERMAIN ───────────────────────────────────────────────────
    Player(21, "Kylian Mbappe",      "France",      "Paris Saint-Germain", "ST",  87, 96, 81, 80, 92, 36, 76, 18, 95000, 100, 4, 4),
    Player(22, "Edinson Cavani",     "Uruguay",     "Paris Saint-Germain", "ST",  87, 83, 87, 74, 80, 45, 82, 30, 40000, 150, 3, 2),
    Player(23, "Marco Verratti",     "Italy",       "Paris Saint-Germain", "CM",  86, 71, 64, 88, 87, 68, 64, 24, 45000, 100, 4, 4),
    Player(24, "Neymar Jr",          "Brazil",      "Paris Saint-Germain", "LW",  92, 90, 84, 85, 96, 28, 59, 25, 123000,600, 5, 5),
    Player(25, "Thiago Silva",       "Brazil",      "Paris Saint-Germain", "CB",  87, 61, 42, 74, 57, 88, 82, 32, 25000, 120, 3, 1),

    # ── MANCHESTER CITY ───────────────────────────────────────────────────────
    Player(26, "Kevin De Bruyne",    "Belgium",     "Manchester City",     "CAM", 92, 76, 82, 93, 86, 64, 78, 26, 100000,200, 4, 4),
    Player(27, "Leroy Sane",         "Germany",     "Manchester City",     "LW",  83, 95, 76, 78, 85, 30, 65, 21, 55000, 100, 3, 4),
    Player(28, "Raheem Sterling",    "England",     "Manchester City",     "LW",  83, 92, 74, 77, 84, 43, 70, 22, 55000, 100, 3, 4),
    Player(29, "Sergio Aguero",      "Argentina",   "Manchester City",     "ST",  89, 80, 88, 78, 86, 29, 73, 29, 65000, 160, 4, 4),
    Player(30, "Ederson",            "Brazil",      "Manchester City",     "GK",  84, 50, 14, 51, 51, 13, 74, 24, 35000, 70,  3, 1),
    Player(31, "David Silva",        "Spain",       "Manchester City",     "CAM", 90, 74, 74, 93, 89, 56, 62, 31, 30000, 130, 4, 4),
    Player(32, "Vincent Kompany",    "Belgium",     "Manchester City",     "CB",  84, 68, 48, 67, 52, 84, 84, 31, 20000, 100, 3, 1),
    Player(33, "Nicolas Otamendi",   "Argentina",   "Manchester City",     "CB",  82, 61, 38, 57, 50, 83, 82, 29, 15000, 70,  3, 1),

    # ── CHELSEA ───────────────────────────────────────────────────────────────
    Player(34, "Eden Hazard",        "Belgium",     "Chelsea",             "LW",  91, 84, 83, 87, 94, 33, 78, 26, 90000, 280, 4, 4),
    Player(35, "N'Golo Kante",       "France",      "Chelsea",             "CDM", 89, 76, 56, 77, 78, 90, 83, 26, 65000, 100, 3, 2),
    Player(36, "Thibaut Courtois",   "Belgium",     "Chelsea",             "GK",  89, 53, 12, 52, 55, 12, 83, 25, 60000, 140, 3, 1),
    Player(37, "Willian",            "Brazil",      "Chelsea",             "RW",  83, 83, 75, 78, 84, 35, 67, 29, 30000, 80,  3, 4),
    Player(38, "Alvaro Morata",      "Spain",       "Chelsea",             "ST",  83, 79, 82, 70, 74, 39, 78, 24, 45000, 100, 3, 2),

    # ── ATLETICO MADRID ───────────────────────────────────────────────────────
    Player(39, "Antoine Griezmann",  "France",      "Atletico Madrid",     "ST",  92, 88, 88, 84, 87, 58, 76, 26, 100000,210, 4, 4),
    Player(40, "Jan Oblak",          "Slovenia",    "Atletico Madrid",     "GK",  91, 48, 12, 46, 52, 10, 80, 24, 55000, 100, 3, 1),
    Player(41, "Diego Costa",        "Spain",       "Atletico Madrid",     "ST",  86, 81, 85, 69, 78, 55, 90, 28, 45000, 120, 4, 2),
    Player(42, "Koke",               "Spain",       "Atletico Madrid",     "CAM", 84, 72, 73, 88, 80, 68, 70, 26, 30000, 80,  3, 3),

    # ── JUVENTUS ──────────────────────────────────────────────────────────────
    Player(43, "Paulo Dybala",       "Argentina",   "Juventus",            "CAM", 89, 82, 86, 85, 91, 33, 69, 23, 90000, 120, 4, 4),
    Player(44, "Gianluigi Buffon",   "Italy",       "Juventus",            "GK",  90, 48, 12, 49, 52, 14, 78, 39, 15000, 120, 3, 1),
    Player(45, "Giorgio Chiellini",  "Italy",       "Juventus",            "CB",  90, 66, 50, 66, 55, 91, 84, 33, 30000, 100, 3, 1),
    Player(46, "Miralem Pjanic",     "Bosnia",      "Juventus",            "CM",  87, 62, 78, 90, 82, 57, 70, 27, 50000, 100, 3, 3),
    Player(47, "Gonzalo Higuain",    "Argentina",   "Juventus",            "ST",  88, 79, 89, 77, 80, 30, 75, 29, 45000, 140, 3, 2),

    # ── BAYERN MUNICH ─────────────────────────────────────────────────────────
    Player(48, "Robert Lewandowski", "Poland",      "Bayern Munich",       "ST",  92, 79, 91, 78, 85, 44, 82, 29, 80000, 270, 3, 4),
    Player(49, "Manuel Neuer",       "Germany",     "Bayern Munich",       "GK",  92, 54, 13, 53, 48, 14, 87, 31, 55000, 220, 3, 1),
    Player(50, "Thomas Muller",      "Germany",     "Bayern Munich",       "CAM", 88, 68, 82, 85, 75, 57, 72, 27, 60000, 150, 3, 2),
    Player(51, "Arjen Robben",       "Netherlands", "Bayern Munich",       "RW",  87, 86, 82, 82, 88, 37, 72, 33, 30000, 150, 3, 4),
    Player(52, "Franck Ribery",      "France",      "Bayern Munich",       "LW",  85, 84, 74, 85, 89, 35, 72, 34, 15000, 120, 4, 5),
    Player(53, "Jerome Boateng",     "Germany",     "Bayern Munich",       "CB",  87, 71, 44, 71, 55, 87, 80, 29, 40000, 100, 3, 1),
    Player(54, "David Alaba",        "Austria",     "Bayern Munich",       "LB",  84, 78, 59, 80, 79, 78, 68, 25, 40000, 100, 4, 3),

    # ── LIVERPOOL ─────────────────────────────────────────────────────────────
    Player(55, "Mohamed Salah",      "Egypt",       "Liverpool",           "RW",  88, 94, 85, 80, 89, 45, 75, 25, 75000, 130, 3, 4),
    Player(56, "Roberto Firmino",    "Brazil",      "Liverpool",           "ST",  86, 77, 80, 84, 87, 62, 78, 26, 50000, 100, 3, 3),
    Player(57, "Sadio Mane",         "Senegal",     "Liverpool",           "LW",  86, 93, 79, 76, 88, 44, 76, 25, 60000, 100, 4, 4),
    Player(58, "Philippe Coutinho",  "Brazil",      "Liverpool",           "CAM", 88, 77, 80, 88, 88, 55, 64, 25, 80000, 130, 4, 4),
    Player(59, "Jordan Henderson",   "England",     "Liverpool",           "CM",  80, 69, 65, 78, 72, 73, 82, 27, 20000, 60,  3, 2),
    Player(60, "Virgil van Dijk",    "Netherlands", "Liverpool",           "CB",  88, 72, 55, 71, 62, 90, 86, 26, 60000, 130, 3, 1),
    Player(61, "Alisson",            "Brazil",      "Liverpool",           "GK",  88, 55, 13, 51, 55, 13, 79, 25, 55000, 120, 3, 1),

    # ── MANCHESTER UNITED ─────────────────────────────────────────────────────
    Player(62, "Paul Pogba",         "France",      "Manchester United",   "CM",  84, 72, 74, 83, 86, 72, 86, 24, 90000, 290, 4, 4),
    Player(63, "David De Gea",       "Spain",       "Manchester United",   "GK",  91, 51, 13, 50, 58, 11, 73, 26, 65000, 200, 3, 1),
    Player(64, "Romelu Lukaku",      "Belgium",     "Manchester United",   "ST",  85, 83, 83, 68, 77, 35, 86, 24, 65000, 130, 3, 3),
    Player(65, "Marcus Rashford",    "England",     "Manchester United",   "ST",  81, 90, 74, 73, 82, 42, 74, 19, 30000, 40,  3, 3),
    Player(66, "Antonio Valencia",   "Ecuador",     "Manchester United",   "RB",  82, 85, 56, 69, 66, 77, 82, 32, 15000, 60,  3, 2),
    Player(67, "Victor Lindelof",    "Sweden",      "Manchester United",   "CB",  81, 68, 42, 65, 53, 81, 76, 23, 30000, 60,  3, 1),

    # ── ARSENAL ───────────────────────────────────────────────────────────────
    Player(68, "Alexis Sanchez",     "Chile",       "Arsenal",             "LW",  89, 87, 85, 82, 88, 55, 79, 28, 55000, 300, 4, 4),
    Player(69, "Mesut Ozil",         "Germany",     "Arsenal",             "CAM", 88, 72, 73, 93, 89, 36, 59, 29, 45000, 350, 4, 4),
    Player(70, "Hector Bellerin",    "Spain",       "Arsenal",             "RB",  81, 89, 56, 73, 75, 72, 72, 22, 30000, 40,  3, 3),
    Player(71, "Laurent Koscielny",  "France",      "Arsenal",             "CB",  84, 68, 42, 66, 54, 86, 76, 32, 20000, 80,  3, 1),
    Player(72, "Petr Cech",          "Czech Republic","Arsenal",           "GK",  83, 45, 12, 43, 40, 12, 80, 35, 10000, 80,  3, 1),

    # ── TOTTENHAM HOTSPUR ─────────────────────────────────────────────────────
    Player(73, "Harry Kane",         "England",     "Tottenham Hotspur",   "ST",  89, 76, 90, 77, 80, 47, 83, 24, 80000, 100, 3, 2),
    Player(74, "Dele Alli",          "England",     "Tottenham Hotspur",   "CAM", 85, 78, 77, 79, 85, 59, 76, 21, 55000, 60,  3, 3),
    Player(75, "Christian Eriksen",  "Denmark",     "Tottenham Hotspur",   "CAM", 87, 72, 80, 90, 82, 61, 66, 25, 60000, 60,  3, 3),
    Player(76, "Hugo Lloris",        "France",      "Tottenham Hotspur",   "GK",  88, 52, 12, 50, 54, 12, 80, 31, 35000, 100, 3, 1),
    Player(77, "Toby Alderweireld",  "Belgium",     "Tottenham Hotspur",   "CB",  87, 62, 42, 72, 58, 87, 80, 28, 35000, 80,  3, 1),

    # ── BORUSSIA DORTMUND ─────────────────────────────────────────────────────
    Player(78, "Pierre-Emerick Aubameyang","Gabon", "Borussia Dortmund",   "ST",  87, 96, 84, 70, 84, 30, 73, 28, 60000, 110, 3, 3),
    Player(79, "Christian Pulisic",  "USA",         "Borussia Dortmund",   "LW",  79, 85, 68, 76, 84, 52, 63, 19, 30000, 20,  4, 4),
    Player(80, "Marco Reus",         "Germany",     "Borussia Dortmund",   "CAM", 87, 85, 82, 87, 90, 43, 68, 28, 40000, 100, 3, 4),
    Player(81, "Roman Burki",        "Switzerland", "Borussia Dortmund",   "GK",  82, 50, 12, 44, 48, 12, 74, 27, 15000, 40,  3, 1),

    # ── INTER MILAN ───────────────────────────────────────────────────────────
    Player(82, "Mauro Icardi",       "Argentina",   "Inter Milan",         "ST",  85, 75, 86, 65, 79, 32, 78, 24, 45000, 80,  4, 2),
    Player(83, "Ivan Perisic",       "Croatia",     "Inter Milan",         "LW",  83, 80, 77, 78, 76, 55, 77, 28, 20000, 60,  3, 3),
    Player(84, "Samir Handanovic",   "Slovenia",    "Inter Milan",         "GK",  86, 49, 12, 46, 48, 12, 78, 33, 15000, 80,  3, 1),

    # ── AC MILAN ──────────────────────────────────────────────────────────────
    Player(85, "Gianluigi Donnarumma","Italy",      "AC Milan",            "GK",  82, 52, 12, 43, 48, 12, 77, 18, 60000, 40,  3, 1),
    Player(86, "Franck Kessie",      "Ivory Coast", "AC Milan",            "CM",  82, 73, 68, 72, 71, 78, 86, 21, 25000, 40,  3, 2),
    Player(87, "Suso",               "Spain",       "AC Milan",            "RW",  81, 75, 72, 76, 79, 42, 64, 24, 20000, 40,  3, 3),

    # ── ICONS ─────────────────────────────────────────────────────────────────
    Player(101, "Ronaldo Nazario",   "Brazil",      "Icons",               "ST",  98, 92, 94, 88, 93, 44, 82, 99, 0, 0, 4, 5, True),
    Player(102, "Zinedine Zidane",   "France",      "Icons",               "CAM", 96, 74, 85, 94, 95, 60, 74, 99, 0, 0, 4, 5, True),
    Player(103, "Ronaldinho",        "Brazil",      "Icons",               "CAM", 95, 85, 85, 88, 97, 44, 72, 99, 0, 0, 5, 5, True),
    Player(104, "Thierry Henry",     "France",      "Icons",               "ST",  95, 94, 90, 82, 91, 38, 78, 99, 0, 0, 4, 4, True),
    Player(105, "Pele",              "Brazil",      "Icons",               "ST",  98, 89, 96, 92, 95, 52, 80, 99, 0, 0, 4, 5, True),
    Player(106, "Diego Maradona",    "Argentina",   "Icons",               "CAM", 97, 87, 86, 92, 97, 50, 65, 99, 0, 0, 4, 5, True),
    Player(107, "Rio Ferdinand",     "England",     "Icons",               "CB",  91, 73, 46, 72, 55, 90, 78, 99, 0, 0, 3, 1, True),
    Player(108, "Roberto Carlos",    "Brazil",      "Icons",               "LB",  92, 90, 72, 82, 85, 73, 75, 99, 0, 0, 3, 4, True),
    Player(109, "Cafu",              "Brazil",      "Icons",               "RB",  92, 91, 68, 80, 79, 80, 82, 99, 0, 0, 3, 2, True),
    Player(110, "Patrick Vieira",    "France",      "Icons",               "CM",  91, 73, 72, 85, 79, 86, 88, 99, 0, 0, 3, 2, True),
    Player(111, "Paolo Maldini",     "Italy",       "Icons",               "CB",  94, 78, 55, 80, 65, 94, 82, 99, 0, 0, 3, 1, True),
    Player(112, "Didier Drogba",     "Ivory Coast", "Icons",               "ST",  91, 85, 88, 77, 74, 52, 90, 99, 0, 0, 3, 3, True),
]

# Quick lookup helpers
PLAYER_BY_ID = {p.id: p for p in PLAYERS}

PLAYERS_BY_CLUB: dict = {}
for _p in PLAYERS:
    PLAYERS_BY_CLUB.setdefault(_p.club, []).append(_p)

FORMATIONS = {
    "4-3-3":   ["GK", "RB", "CB", "CB", "LB", "CM", "CM", "CM", "RW", "LW", "ST"],
    "4-2-3-1": ["GK", "RB", "CB", "CB", "LB", "CDM", "CDM", "CAM", "RW", "LW", "ST"],
    "4-4-2":   ["GK", "RB", "CB", "CB", "LB", "CM", "CM", "CM", "CM", "ST", "ST"],
}
