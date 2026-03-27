"""Bundesliga player rosters — IDs 400–599."""

from . import Player

BUNDESLIGA_PLAYERS = [

    # ── BAYERN MUNICH ────────────────────────────────────────────────────────
    Player(400, "Robert Lewandowski","Poland",    "Bayern Munich",    "ST",  92, 79, 91, 78, 85, 44, 82, 29, 80000, 270, 3, 4, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(401, "Manuel Neuer",     "Germany",    "Bayern Munich",    "GK",  92, 54, 13, 53, 48, 14, 87, 31, 55000, 220, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(402, "Thomas Muller",    "Germany",    "Bayern Munich",    "CAM", 88, 68, 82, 85, 75, 57, 72, 27, 60000, 150, 3, 2, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(403, "Arjen Robben",     "Netherlands","Bayern Munich",    "RW",  87, 86, 82, 82, 88, 37, 72, 33, 30000, 150, 3, 4, face_skin=2, face_hair="bald",    face_style="bald",   face_beard="clean"),
    Player(404, "Franck Ribery",    "France",     "Bayern Munich",    "LW",  85, 84, 74, 85, 89, 35, 72, 34, 15000, 120, 4, 5, face_skin=3, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(405, "Jerome Boateng",   "Germany",    "Bayern Munich",    "CB",  87, 71, 44, 71, 55, 87, 80, 29, 40000, 100, 3, 1, face_skin=5, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(406, "David Alaba",      "Austria",    "Bayern Munich",    "LB",  84, 78, 59, 80, 79, 78, 68, 25, 40000, 100, 4, 3, face_skin=5, face_hair="black",   face_style="mohawk", face_beard="clean"),
    Player(407, "Thiago Alcantara", "Spain",      "Bayern Munich",    "CM",  88, 72, 73, 90, 84, 65, 66, 26, 55000, 130, 4, 4, face_skin=4, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(408, "James Rodriguez",  "Colombia",   "Bayern Munich",    "CAM", 87, 74, 80, 88, 85, 55, 68, 26, 60000, 130, 4, 4, face_skin=3, face_hair="black",   face_style="short",  face_beard="stubble"),
    Player(409, "Mats Hummels",     "Germany",    "Bayern Munich",    "CB",  89, 66, 46, 74, 64, 88, 80, 28, 55000, 130, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),

    # ── BORUSSIA DORTMUND ────────────────────────────────────────────────────
    Player(410, "Pierre-Emerick Aubameyang","Gabon","Borussia Dortmund","ST",87, 96, 84, 70, 84, 30, 73, 28, 60000, 110, 3, 3, face_skin=5, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(411, "Christian Pulisic","USA",         "Borussia Dortmund","LW", 79, 85, 68, 76, 84, 52, 63, 19, 30000,  20, 4, 4, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(412, "Marco Reus",       "Germany",    "Borussia Dortmund","CAM", 87, 85, 82, 87, 90, 43, 68, 28, 40000, 100, 3, 4, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(413, "Roman Burki",      "Switzerland","Borussia Dortmund","GK",  82, 50, 12, 44, 48, 12, 74, 27, 15000,  40, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(414, "Nuri Sahin",       "Turkey",     "Borussia Dortmund","CM",  79, 64, 63, 82, 77, 67, 68, 29, 10000,  50, 3, 2, face_skin=3, face_hair="black",   face_style="short",  face_beard="stubble"),
    Player(415, "Lukasz Piszczek",  "Poland",     "Borussia Dortmund","RB",  80, 80, 53, 70, 65, 78, 78, 32,  8000,  50, 3, 2, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),

    # ── RB LEIPZIG ───────────────────────────────────────────────────────────
    Player(416, "Timo Werner",      "Germany",    "RB Leipzig",       "ST",  83, 93, 80, 76, 82, 38, 72, 21, 35000,  80, 3, 4, face_skin=2, face_hair="blonde",  face_style="short",  face_beard="clean"),
    Player(417, "Emil Forsberg",    "Sweden",     "RB Leipzig",       "LW",  84, 84, 77, 83, 86, 47, 66, 25, 30000,  70, 3, 4, face_skin=2, face_hair="blonde",  face_style="short",  face_beard="stubble"),
    Player(418, "Peter Gulacsi",    "Hungary",    "RB Leipzig",       "GK",  82, 48, 11, 45, 47, 11, 79, 27, 12000,  50, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(419, "Dayot Upamecano",  "France",     "RB Leipzig",       "CB",  80, 74, 41, 64, 57, 82, 82, 18, 20000,  40, 3, 1, face_skin=5, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(420, "Naby Keita",       "Guinea",     "RB Leipzig",       "CM",  84, 78, 73, 84, 82, 72, 74, 22, 40000,  90, 4, 4, face_skin=5, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(421, "Yussuf Poulsen",   "Denmark",    "RB Leipzig",       "ST",  76, 84, 70, 64, 68, 55, 80, 23,  8000,  40, 3, 2, face_skin=5, face_hair="black",   face_style="short",  face_beard="clean"),

    # ── BAYER LEVERKUSEN ─────────────────────────────────────────────────────
    Player(422, "Kai Havertz",      "Germany",    "Bayer Leverkusen", "CAM", 78, 75, 72, 79, 79, 57, 67, 18, 30000,  40, 3, 4, face_skin=2, face_hair="blonde",  face_style="short",  face_beard="clean"),
    Player(423, "Bernd Leno",       "Germany",    "Bayer Leverkusen", "GK",  83, 50, 12, 46, 48, 12, 80, 25, 20000,  60, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(424, "Leon Bailey",      "Jamaica",    "Bayer Leverkusen", "LW",  80, 88, 73, 77, 83, 40, 65, 20, 20000,  50, 4, 4, face_skin=5, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(425, "Kevin Volland",    "Germany",    "Bayer Leverkusen", "ST",  80, 81, 76, 74, 76, 48, 72, 25, 15000,  60, 3, 3, face_skin=2, face_hair="brown",   face_style="short",  face_beard="stubble"),
    Player(426, "Lars Bender",      "Germany",    "Bayer Leverkusen", "CDM", 80, 72, 62, 75, 70, 80, 78, 28, 12000,  55, 3, 2, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),

    # ── SCHALKE 04 ───────────────────────────────────────────────────────────
    Player(427, "Leon Goretzka",    "Germany",    "Schalke 04",       "CM",  82, 76, 73, 80, 78, 72, 80, 22, 30000,  60, 3, 3, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(428, "Ralf Fahrmann",    "Germany",    "Schalke 04",       "GK",  79, 48, 11, 44, 46, 11, 77, 29,  8000,  45, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(429, "Guido Burgstaller","Austria",    "Schalke 04",       "ST",  77, 77, 73, 66, 69, 54, 74, 28,  8000,  40, 3, 2, face_skin=2, face_hair="brown",   face_style="short",  face_beard="beard"),
    Player(430, "Naldo",            "Brazil",     "Schalke 04",       "CB",  79, 66, 43, 62, 56, 82, 83, 35,  5000,  50, 3, 1, face_skin=4, face_hair="black",   face_style="short",  face_beard="clean"),

    # ── HOFFENHEIM ───────────────────────────────────────────────────────────
    Player(431, "Andrej Kramaric",  "Croatia",    "Hoffenheim",       "ST",  80, 78, 76, 74, 78, 50, 72, 26, 15000,  55, 4, 3, face_skin=2, face_hair="black",   face_style="short",  face_beard="stubble"),
    Player(432, "Oliver Baumann",   "Germany",    "Hoffenheim",       "GK",  78, 47, 11, 43, 46, 11, 76, 27,  8000,  40, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(433, "Niklas Sule",      "Germany",    "Hoffenheim",       "CB",  82, 72, 43, 65, 57, 85, 86, 21, 25000,  50, 3, 1, face_skin=2, face_hair="blonde",  face_style="short",  face_beard="clean"),
    Player(434, "Kerem Demirbay",   "Germany",    "Hoffenheim",       "CM",  80, 72, 68, 83, 79, 61, 68, 24, 15000,  45, 3, 3, face_skin=4, face_hair="black",   face_style="short",  face_beard="stubble"),

    # ── HERTHA BERLIN ────────────────────────────────────────────────────────
    Player(435, "Vedad Ibisevic",   "Bosnia",     "Hertha Berlin",    "ST",  76, 72, 72, 62, 66, 52, 76, 33,  4000,  40, 3, 2, face_skin=3, face_hair="black",   face_style="short",  face_beard="beard"),
    Player(436, "Rune Jarstein",    "Norway",     "Hertha Berlin",    "GK",  76, 46, 10, 42, 44, 10, 75, 32,  4000,  30, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(437, "Marvin Plattenhardt","Germany",  "Hertha Berlin",    "LB",  78, 74, 62, 73, 73, 68, 66, 25,  8000,  35, 3, 3, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),

    # ── BORUSSIA MOENCHENGLADBACH ────────────────────────────────────────────
    Player(438, "Thorgan Hazard",   "Belgium",    "Borussia Moenchengladbach","LW",80,82,74,78,82,52,66,24,15000,55,4,4, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(439, "Lars Stindl",      "Germany",    "Borussia Moenchengladbach","ST",80,76,75,77,79,58,74,29,10000,55,3,3, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(440, "Yann Sommer",      "Switzerland","Borussia Moenchengladbach","GK",83,49,12,45,47,11,80,28,15000,60,3,1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(441, "Christoph Kramer", "Germany",    "Borussia Moenchengladbach","CDM",79,68,56,74,70,78,76,26,8000,40,3,2, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),

    # ── EINTRACHT FRANKFURT ──────────────────────────────────────────────────
    Player(442, "Luka Jovic",       "Serbia",     "Eintracht Frankfurt","ST", 78, 76, 74, 70, 75, 50, 75, 19, 20000,  40, 3, 3, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(443, "Ante Rebic",       "Croatia",    "Eintracht Frankfurt","LW", 78, 82, 71, 70, 76, 56, 73, 23, 10000,  40, 4, 3, face_skin=2, face_hair="black",   face_style="short",  face_beard="stubble"),
    Player(444, "Lukas Hradecky",   "Finland",    "Eintracht Frankfurt","GK", 79, 47, 11, 43, 45, 11, 77, 28,  6000,  35, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),

    # ── WERDER BREMEN ────────────────────────────────────────────────────────
    Player(445, "Max Kruse",        "Germany",    "Werder Bremen",    "CAM", 80, 76, 73, 80, 79, 56, 70, 29, 10000,  55, 3, 3, face_skin=2, face_hair="brown",   face_style="short",  face_beard="stubble"),
    Player(446, "Jiri Pavlenka",    "Czech Republic","Werder Bremen", "GK",  77, 47, 11, 43, 45, 11, 76, 25,  6000,  35, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(447, "Claudio Pizarro",  "Peru",       "Werder Bremen",    "ST",  73, 67, 70, 67, 68, 48, 72, 39,  2000,  25, 3, 2, face_skin=4, face_hair="black",   face_style="short",  face_beard="clean"),

    # ── AUGSBURG ─────────────────────────────────────────────────────────────
    Player(448, "Michael Gregoritsch","Austria",  "Augsburg",         "ST",  76, 77, 72, 65, 68, 52, 78, 23,  8000,  35, 3, 2, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(449, "Marwin Hitz",      "Switzerland","Augsburg",         "GK",  77, 47, 11, 43, 45, 11, 76, 30,  5000,  30, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),

    # ── FREIBURG ─────────────────────────────────────────────────────────────
    Player(450, "Nils Petersen",    "Germany",    "Freiburg",         "ST",  76, 76, 72, 64, 66, 48, 76, 29,  6000,  35, 3, 2, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(451, "Alexander Schwolow","Germany",   "Freiburg",         "GK",  78, 47, 11, 43, 45, 11, 77, 26,  6000,  35, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),

    # ── WOLFSBURG ────────────────────────────────────────────────────────────
    Player(452, "Mario Gomez",      "Germany",    "Wolfsburg",        "ST",  78, 68, 75, 65, 70, 48, 80, 32,  8000,  60, 3, 2, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(453, "Koen Casteels",    "Belgium",    "Wolfsburg",        "GK",  78, 47, 11, 43, 45, 11, 77, 25,  6000,  35, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(454, "Daniel Didavi",    "Germany",    "Wolfsburg",        "CAM", 77, 72, 69, 79, 77, 55, 65, 27,  6000,  35, 3, 3, face_skin=3, face_hair="black",   face_style="short",  face_beard="clean"),

    # ── MAINZ 05 ─────────────────────────────────────────────────────────────
    Player(455, "Jean-Philippe Mateta","France",  "Mainz 05",         "ST",  75, 78, 70, 63, 67, 50, 77, 20,  8000,  30, 3, 2, face_skin=5, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(456, "Rene Adler",       "Germany",    "Mainz 05",         "GK",  75, 46, 10, 42, 44, 10, 74, 33,  3000,  25, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),

    # ── VFB STUTTGART ────────────────────────────────────────────────────────
    Player(457, "Simon Terodde",    "Germany",    "VfB Stuttgart",    "ST",  75, 68, 71, 62, 65, 50, 78, 30,  4000,  30, 3, 2, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(458, "Ron-Robert Zieler","Germany",    "VfB Stuttgart",    "GK",  77, 47, 11, 43, 45, 11, 76, 28,  5000,  30, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),

    # ── HANNOVER 96 ──────────────────────────────────────────────────────────
    Player(459, "Martin Harnik",    "Austria",    "Hannover 96",      "RW",  74, 80, 68, 68, 70, 50, 70, 30,  4000,  30, 3, 3, face_skin=2, face_hair="brown",   face_style="short",  face_beard="stubble"),
    Player(460, "Philipp Tschauner","Germany",    "Hannover 96",      "GK",  73, 45, 10, 41, 43, 10, 73, 30,  3000,  20, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),

    # ── HAMBURG SV ───────────────────────────────────────────────────────────
    Player(461, "Filip Kostic",     "Serbia",     "Hamburg SV",       "LW",  76, 80, 68, 72, 74, 56, 70, 20, 10000,  35, 3, 3, face_skin=2, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(462, "Christian Mathenia","Germany",   "Hamburg SV",       "GK",  74, 46, 10, 42, 44, 10, 73, 26,  4000,  25, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(463, "Bobby Wood",       "USA",        "Hamburg SV",       "ST",  74, 77, 68, 63, 66, 54, 72, 25,  5000,  30, 3, 2, face_skin=4, face_hair="black",   face_style="short",  face_beard="clean"),

    # ── FC COLOGNE ───────────────────────────────────────────────────────────
    Player(464, "Anthony Modeste",  "France",     "FC Cologne",       "ST",  77, 76, 73, 64, 68, 54, 80, 29,  8000,  50, 3, 2, face_skin=5, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(465, "Timo Horn",        "Germany",    "FC Cologne",       "GK",  78, 47, 11, 43, 45, 11, 77, 24,  6000,  35, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
]
