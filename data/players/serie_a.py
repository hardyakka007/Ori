"""Serie A player rosters — IDs 600–799."""

from . import Player

SERIEA_PLAYERS = [

    # ── JUVENTUS ─────────────────────────────────────────────────────────────
    Player(600, "Paulo Dybala",     "Argentina",  "Juventus",         "CAM", 89, 82, 86, 85, 91, 33, 69, 23, 90000, 120, 4, 4, face_skin=3, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(601, "Gianluigi Buffon", "Italy",      "Juventus",         "GK",  90, 48, 12, 49, 52, 14, 78, 39, 15000, 120, 3, 1, face_skin=2, face_hair="grey",    face_style="short",  face_beard="clean"),
    Player(602, "Giorgio Chiellini","Italy",      "Juventus",         "CB",  90, 66, 50, 66, 55, 91, 84, 33, 30000, 100, 3, 1, face_skin=2, face_hair="black",   face_style="shaved", face_beard="clean"),
    Player(603, "Miralem Pjanic",   "Bosnia",     "Juventus",         "CM",  87, 62, 78, 90, 82, 57, 70, 27, 50000, 100, 3, 3, face_skin=3, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(604, "Gonzalo Higuain",  "Argentina",  "Juventus",         "ST",  88, 79, 89, 77, 80, 30, 75, 29, 45000, 140, 3, 2, face_skin=3, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(605, "Mario Mandzukic",  "Croatia",    "Juventus",         "ST",  83, 72, 79, 66, 68, 57, 86, 31, 20000,  80, 3, 2, face_skin=2, face_hair="black",   face_style="short",  face_beard="stubble"),
    Player(606, "Sami Khedira",     "Germany",    "Juventus",         "CM",  83, 72, 68, 79, 76, 74, 79, 30, 20000,  80, 3, 2, face_skin=3, face_hair="black",   face_style="short",  face_beard="stubble"),
    Player(607, "Alex Sandro",      "Brazil",     "Juventus",         "LB",  84, 82, 60, 77, 79, 74, 72, 26, 30000,  80, 3, 3, face_skin=4, face_hair="black",   face_style="short",  face_beard="clean"),

    # ── NAPOLI ───────────────────────────────────────────────────────────────
    Player(608, "Lorenzo Insigne",  "Italy",      "Napoli",           "LW",  86, 82, 82, 84, 88, 53, 65, 26, 55000,  90, 4, 4, face_skin=2, face_hair="black",   face_style="short",  face_beard="stubble"),
    Player(609, "Dries Mertens",    "Belgium",    "Napoli",           "ST",  87, 82, 85, 83, 87, 47, 70, 30, 40000, 100, 3, 3, face_skin=2, face_hair="blonde",  face_style="short",  face_beard="clean"),
    Player(610, "Marek Hamsik",     "Slovakia",   "Napoli",           "CM",  84, 74, 76, 86, 78, 66, 74, 30, 25000,  80, 3, 3, face_skin=2, face_hair="black",   face_style="mohawk", face_beard="clean"),
    Player(611, "Jorginho",         "Italy",      "Napoli",           "CDM", 85, 58, 66, 88, 75, 76, 68, 25, 30000,  70, 3, 2, face_skin=3, face_hair="black",   face_style="short",  face_beard="stubble"),
    Player(612, "Kalidou Koulibaly","Senegal",    "Napoli",           "CB",  88, 72, 50, 67, 62, 90, 88, 26, 60000,  90, 3, 1, face_skin=5, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(613, "Jose Callejon",    "Spain",      "Napoli",           "RW",  82, 84, 75, 78, 79, 58, 68, 30, 15000,  65, 3, 3, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(614, "Allan",            "Brazil",     "Napoli",           "CDM", 82, 74, 62, 76, 70, 84, 80, 25, 20000,  60, 3, 2, face_skin=4, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(615, "Pepe Reina",       "Spain",      "Napoli",           "GK",  82, 50, 12, 46, 48, 12, 78, 34,  8000,  70, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),

    # ── ROMA ─────────────────────────────────────────────────────────────────
    Player(616, "Edin Dzeko",       "Bosnia",     "Roma",             "ST",  85, 74, 83, 76, 78, 52, 80, 31, 25000, 100, 3, 2, face_skin=3, face_hair="black",   face_style="short",  face_beard="beard"),
    Player(617, "Radja Nainggolan", "Belgium",    "Roma",             "CM",  85, 74, 76, 82, 79, 80, 82, 29, 25000,  90, 3, 3, face_skin=3, face_hair="black",   face_style="mohawk", face_beard="beard"),
    Player(618, "Alisson",          "Brazil",     "Roma",             "GK",  87, 55, 13, 51, 55, 13, 79, 25, 35000,  80, 3, 1, face_skin=3, face_hair="black",   face_style="short",  face_beard="beard"),
    Player(619, "Kevin Strootman",  "Netherlands","Roma",             "CM",  80, 70, 65, 79, 75, 72, 77, 27, 15000,  65, 3, 2, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(620, "Alessandro Florenzi","Italy",    "Roma",             "RB",  79, 80, 64, 75, 75, 71, 73, 26, 12000,  60, 3, 3, face_skin=2, face_hair="brown",   face_style="short",  face_beard="stubble"),
    Player(621, "Cengiz Under",     "Turkey",     "Roma",             "RW",  78, 83, 72, 75, 79, 46, 64, 20, 20000,  45, 3, 4, face_skin=3, face_hair="black",   face_style="short",  face_beard="clean"),

    # ── INTER MILAN ──────────────────────────────────────────────────────────
    Player(622, "Mauro Icardi",     "Argentina",  "Inter Milan",      "ST",  85, 75, 86, 65, 79, 32, 78, 24, 45000,  80, 4, 2, face_skin=3, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(623, "Ivan Perisic",     "Croatia",    "Inter Milan",      "LW",  83, 80, 77, 78, 76, 55, 77, 28, 20000,  60, 3, 3, face_skin=2, face_hair="black",   face_style="short",  face_beard="beard"),
    Player(624, "Samir Handanovic", "Slovenia",   "Inter Milan",      "GK",  86, 49, 12, 46, 48, 12, 78, 33, 15000,  80, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(625, "Milan Skriniar",   "Slovakia",   "Inter Milan",      "CB",  83, 72, 44, 63, 56, 86, 80, 22, 30000,  60, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(626, "Marcelo Brozovic", "Croatia",    "Inter Milan",      "CDM", 81, 72, 67, 80, 74, 72, 70, 25, 15000,  55, 3, 3, face_skin=2, face_hair="brown",   face_style="short",  face_beard="stubble"),

    # ── AC MILAN ─────────────────────────────────────────────────────────────
    Player(627, "Gianluigi Donnarumma","Italy",   "AC Milan",         "GK",  82, 52, 12, 43, 48, 12, 77, 18, 60000,  40, 3, 1, face_skin=2, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(628, "Franck Kessie",    "Ivory Coast","AC Milan",         "CM",  82, 73, 68, 72, 71, 78, 86, 21, 25000,  40, 3, 2, face_skin=5, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(629, "Suso",             "Spain",      "AC Milan",         "RW",  81, 75, 72, 76, 79, 42, 64, 24, 20000,  40, 3, 3, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(630, "Carlos Bacca",     "Colombia",   "AC Milan",         "ST",  78, 79, 76, 68, 72, 46, 72, 30, 10000,  60, 3, 3, face_skin=5, face_hair="black",   face_style="shaved", face_beard="clean"),
    Player(631, "Giacomo Bonaventura","Italy",    "AC Milan",         "CM",  80, 74, 72, 77, 76, 62, 70, 28, 12000,  50, 3, 3, face_skin=2, face_hair="brown",   face_style="short",  face_beard="stubble"),

    # ── LAZIO ────────────────────────────────────────────────────────────────
    Player(632, "Ciro Immobile",    "Italy",      "Lazio",            "ST",  86, 84, 85, 76, 80, 47, 75, 27, 40000,  90, 3, 3, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(633, "Sergej Milinkovic-Savic","Serbia","Lazio",           "CM",  84, 72, 76, 80, 78, 72, 84, 22, 50000,  70, 3, 3, face_skin=2, face_hair="brown",   face_style="long",   face_beard="stubble"),
    Player(634, "Felipe Anderson", "Brazil",      "Lazio",            "LW",  82, 84, 74, 78, 82, 48, 68, 24, 25000,  60, 3, 4, face_skin=4, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(635, "Thomas Strakosha", "Albania",    "Lazio",            "GK",  80, 48, 11, 44, 46, 11, 77, 22, 10000,  40, 3, 1, face_skin=3, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(636, "Stefan de Vrij",   "Netherlands","Lazio",            "CB",  84, 68, 46, 68, 60, 86, 76, 25, 30000,  70, 3, 1, face_skin=2, face_hair="blonde",  face_style="short",  face_beard="clean"),

    # ── ATALANTA ─────────────────────────────────────────────────────────────
    Player(637, "Alejandro Gomez",  "Argentina",  "Atalanta",         "CAM", 83, 80, 77, 84, 84, 56, 68, 29, 20000,  60, 4, 4, face_skin=3, face_hair="black",   face_style="short",  face_beard="beard"),
    Player(638, "Josip Ilicic",     "Slovenia",   "Atalanta",         "LW",  82, 76, 77, 81, 82, 52, 68, 29, 15000,  55, 3, 4, face_skin=2, face_hair="black",   face_style="short",  face_beard="stubble"),
    Player(639, "Marco Sportiello", "Italy",      "Atalanta",         "GK",  75, 46, 10, 42, 44, 10, 74, 25,  5000,  30, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(640, "Duvan Zapata",     "Colombia",   "Atalanta",         "ST",  80, 80, 76, 64, 68, 56, 84, 26, 15000,  50, 3, 2, face_skin=5, face_hair="black",   face_style="short",  face_beard="clean"),

    # ── FIORENTINA ───────────────────────────────────────────────────────────
    Player(641, "Federico Bernardeschi","Italy",  "Fiorentina",       "LW",  81, 80, 75, 77, 80, 56, 70, 23, 20000,  60, 3, 3, face_skin=2, face_hair="brown",   face_style="short",  face_beard="stubble"),
    Player(642, "Giovanni Simeone", "Argentina",  "Fiorentina",       "ST",  79, 81, 75, 70, 73, 52, 77, 22, 15000,  45, 3, 3, face_skin=3, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(643, "Ciprian Tatarusanu","Romania",   "Fiorentina",       "GK",  75, 46, 10, 42, 44, 10, 74, 31,  3000,  30, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),

    # ── TORINO ───────────────────────────────────────────────────────────────
    Player(644, "Andrea Belotti",   "Italy",      "Torino",           "ST",  83, 82, 80, 72, 76, 55, 80, 23, 30000,  70, 3, 3, face_skin=2, face_hair="blonde",  face_style="short",  face_beard="clean"),
    Player(645, "Salvatore Sirigu", "Italy",      "Torino",           "GK",  80, 48, 11, 44, 46, 11, 78, 30,  8000,  45, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),

    # ── SAMPDORIA ────────────────────────────────────────────────────────────
    Player(646, "Fabio Quagliarella","Italy",     "Sampdoria",        "ST",  78, 74, 75, 68, 68, 52, 74, 34,  5000,  40, 3, 3, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(647, "Emil Audero",      "Italy",      "Sampdoria",        "GK",  74, 46, 10, 42, 44, 10, 73, 20,  4000,  25, 3, 1, face_skin=4, face_hair="black",   face_style="short",  face_beard="clean"),

    # ── CAGLIARI ─────────────────────────────────────────────────────────────
    Player(648, "Diego Farias",     "Brazil",     "Cagliari",         "ST",  73, 78, 67, 68, 70, 48, 69, 26,  4000,  25, 3, 3, face_skin=4, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(649, "Alessio Cragno",   "Italy",      "Cagliari",         "GK",  74, 46, 10, 42, 44, 10, 73, 22,  4000,  25, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),

    # ── UDINESE ──────────────────────────────────────────────────────────────
    Player(650, "Rodrigo De Paul",  "Argentina",  "Udinese",          "CM",  79, 76, 70, 80, 76, 64, 72, 22, 15000,  40, 3, 3, face_skin=3, face_hair="black",   face_style="short",  face_beard="stubble"),
    Player(651, "Juan Musso",       "Argentina",  "Udinese",          "GK",  76, 47, 10, 43, 45, 10, 75, 23,  6000,  30, 3, 1, face_skin=3, face_hair="brown",   face_style="short",  face_beard="clean"),

    # ── GENOA ────────────────────────────────────────────────────────────────
    Player(652, "Goran Pandev",     "N. Macedonia","Genoa",           "CAM", 73, 70, 68, 74, 72, 52, 65, 34,  3000,  25, 3, 3, face_skin=3, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(653, "Mattia Perin",     "Italy",      "Genoa",            "GK",  79, 47, 11, 43, 45, 11, 77, 25,  8000,  40, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),

    # ── SASSUOLO ─────────────────────────────────────────────────────────────
    Player(654, "Domenico Berardi", "Italy",      "Sassuolo",         "RW",  80, 82, 75, 76, 80, 50, 67, 23, 15000,  50, 4, 4, face_skin=2, face_hair="black",   face_style="short",  face_beard="stubble"),
    Player(655, "Andrea Consigli",  "Italy",      "Sassuolo",         "GK",  79, 47, 11, 43, 45, 11, 77, 30,  6000,  35, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),

    # ── CHIEVO ───────────────────────────────────────────────────────────────
    Player(656, "Roberto Inglese",  "Italy",      "Chievo",           "ST",  74, 74, 69, 64, 66, 52, 74, 24,  6000,  30, 3, 2, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(657, "Stefano Sorrentino","Italy",     "Chievo",           "GK",  74, 45, 10, 41, 43, 10, 73, 37,  2000,  20, 3, 1, face_skin=2, face_hair="grey",    face_style="short",  face_beard="clean"),

    # ── BOLOGNA ──────────────────────────────────────────────────────────────
    Player(658, "Federico Santander","Paraguay",  "Bologna",          "ST",  73, 71, 68, 62, 64, 53, 76, 27,  4000,  25, 3, 2, face_skin=4, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(659, "Antonio Mirante",  "Italy",      "Bologna",          "GK",  75, 46, 10, 42, 44, 10, 74, 34,  3000,  25, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),

    # ── SPAL ─────────────────────────────────────────────────────────────────
    Player(660, "Andrea Petagna",   "Italy",      "SPAL",             "ST",  73, 73, 68, 62, 64, 54, 77, 22,  5000,  25, 3, 2, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(661, "Emiliano Viviano", "Italy",      "SPAL",             "GK",  76, 46, 10, 42, 44, 10, 75, 31,  4000,  30, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),

    # ── HELLAS VERONA ────────────────────────────────────────────────────────
    Player(662, "Bobby Duncan",     "England",    "Hellas Verona",    "ST",  70, 74, 65, 60, 62, 44, 68, 17,  3000,  15, 3, 3, face_skin=5, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(663, "Marco Silvestri",  "Italy",      "Hellas Verona",    "GK",  74, 46, 10, 42, 44, 10, 73, 25,  4000,  25, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="stubble"),

    # ── CROTONE ──────────────────────────────────────────────────────────────
    Player(664, "Diego Falcinelli", "Italy",      "Crotone",          "ST",  71, 72, 66, 60, 62, 50, 73, 24,  3000,  20, 3, 2, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(665, "Alex Cordaz",      "Italy",      "Crotone",          "GK",  74, 45, 10, 41, 43, 10, 73, 32,  3000,  20, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),

    # ── BENEVENTO ────────────────────────────────────────────────────────────
    Player(666, "Marco Sau",        "Italy",      "Benevento",        "ST",  72, 73, 67, 63, 64, 52, 72, 30,  3000,  20, 3, 2, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(667, "Alberto Brignoli", "Italy",      "Benevento",        "GK",  71, 45, 10, 41, 43, 10, 70, 24,  2000,  15, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
]
