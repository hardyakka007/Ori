"""Ligue 1 player rosters — IDs 800–999."""

from . import Player

LIGUE1_PLAYERS = [

    # ── PARIS SAINT-GERMAIN ───────────────────────────────────────────────────
    Player(800, "Neymar Jr",        "Brazil",     "Paris Saint-Germain","LW", 92, 90, 84, 85, 96, 28, 59, 25,123000, 600, 5, 5, face_skin=4, face_hair="black",   face_style="long",   face_beard="clean"),
    Player(801, "Kylian Mbappe",    "France",     "Paris Saint-Germain","ST", 87, 96, 81, 80, 92, 36, 76, 18, 95000, 100, 4, 4, face_skin=5, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(802, "Edinson Cavani",   "Uruguay",    "Paris Saint-Germain","ST", 87, 83, 87, 74, 80, 45, 82, 30, 40000, 150, 3, 2, face_skin=2, face_hair="black",   face_style="short",  face_beard="beard"),
    Player(803, "Marco Verratti",   "Italy",      "Paris Saint-Germain","CM", 86, 71, 64, 88, 87, 68, 64, 24, 45000, 100, 4, 4, face_skin=2, face_hair="black",   face_style="short",  face_beard="stubble"),
    Player(804, "Thiago Silva",     "Brazil",     "Paris Saint-Germain","CB", 87, 61, 42, 74, 57, 88, 82, 32, 25000, 120, 3, 1, face_skin=4, face_hair="black",   face_style="short",  face_beard="beard"),
    Player(805, "Alphonse Areola",  "France",     "Paris Saint-Germain","GK", 82, 50, 12, 45, 48, 12, 78, 24, 12000,  60, 3, 1, face_skin=5, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(806, "Angel Di Maria",   "Argentina",  "Paris Saint-Germain","RW", 88, 90, 82, 85, 90, 42, 68, 29, 40000, 180, 4, 4, face_skin=3, face_hair="black",   face_style="long",   face_beard="clean"),
    Player(807, "Julian Draxler",   "Germany",    "Paris Saint-Germain","LW", 82, 82, 75, 81, 82, 52, 69, 23, 30000,  80, 3, 3, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),

    # ── MONACO ───────────────────────────────────────────────────────────────
    Player(808, "Radamel Falcao",   "Colombia",   "Monaco",           "ST",  84, 76, 86, 78, 82, 48, 78, 31, 20000, 120, 3, 3, face_skin=4, face_hair="black",   face_style="short",  face_beard="stubble"),
    Player(809, "Thomas Lemar",     "France",     "Monaco",           "LW",  83, 83, 76, 82, 84, 54, 66, 21, 30000,  80, 3, 4, face_skin=5, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(810, "Bernardo Silva",   "Portugal",   "Monaco",           "CAM", 84, 78, 75, 86, 85, 55, 64, 22, 35000,  80, 4, 4, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(811, "Fabinho",          "Brazil",     "Monaco",           "CDM", 82, 74, 62, 76, 70, 82, 78, 23, 20000,  60, 3, 2, face_skin=4, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(812, "Danijel Subasic",  "Croatia",    "Monaco",           "GK",  81, 48, 11, 44, 46, 11, 78, 32, 10000,  55, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(813, "Kamil Glik",       "Poland",     "Monaco",           "CB",  81, 62, 42, 63, 55, 84, 84, 29, 10000,  55, 3, 1, face_skin=2, face_hair="blonde",  face_style="short",  face_beard="stubble"),
    Player(814, "Benjamin Mendy",   "France",     "Monaco",           "LB",  82, 84, 48, 74, 79, 73, 74, 22, 25000,  60, 3, 3, face_skin=5, face_hair="black",   face_style="short",  face_beard="clean"),

    # ── OLYMPIQUE LYON ───────────────────────────────────────────────────────
    Player(815, "Nabil Fekir",      "France",     "Olympique Lyon",   "CAM", 84, 82, 80, 84, 86, 55, 70, 24, 35000,  80, 4, 4, face_skin=4, face_hair="black",   face_style="short",  face_beard="stubble"),
    Player(816, "Memphis Depay",    "Netherlands","Olympique Lyon",   "LW",  82, 88, 78, 80, 84, 44, 70, 23, 25000,  80, 4, 4, face_skin=5, face_hair="black",   face_style="mohawk", face_beard="clean"),
    Player(817, "Mariano Diaz",     "Dom. Republic","Olympique Lyon", "ST",  78, 83, 74, 68, 70, 50, 75, 24, 15000,  50, 3, 3, face_skin=4, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(818, "Anthony Lopes",    "Portugal",   "Olympique Lyon",   "GK",  82, 49, 12, 45, 47, 12, 80, 26, 12000,  55, 3, 1, face_skin=3, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(819, "Corentin Tolisso", "France",     "Olympique Lyon",   "CM",  81, 76, 71, 80, 78, 72, 80, 22, 20000,  55, 3, 3, face_skin=4, face_hair="black",   face_style="short",  face_beard="clean"),

    # ── OLYMPIQUE MARSEILLE ──────────────────────────────────────────────────
    Player(820, "Dimitri Payet",    "France",     "Olympique Marseille","CAM",83,74,78,86,82,56,68,30,20000,90,4,4, face_skin=4, face_hair="black",   face_style="short",  face_beard="stubble"),
    Player(821, "Florian Thauvin",  "France",     "Olympique Marseille","RW", 82,83,76,78,82,52,68,24,20000,70,3,4, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(822, "Steve Mandanda",   "France",     "Olympique Marseille","GK", 81,49,11,45,47,11,78,32, 8000,60,3,1, face_skin=5, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(823, "Luiz Gustavo",     "Brazil",     "Olympique Marseille","CDM",81,72,60,76,70,80,78,30,12000,60,3,2, face_skin=4, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(824, "Adil Rami",        "France",     "Olympique Marseille","CB", 79,62,40,62,54,80,80,31, 8000,50,3,1, face_skin=4, face_hair="black",   face_style="short",  face_beard="beard"),

    # ── LILLE OSC ────────────────────────────────────────────────────────────
    Player(825, "Nicolas Pepe",     "Ivory Coast","Lille OSC",        "RW",  80, 86, 74, 76, 80, 46, 67, 21, 20000,  45, 3, 4, face_skin=5, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(826, "Jonathan Bamba",   "France",     "Lille OSC",        "LW",  76, 84, 68, 72, 75, 50, 68, 22,  8000,  30, 3, 3, face_skin=5, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(827, "Mike Maignan",     "France",     "Lille OSC",        "GK",  79, 48, 11, 44, 46, 11, 77, 22, 10000,  40, 3, 1, face_skin=5, face_hair="black",   face_style="short",  face_beard="clean"),

    # ── SAINT-ETIENNE ────────────────────────────────────────────────────────
    Player(828, "Wahbi Khazri",     "Tunisia",    "Saint-Etienne",    "CAM", 76, 76, 71, 78, 76, 56, 67, 26,  8000,  35, 3, 3, face_skin=4, face_hair="black",   face_style="short",  face_beard="stubble"),
    Player(829, "Stephane Ruffier", "France",     "Saint-Etienne",    "GK",  80, 48, 11, 44, 46, 11, 78, 30,  8000,  40, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(830, "Robert Beric",     "Slovenia",   "Saint-Etienne",    "ST",  74, 76, 69, 63, 65, 52, 76, 25,  5000,  25, 3, 2, face_skin=2, face_hair="black",   face_style="short",  face_beard="clean"),

    # ── GIRONDINS BORDEAUX ───────────────────────────────────────────────────
    Player(831, "Malcom",           "Brazil",     "Girondins Bordeaux","RW", 81, 86, 73, 77, 82, 46, 66, 20, 20000,  50, 4, 4, face_skin=5, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(832, "Benoit Costil",    "France",     "Girondins Bordeaux","GK", 80, 48, 11, 44, 46, 11, 78, 30,  8000,  40, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(833, "Francois Kamano",  "Guinea",     "Girondins Bordeaux","LW", 76, 84, 68, 71, 73, 50, 66, 21,  6000,  30, 3, 3, face_skin=5, face_hair="black",   face_style="short",  face_beard="clean"),

    # ── NANTES ───────────────────────────────────────────────────────────────
    Player(834, "Emiliano Sala",    "Argentina",  "Nantes",           "ST",  76, 75, 71, 66, 68, 55, 78, 27,  8000,  35, 3, 2, face_skin=3, face_hair="brown",   face_style="short",  face_beard="beard"),
    Player(835, "Maxime Dupé",      "France",     "Nantes",           "GK",  74, 46, 10, 42, 44, 10, 73, 23,  4000,  25, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),

    # ── NICE ─────────────────────────────────────────────────────────────────
    Player(836, "Mario Balotelli",  "Italy",      "Nice",             "ST",  79, 74, 77, 67, 72, 52, 82, 27, 10000,  60, 3, 2, face_skin=5, face_hair="black",   face_style="mohawk", face_beard="clean"),
    Player(837, "Walter Benitez",   "Argentina",  "Nice",             "GK",  76, 47, 10, 43, 45, 10, 75, 25,  5000,  30, 3, 1, face_skin=3, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(838, "Alassane Plea",    "France",     "Nice",             "ST",  77, 82, 72, 72, 75, 50, 70, 25,  8000,  40, 3, 3, face_skin=5, face_hair="black",   face_style="short",  face_beard="clean"),

    # ── STADE RENNAIS ────────────────────────────────────────────────────────
    Player(839, "Ousmane Dembele",  "France",     "Stade Rennais",    "RW",  74, 82, 65, 72, 76, 46, 64, 18,  6000,  20, 3, 4, face_skin=5, face_hair="black",   face_style="afro",   face_beard="clean"),
    Player(840, "Romain Salin",     "France",     "Stade Rennais",    "GK",  73, 45, 10, 41, 43, 10, 73, 31,  3000,  20, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),

    # ── MONTPELLIER ──────────────────────────────────────────────────────────
    Player(841, "Andy Delort",      "Algeria",    "Montpellier",      "ST",  74, 78, 69, 65, 67, 56, 76, 25,  5000,  25, 3, 2, face_skin=4, face_hair="black",   face_style="short",  face_beard="beard"),
    Player(842, "Benjamin Lecomte", "France",     "Montpellier",      "GK",  77, 47, 11, 43, 45, 11, 76, 26,  6000,  30, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),

    # ── GUINGAMP ─────────────────────────────────────────────────────────────
    Player(843, "Marcus Thuram",    "France",     "Guingamp",         "ST",  73, 82, 66, 64, 66, 50, 76, 20,  5000,  20, 3, 2, face_skin=5, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(844, "Karl-Johan Johnsson","Sweden",   "Guingamp",         "GK",  73, 45, 10, 41, 43, 10, 72, 26,  3000,  20, 3, 1, face_skin=2, face_hair="blonde",  face_style="short",  face_beard="clean"),

    # ── ANGERS SCO ───────────────────────────────────────────────────────────
    Player(845, "Cheikh Ndoye",     "Senegal",    "Angers SCO",       "CM",  73, 71, 60, 68, 66, 72, 78, 29,  3000,  20, 3, 2, face_skin=5, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(846, "Alexandre Letellier","France",   "Angers SCO",       "GK",  72, 45, 10, 41, 43, 10, 72, 30,  2000,  15, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),

    # ── TOULOUSE FC ──────────────────────────────────────────────────────────
    Player(847, "Andy Само",        "DR Congo",   "Toulouse FC",      "ST",  71, 74, 64, 62, 64, 50, 72, 24,  3000,  20, 3, 2, face_skin=5, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(848, "Alban Lafont",     "France",     "Toulouse FC",      "GK",  75, 46, 10, 42, 44, 10, 74, 18,  6000,  25, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),

    # ── METZ ─────────────────────────────────────────────────────────────────
    Player(849, "Habib Diallo",     "Senegal",    "Metz",             "ST",  72, 76, 66, 62, 63, 52, 75, 22,  4000,  20, 3, 2, face_skin=5, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(850, "Eiji Kawashima",   "Japan",      "Metz",             "GK",  74, 46, 10, 42, 44, 10, 73, 34,  2000,  20, 3, 1, face_skin=2, face_hair="black",   face_style="short",  face_beard="clean"),

    # ── STRASBOURG ───────────────────────────────────────────────────────────
    Player(851, "Nuno Da Costa",    "France",     "Strasbourg",       "ST",  72, 80, 65, 64, 65, 50, 70, 27,  3000,  20, 3, 3, face_skin=5, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(852, "Matz Sels",        "Belgium",    "Strasbourg",       "GK",  74, 46, 10, 42, 44, 10, 73, 25,  4000,  25, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),

    # ── DIJON FCO ────────────────────────────────────────────────────────────
    Player(853, "Julio Tavares",    "Cape Verde", "Dijon FCO",        "ST",  71, 74, 64, 62, 63, 50, 70, 28,  3000,  15, 3, 2, face_skin=5, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(854, "Baptiste Reynet",  "France",     "Dijon FCO",        "GK",  72, 45, 10, 41, 43, 10, 72, 29,  2000,  15, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),

    # ── AMIENS SC ────────────────────────────────────────────────────────────
    Player(855, "Brayann Pereira",  "France",     "Amiens SC",        "ST",  70, 74, 63, 61, 62, 50, 70, 21,  2000,  15, 3, 2, face_skin=5, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(856, "Regis Gurtner",    "France",     "Amiens SC",        "GK",  72, 45, 10, 41, 43, 10, 72, 27,  2000,  15, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),

    # ── CAEN ─────────────────────────────────────────────────────────────────
    Player(857, "Ivan Santini",     "Croatia",    "Caen",             "ST",  72, 72, 67, 62, 63, 52, 74, 28,  3000,  20, 3, 2, face_skin=2, face_hair="black",   face_style="short",  face_beard="stubble"),
    Player(858, "Remy Vercoutre",   "France",     "Caen",             "GK",  73, 45, 10, 41, 43, 10, 73, 36,  2000,  15, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),

    # ── TROYES AC ────────────────────────────────────────────────────────────
    Player(859, "Khalid Boutaib",   "Morocco",    "Troyes AC",        "ST",  71, 74, 64, 61, 62, 52, 72, 29,  2000,  15, 3, 2, face_skin=4, face_hair="black",   face_style="short",  face_beard="beard"),
    Player(860, "Mamadou Samassa",  "Mali",       "Troyes AC",        "GK",  71, 45, 10, 41, 43, 10, 71, 28,  2000,  15, 3, 1, face_skin=5, face_hair="black",   face_style="short",  face_beard="clean"),
]
