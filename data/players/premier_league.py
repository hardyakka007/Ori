"""Premier League player rosters — IDs 1–199."""

from . import Player

PL_PLAYERS = [

    # ── MANCHESTER CITY ──────────────────────────────────────────────────────
    Player(1,  "Kevin De Bruyne",  "Belgium",     "Manchester City",  "CAM", 92, 76, 82, 93, 86, 64, 78, 26, 100000, 200, 4, 4, face_skin=2, face_hair="blonde",  face_style="short",  face_beard="stubble"),
    Player(2,  "Sergio Aguero",    "Argentina",   "Manchester City",  "ST",  89, 80, 88, 78, 86, 29, 73, 29,  65000, 160, 4, 4, face_skin=3, face_hair="black",   face_style="short",  face_beard="stubble"),
    Player(3,  "David Silva",      "Spain",       "Manchester City",  "CAM", 90, 74, 74, 93, 89, 56, 62, 31,  30000, 130, 4, 4, face_skin=2, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(4,  "Leroy Sane",       "Germany",     "Manchester City",  "LW",  83, 95, 76, 78, 85, 30, 65, 21,  55000, 100, 3, 4, face_skin=5, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(5,  "Raheem Sterling",  "England",     "Manchester City",  "LW",  83, 92, 74, 77, 84, 43, 70, 22,  55000, 100, 3, 4, face_skin=5, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(6,  "Ederson",          "Brazil",      "Manchester City",  "GK",  84, 50, 14, 51, 51, 13, 74, 24,  35000,  70, 3, 1, face_skin=3, face_hair="black",   face_style="short",  face_beard="beard"),
    Player(7,  "Vincent Kompany",  "Belgium",     "Manchester City",  "CB",  84, 68, 48, 67, 52, 84, 84, 31,  20000, 100, 3, 1, face_skin=5, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(8,  "Nicolas Otamendi", "Argentina",   "Manchester City",  "CB",  82, 61, 38, 57, 50, 83, 82, 29,  15000,  70, 3, 1, face_skin=2, face_hair="black",   face_style="short",  face_beard="beard"),
    Player(9,  "Benjamin Mendy",   "France",      "Manchester City",  "LB",  83, 84, 48, 74, 79, 73, 74, 23,  42000,  90, 3, 3, face_skin=5, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(10, "Kyle Walker",      "England",     "Manchester City",  "RB",  83, 90, 52, 70, 69, 75, 76, 27,  35000,  80, 3, 2, face_skin=2, face_hair="black",   face_style="shaved", face_beard="clean"),

    # ── MANCHESTER UNITED ────────────────────────────────────────────────────
    Player(11, "Paul Pogba",       "France",      "Manchester United","CM",  84, 72, 74, 83, 86, 72, 86, 24,  90000, 290, 4, 4, face_skin=5, face_hair="black",   face_style="mohawk", face_beard="clean"),
    Player(12, "David De Gea",     "Spain",       "Manchester United","GK",  91, 51, 13, 50, 58, 11, 73, 26,  65000, 200, 3, 1, face_skin=2, face_hair="black",   face_style="long",   face_beard="clean"),
    Player(13, "Romelu Lukaku",    "Belgium",     "Manchester United","ST",  85, 83, 83, 68, 77, 35, 86, 24,  65000, 130, 3, 3, face_skin=5, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(14, "Marcus Rashford",  "England",     "Manchester United","ST",  81, 90, 74, 73, 82, 42, 74, 19,  30000,  40, 3, 3, face_skin=5, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(15, "Antonio Valencia", "Ecuador",     "Manchester United","RB",  82, 85, 56, 69, 66, 77, 82, 32,  15000,  60, 3, 2, face_skin=4, face_hair="black",   face_style="shaved", face_beard="clean"),
    Player(16, "Victor Lindelof",  "Sweden",      "Manchester United","CB",  81, 68, 42, 65, 53, 81, 76, 23,  30000,  60, 3, 1, face_skin=1, face_hair="blonde",  face_style="short",  face_beard="clean"),
    Player(17, "Ander Herrera",    "Spain",       "Manchester United","CM",  81, 72, 61, 78, 78, 77, 77, 28,  20000,  60, 3, 2, face_skin=2, face_hair="black",   face_style="short",  face_beard="beard"),
    Player(18, "Juan Mata",        "Spain",       "Manchester United","CAM", 82, 64, 75, 88, 86, 46, 57, 30,  15000,  80, 4, 4, face_skin=2, face_hair="black",   face_style="long",   face_beard="stubble"),

    # ── LIVERPOOL ────────────────────────────────────────────────────────────
    Player(19, "Mohamed Salah",    "Egypt",       "Liverpool",        "RW",  88, 94, 85, 80, 89, 45, 75, 25,  75000, 130, 3, 4, face_skin=4, face_hair="black",   face_style="curly",  face_beard="beard"),
    Player(20, "Roberto Firmino",  "Brazil",      "Liverpool",        "ST",  86, 77, 80, 84, 87, 62, 78, 26,  50000, 100, 3, 3, face_skin=4, face_hair="blonde",  face_style="short",  face_beard="clean"),
    Player(21, "Sadio Mane",       "Senegal",     "Liverpool",        "LW",  86, 93, 79, 76, 88, 44, 76, 25,  60000, 100, 4, 4, face_skin=5, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(22, "Philippe Coutinho","Brazil",      "Liverpool",        "CAM", 88, 77, 80, 88, 88, 55, 64, 25,  80000, 130, 4, 4, face_skin=4, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(23, "Jordan Henderson", "England",     "Liverpool",        "CM",  80, 69, 65, 78, 72, 73, 82, 27,  20000,  60, 3, 2, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(24, "Virgil van Dijk",  "Netherlands", "Liverpool",        "CB",  88, 72, 55, 71, 62, 90, 86, 26,  60000, 130, 3, 1, face_skin=5, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(25, "Loris Karius",     "Germany",     "Liverpool",        "GK",  74, 48, 11, 44, 44, 10, 64, 24,   8000,  25, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(26, "James Milner",     "England",     "Liverpool",        "CM",  81, 73, 66, 79, 74, 72, 79, 32,  10000,  70, 3, 2, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),

    # ── CHELSEA ──────────────────────────────────────────────────────────────
    Player(27, "Eden Hazard",      "Belgium",     "Chelsea",          "LW",  91, 84, 83, 87, 94, 33, 78, 26,  90000, 280, 4, 4, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(28, "N'Golo Kante",     "France",      "Chelsea",          "CDM", 89, 76, 56, 77, 78, 90, 83, 26,  65000, 100, 3, 2, face_skin=5, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(29, "Thibaut Courtois", "Belgium",     "Chelsea",          "GK",  89, 53, 12, 52, 55, 12, 83, 25,  60000, 140, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(30, "Willian",          "Brazil",      "Chelsea",          "RW",  83, 83, 75, 78, 84, 35, 67, 29,  30000,  80, 3, 4, face_skin=4, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(31, "Alvaro Morata",    "Spain",       "Chelsea",          "ST",  83, 79, 82, 70, 74, 39, 78, 24,  45000, 100, 3, 2, face_skin=2, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(32, "Cesar Azpilicueta","Spain",       "Chelsea",          "RB",  84, 75, 55, 73, 71, 83, 78, 28,  25000,  70, 3, 1, face_skin=2, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(33, "Gary Cahill",      "England",     "Chelsea",          "CB",  81, 62, 42, 61, 52, 82, 82, 31,  10000,  70, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),

    # ── ARSENAL ──────────────────────────────────────────────────────────────
    Player(34, "Alexis Sanchez",   "Chile",       "Arsenal",          "LW",  89, 87, 85, 82, 88, 55, 79, 28,  55000, 300, 4, 4, face_skin=3, face_hair="black",   face_style="short",  face_beard="stubble"),
    Player(35, "Mesut Ozil",       "Germany",     "Arsenal",          "CAM", 88, 72, 73, 93, 89, 36, 59, 29,  45000, 350, 4, 4, face_skin=3, face_hair="black",   face_style="short",  face_beard="stubble"),
    Player(36, "Hector Bellerin",  "Spain",       "Arsenal",          "RB",  81, 89, 56, 73, 75, 72, 72, 22,  30000,  40, 3, 3, face_skin=2, face_hair="black",   face_style="long",   face_beard="beard"),
    Player(37, "Laurent Koscielny","France",      "Arsenal",          "CB",  84, 68, 42, 66, 54, 86, 76, 32,  20000,  80, 3, 1, face_skin=2, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(38, "Petr Cech",        "Czech Republic","Arsenal",        "GK",  83, 45, 12, 43, 40, 12, 80, 35,  10000,  80, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(39, "Aaron Ramsey",     "Wales",       "Arsenal",          "CM",  82, 74, 70, 80, 78, 68, 75, 27,  25000,  80, 3, 3, face_skin=2, face_hair="brown",   face_style="short",  face_beard="stubble"),
    Player(40, "Santi Cazorla",    "Spain",       "Arsenal",          "CM",  85, 67, 72, 90, 88, 55, 62, 33,  15000, 100, 4, 4, face_skin=2, face_hair="black",   face_style="short",  face_beard="clean"),

    # ── TOTTENHAM HOTSPUR ────────────────────────────────────────────────────
    Player(41, "Harry Kane",       "England",     "Tottenham Hotspur","ST",  89, 76, 90, 77, 80, 47, 83, 24,  80000, 100, 3, 2, face_skin=2, face_hair="brown",   face_style="short",  face_beard="stubble"),
    Player(42, "Dele Alli",        "England",     "Tottenham Hotspur","CAM", 85, 78, 77, 79, 85, 59, 76, 21,  55000,  60, 3, 3, face_skin=4, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(43, "Christian Eriksen","Denmark",     "Tottenham Hotspur","CAM", 87, 72, 80, 90, 82, 61, 66, 25,  60000,  60, 3, 3, face_skin=2, face_hair="blonde",  face_style="short",  face_beard="clean"),
    Player(44, "Hugo Lloris",      "France",      "Tottenham Hotspur","GK",  88, 52, 12, 50, 54, 12, 80, 31,  35000, 100, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(45, "Toby Alderweireld","Belgium",     "Tottenham Hotspur","CB",  87, 62, 42, 72, 58, 87, 80, 28,  35000,  80, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(46, "Son Heung-min",    "South Korea", "Tottenham Hotspur","LW",  86, 90, 83, 81, 88, 46, 71, 25,  50000,  80, 4, 4, face_skin=2, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(47, "Jan Vertonghen",   "Belgium",     "Tottenham Hotspur","CB",  85, 64, 42, 73, 57, 85, 78, 30,  20000,  80, 3, 1, face_skin=2, face_hair="black",   face_style="short",  face_beard="clean"),

    # ── LEICESTER CITY ───────────────────────────────────────────────────────
    Player(48, "Jamie Vardy",      "England",     "Leicester City",   "ST",  84, 94, 82, 71, 76, 44, 77, 31,  30000, 100, 3, 3, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(49, "Riyad Mahrez",     "Algeria",     "Leicester City",   "RW",  85, 82, 80, 78, 90, 36, 62, 26,  45000, 100, 4, 4, face_skin=4, face_hair="black",   face_style="afro",   face_beard="clean"),
    Player(50, "Kasper Schmeichel","Denmark",     "Leicester City",   "GK",  83, 52, 12, 47, 50, 12, 79, 31,  15000,  70, 3, 1, face_skin=2, face_hair="blonde",  face_style="short",  face_beard="clean"),
    Player(51, "Harry Maguire",    "England",     "Leicester City",   "CB",  80, 62, 38, 59, 55, 82, 85, 24,  15000,  50, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(52, "Wilfried Ndidi",   "Nigeria",     "Leicester City",   "CDM", 81, 73, 56, 71, 69, 86, 82, 20,  20000,  50, 3, 2, face_skin=5, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(53, "Marc Albrighton",  "England",     "Leicester City",   "RW",  75, 82, 69, 72, 74, 54, 71, 27,   8000,  40, 3, 2, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),

    # ── EVERTON ──────────────────────────────────────────────────────────────
    Player(54, "Wayne Rooney",     "England",     "Everton",          "ST",  80, 71, 79, 80, 80, 59, 81, 32,  10000, 220, 3, 3, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(55, "Gylfi Sigurdsson", "Iceland",     "Everton",          "CAM", 84, 72, 79, 86, 80, 59, 68, 27,  40000, 110, 4, 4, face_skin=2, face_hair="brown",   face_style="short",  face_beard="stubble"),
    Player(56, "Jordan Pickford",  "England",     "Everton",          "GK",  82, 50, 12, 47, 49, 12, 77, 23,  20000,  60, 3, 1, face_skin=2, face_hair="blonde",  face_style="short",  face_beard="clean"),
    Player(57, "Leighton Baines",  "England",     "Everton",          "LB",  79, 68, 55, 73, 73, 72, 67, 32,   8000,  60, 3, 3, face_skin=2, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(58, "Seamus Coleman",   "Ireland",     "Everton",          "RB",  81, 80, 55, 68, 65, 76, 78, 29,  10000,  60, 3, 2, face_skin=2, face_hair="black",   face_style="short",  face_beard="clean"),

    # ── BURNLEY ──────────────────────────────────────────────────────────────
    Player(59, "Ashley Barnes",    "Austria",     "Burnley",          "ST",  72, 73, 68, 58, 64, 62, 81, 27,   6000,  30, 3, 2, face_skin=2, face_hair="brown",   face_style="short",  face_beard="beard"),
    Player(60, "James Tarkowski",  "England",     "Burnley",          "CB",  78, 60, 35, 56, 52, 80, 82, 25,  10000,  30, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="stubble"),
    Player(61, "Tom Heaton",       "England",     "Burnley",          "GK",  79, 48, 11, 43, 44, 11, 76, 31,   6000,  30, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(62, "Robbie Brady",     "Ireland",     "Burnley",          "LW",  75, 78, 68, 72, 71, 55, 68, 25,   8000,  35, 3, 3, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(63, "Jack Cork",        "England",     "Burnley",          "CDM", 73, 64, 54, 68, 66, 75, 73, 28,   5000,  25, 3, 1, face_skin=2, face_hair="blonde",  face_style="short",  face_beard="clean"),

    # ── NEWCASTLE UNITED ─────────────────────────────────────────────────────
    Player(64, "Aleksandar Mitrovic","Serbia",    "Newcastle United", "ST",  76, 73, 74, 62, 68, 56, 84, 22,  10000,  50, 3, 2, face_skin=2, face_hair="brown",   face_style="short",  face_beard="beard"),
    Player(65, "Jonjo Shelvey",    "England",     "Newcastle United", "CM",  77, 67, 67, 79, 75, 64, 72, 25,  10000,  50, 3, 2, face_skin=2, face_hair="blonde",  face_style="shaved", face_beard="clean"),
    Player(66, "Rob Elliot",       "Ireland",     "Newcastle United", "GK",  74, 46, 10, 42, 43, 10, 74, 31,   5000,  25, 3, 1, face_skin=2, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(67, "Ciaran Clark",     "Ireland",     "Newcastle United", "CB",  75, 62, 37, 55, 51, 77, 80, 28,   5000,  25, 3, 1, face_skin=2, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(68, "Ayoze Perez",      "Spain",       "Newcastle United", "RW",  75, 75, 68, 72, 76, 44, 65, 24,  10000,  40, 3, 3, face_skin=2, face_hair="brown",   face_style="short",  face_beard="stubble"),

    # ── CRYSTAL PALACE ───────────────────────────────────────────────────────
    Player(69, "Wilfried Zaha",    "Ivory Coast", "Crystal Palace",   "LW",  81, 87, 72, 74, 86, 44, 72, 25,  30000,  60, 4, 4, face_skin=5, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(70, "Christian Benteke","Belgium",     "Crystal Palace",   "ST",  79, 73, 78, 60, 72, 46, 87, 26,  20000,  80, 3, 3, face_skin=5, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(71, "Wayne Hennessey",  "Wales",       "Crystal Palace",   "GK",  78, 46, 10, 42, 43, 11, 76, 30,   5000,  35, 3, 1, face_skin=2, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(72, "Andros Townsend",  "England",     "Crystal Palace",   "RW",  77, 83, 70, 69, 76, 46, 68, 26,  10000,  50, 3, 3, face_skin=4, face_hair="black",   face_style="short",  face_beard="clean"),

    # ── BOURNEMOUTH ──────────────────────────────────────────────────────────
    Player(73, "Joshua King",      "Norway",      "Bournemouth",      "ST",  77, 83, 74, 70, 74, 48, 72, 25,  15000,  50, 3, 3, face_skin=5, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(74, "Ryan Fraser",      "Scotland",    "Bournemouth",      "LW",  77, 83, 71, 74, 80, 46, 62, 23,  12000,  40, 4, 4, face_skin=2, face_hair="red",     face_style="short",  face_beard="clean"),
    Player(75, "Asmir Begovic",    "Bosnia",      "Bournemouth",      "GK",  79, 48, 11, 44, 47, 11, 77, 30,   8000,  50, 3, 1, face_skin=3, face_hair="black",   face_style="short",  face_beard="beard"),
    Player(76, "Steve Cook",       "England",     "Bournemouth",      "CB",  77, 60, 36, 54, 50, 79, 80, 26,   6000,  30, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),

    # ── WEST HAM UNITED ──────────────────────────────────────────────────────
    Player(77, "Marko Arnautovic", "Austria",     "West Ham United",  "LW",  81, 79, 75, 74, 78, 52, 77, 28,  25000,  80, 4, 3, face_skin=2, face_hair="black",   face_style="short",  face_beard="stubble"),
    Player(78, "Chicharito",       "Mexico",      "West Ham United",  "ST",  79, 81, 79, 69, 74, 39, 71, 29,  15000,  70, 3, 3, face_skin=3, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(79, "Joe Hart",         "England",     "West Ham United",  "GK",  78, 48, 11, 44, 47, 11, 77, 30,   8000,  50, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(80, "Mark Noble",       "England",     "West Ham United",  "CM",  76, 64, 60, 75, 71, 70, 74, 30,   8000,  45, 3, 2, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(81, "Andy Carroll",     "England",     "West Ham United",  "ST",  79, 72, 76, 60, 65, 50, 86, 29,  10000,  60, 3, 2, face_skin=2, face_hair="blonde",  face_style="long",   face_beard="stubble"),

    # ── WATFORD ──────────────────────────────────────────────────────────────
    Player(82, "Troy Deeney",      "England",     "Watford",          "ST",  77, 67, 74, 64, 66, 56, 82, 29,   8000,  50, 3, 2, face_skin=5, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(83, "Richarlison",      "Brazil",      "Watford",          "LW",  77, 85, 71, 72, 80, 44, 70, 20,  20000,  40, 3, 4, face_skin=4, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(84, "Andre Gray",       "England",     "Watford",          "ST",  76, 88, 71, 63, 70, 43, 72, 26,  12000,  50, 3, 3, face_skin=5, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(85, "Heurelho Gomes",   "Brazil",      "Watford",          "GK",  74, 47, 10, 41, 44, 11, 73, 36,   2000,  25, 3, 1, face_skin=4, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(86, "Etienne Capoue",   "France",      "Watford",          "CDM", 77, 73, 58, 72, 70, 77, 76, 29,  10000,  50, 3, 2, face_skin=5, face_hair="black",   face_style="short",  face_beard="clean"),

    # ── BRIGHTON ─────────────────────────────────────────────────────────────
    Player(87, "Glenn Murray",     "England",     "Brighton",         "ST",  73, 66, 70, 59, 62, 47, 79, 33,   4000,  25, 3, 2, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(88, "Pascal Gross",     "Germany",     "Brighton",         "CAM", 77, 68, 70, 79, 76, 60, 68, 26,  10000,  40, 3, 3, face_skin=2, face_hair="blonde",  face_style="short",  face_beard="clean"),
    Player(89, "Matthew Ryan",     "Australia",   "Brighton",         "GK",  79, 48, 11, 44, 46, 11, 76, 25,   8000,  40, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(90, "Lewis Dunk",       "England",     "Brighton",         "CB",  77, 60, 37, 54, 52, 79, 80, 26,   6000,  30, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),

    # ── HUDDERSFIELD TOWN ────────────────────────────────────────────────────
    Player(91, "Steve Mounie",     "Benin",       "Huddersfield Town","ST",  73, 76, 69, 58, 65, 50, 78, 23,   8000,  30, 3, 2, face_skin=5, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(92, "Aaron Mooy",       "Australia",   "Huddersfield Town","CM",  76, 66, 62, 77, 73, 65, 70, 27,  10000,  40, 3, 2, face_skin=2, face_hair="brown",   face_style="short",  face_beard="stubble"),
    Player(93, "Jonas Lossl",      "Denmark",     "Huddersfield Town","GK",  73, 46, 10, 42, 43, 10, 73, 28,   4000,  25, 3, 1, face_skin=2, face_hair="blonde",  face_style="short",  face_beard="clean"),

    # ── SOUTHAMPTON ──────────────────────────────────────────────────────────
    Player(94, "Dusan Tadic",      "Serbia",      "Southampton",      "CAM", 80, 74, 75, 84, 83, 52, 65, 29,  15000,  70, 4, 4, face_skin=2, face_hair="black",   face_style="short",  face_beard="stubble"),
    Player(95, "Fraser Forster",   "England",     "Southampton",      "GK",  81, 49, 11, 44, 47, 11, 80, 29,  10000,  50, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(96, "Charlie Austin",   "England",     "Southampton",      "ST",  74, 72, 70, 60, 63, 48, 77, 28,   6000,  35, 3, 2, face_skin=2, face_hair="brown",   face_style="short",  face_beard="beard"),
    Player(97, "Oriol Romeu",      "Spain",       "Southampton",      "CDM", 76, 68, 54, 71, 68, 78, 76, 25,   8000,  35, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),

    # ── SWANSEA CITY ─────────────────────────────────────────────────────────
    Player(98,  "Tammy Abraham",   "England",     "Swansea City",     "ST",  74, 82, 70, 65, 68, 44, 76, 19,  12000,  30, 3, 3, face_skin=5, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(99,  "Jordan Ayew",     "Ghana",       "Swansea City",     "LW",  76, 80, 70, 71, 76, 52, 72, 25,   8000,  40, 3, 3, face_skin=5, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(100, "Lukasz Fabianski","Poland",      "Swansea City",     "GK",  78, 47, 10, 43, 45, 11, 75, 32,   6000,  40, 3, 1, face_skin=2, face_hair="blonde",  face_style="short",  face_beard="clean"),

    # ── STOKE CITY ───────────────────────────────────────────────────────────
    Player(101, "Xherdan Shaqiri", "Switzerland", "Stoke City",       "RW",  82, 85, 78, 78, 83, 43, 74, 26,  25000,  70, 4, 4, face_skin=3, face_hair="black",   face_style="mohawk", face_beard="clean"),
    Player(102, "Jack Butland",    "England",     "Stoke City",       "GK",  82, 50, 11, 46, 48, 11, 80, 24,  15000,  60, 3, 1, face_skin=2, face_hair="blonde",  face_style="short",  face_beard="clean"),
    Player(103, "Peter Crouch",    "England",     "Stoke City",       "ST",  71, 62, 69, 61, 61, 47, 78, 36,   4000,  40, 3, 1, face_skin=2, face_hair="brown",   face_style="shaved", face_beard="clean"),
    Player(104, "Joe Allen",       "Wales",       "Stoke City",       "CM",  76, 66, 61, 77, 72, 66, 68, 27,   8000,  40, 3, 2, face_skin=2, face_hair="red",     face_style="short",  face_beard="clean"),

    # ── WEST BROM ────────────────────────────────────────────────────────────
    Player(105, "Salomon Rondon",  "Venezuela",   "West Brom",        "ST",  78, 73, 76, 62, 68, 52, 84, 28,  10000,  55, 3, 2, face_skin=5, face_hair="black",   face_style="short",  face_beard="beard"),
    Player(106, "Ben Foster",      "England",     "West Brom",        "GK",  78, 47, 10, 43, 45, 11, 77, 34,   6000,  40, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(107, "Jake Livermore",  "England",     "West Brom",        "CM",  74, 68, 57, 70, 69, 72, 74, 28,   5000,  30, 3, 2, face_skin=2, face_hair="brown",   face_style="shaved", face_beard="clean"),
    Player(108, "Jonny Evans",     "Northern Ireland","West Brom",    "CB",  76, 62, 37, 58, 52, 78, 75, 30,   5000,  40, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
]
