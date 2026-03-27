"""La Liga player rosters — IDs 200–399."""

from . import Player

LALIGA_PLAYERS = [

    # ── REAL MADRID ──────────────────────────────────────────────────────────
    Player(200, "Cristiano Ronaldo","Portugal",   "Real Madrid",      "LW",  94, 89, 94, 88, 89, 35, 80, 32, 95000, 365, 4, 5, face_skin=2, face_hair="black",   face_style="short",  face_beard="stubble"),
    Player(201, "Luka Modric",      "Croatia",    "Real Madrid",      "CM",  92, 74, 76, 92, 90, 72, 66, 32, 65000, 200, 4, 4, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(202, "Sergio Ramos",     "Spain",      "Real Madrid",      "CB",  91, 74, 61, 74, 67, 91, 83, 31, 60000, 200, 3, 2, face_skin=2, face_hair="black",   face_style="shaved", face_beard="beard"),
    Player(203, "Toni Kroos",       "Germany",    "Real Madrid",      "CM",  92, 55, 77, 93, 80, 64, 72, 27, 80000, 200, 3, 2, face_skin=2, face_hair="blonde",  face_style="short",  face_beard="clean"),
    Player(204, "Karim Benzema",    "France",     "Real Madrid",      "ST",  87, 76, 83, 82, 84, 38, 74, 29, 55000, 150, 4, 4, face_skin=4, face_hair="black",   face_style="short",  face_beard="stubble"),
    Player(205, "Gareth Bale",      "Wales",      "Real Madrid",      "RW",  89, 93, 82, 77, 84, 35, 82, 28, 90000, 260, 3, 3, face_skin=2, face_hair="brown",   face_style="long",   face_beard="clean"),
    Player(206, "Isco",             "Spain",      "Real Madrid",      "CAM", 88, 72, 76, 88, 91, 50, 62, 25, 70000, 120, 3, 4, face_skin=2, face_hair="black",   face_style="short",  face_beard="stubble"),
    Player(207, "Marcelo",          "Brazil",     "Real Madrid",      "LB",  88, 82, 62, 84, 89, 63, 67, 29, 55000, 120, 3, 4, face_skin=4, face_hair="black",   face_style="curly",  face_beard="clean"),
    Player(208, "Casemiro",         "Brazil",     "Real Madrid",      "CDM", 85, 61, 59, 73, 67, 87, 85, 25, 35000,  90, 3, 1, face_skin=4, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(209, "Keylor Navas",     "Costa Rica", "Real Madrid",      "GK",  87, 52, 14, 46, 58, 20, 69, 30, 30000,  90, 3, 1, face_skin=3, face_hair="black",   face_style="short",  face_beard="beard"),
    Player(210, "Raphael Varane",   "France",     "Real Madrid",      "CB",  86, 76, 47, 66, 60, 88, 83, 24, 55000, 120, 3, 1, face_skin=5, face_hair="black",   face_style="short",  face_beard="clean"),

    # ── FC BARCELONA ─────────────────────────────────────────────────────────
    Player(211, "Lionel Messi",     "Argentina",  "FC Barcelona",     "RW",  93, 87, 90, 91, 96, 35, 68, 30, 95000, 565, 4, 4, face_skin=3, face_hair="brown",   face_style="short",  face_beard="beard"),
    Player(212, "Andres Iniesta",   "Spain",      "FC Barcelona",     "CM",  88, 74, 70, 92, 91, 57, 62, 33, 25000, 150, 4, 4, face_skin=2, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(213, "Luis Suarez",      "Uruguay",    "FC Barcelona",     "ST",  92, 77, 88, 86, 88, 45, 81, 30, 80000, 370, 4, 4, face_skin=2, face_hair="brown",   face_style="short",  face_beard="stubble"),
    Player(214, "Gerard Pique",     "Spain",      "FC Barcelona",     "CB",  87, 72, 56, 81, 69, 87, 78, 30, 30000, 120, 3, 1, face_skin=2, face_hair="black",   face_style="short",  face_beard="beard"),
    Player(215, "Jordi Alba",       "Spain",      "FC Barcelona",     "LB",  88, 88, 63, 79, 77, 74, 69, 28, 35000, 100, 3, 3, face_skin=2, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(216, "Ivan Rakitic",     "Croatia",    "FC Barcelona",     "CM",  87, 68, 73, 87, 78, 74, 79, 29, 55000, 120, 4, 3, face_skin=2, face_hair="black",   face_style="short",  face_beard="stubble"),
    Player(217, "Marc-Andre ter Stegen","Germany","FC Barcelona",     "GK",  88, 48, 13, 49, 55, 14, 73, 25, 50000, 120, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="stubble"),
    Player(218, "Sergio Busquets",  "Spain",      "FC Barcelona",     "CDM", 88, 49, 59, 88, 72, 79, 68, 29, 25000, 100, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(219, "Ousmane Dembele",  "France",     "FC Barcelona",     "LW",  83, 94, 75, 75, 88, 32, 62, 20, 82000, 130, 3, 4, face_skin=5, face_hair="black",   face_style="afro",   face_beard="clean"),
    Player(220, "Samuel Umtiti",    "France",     "FC Barcelona",     "CB",  84, 60, 27, 65, 46, 85, 78, 23, 35000,  80, 3, 1, face_skin=5, face_hair="black",   face_style="short",  face_beard="clean"),

    # ── ATLETICO MADRID ──────────────────────────────────────────────────────
    Player(221, "Antoine Griezmann","France",     "Atletico Madrid",  "ST",  92, 88, 88, 84, 87, 58, 76, 26,100000, 210, 4, 4, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(222, "Jan Oblak",        "Slovenia",   "Atletico Madrid",  "GK",  91, 48, 12, 46, 52, 10, 80, 24, 55000, 100, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(223, "Diego Costa",      "Spain",      "Atletico Madrid",  "ST",  86, 81, 85, 69, 78, 55, 90, 28, 45000, 120, 4, 2, face_skin=4, face_hair="black",   face_style="short",  face_beard="beard"),
    Player(224, "Koke",             "Spain",      "Atletico Madrid",  "CAM", 84, 72, 73, 88, 80, 68, 70, 26, 30000,  80, 3, 3, face_skin=2, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(225, "Saul Niguez",      "Spain",      "Atletico Madrid",  "CM",  84, 74, 71, 84, 82, 72, 79, 22, 40000,  80, 3, 3, face_skin=2, face_hair="black",   face_style="short",  face_beard="stubble"),
    Player(226, "Thomas Partey",    "Ghana",      "Atletico Madrid",  "CDM", 78, 68, 58, 73, 68, 80, 82, 24, 15000,  40, 3, 2, face_skin=5, face_hair="black",   face_style="short",  face_beard="clean"),

    # ── VALENCIA CF ──────────────────────────────────────────────────────────
    Player(227, "Rodrigo",          "Spain",      "Valencia CF",      "ST",  82, 86, 79, 77, 79, 44, 74, 26, 30000,  80, 3, 3, face_skin=3, face_hair="black",   face_style="short",  face_beard="stubble"),
    Player(228, "Goncalo Guedes",   "Portugal",   "Valencia CF",      "LW",  80, 85, 74, 76, 83, 38, 66, 21, 25000,  60, 3, 4, face_skin=4, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(229, "Neto",             "Brazil",     "Valencia CF",      "GK",  82, 49, 12, 45, 48, 12, 77, 28, 10000,  50, 3, 1, face_skin=4, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(230, "Jose Gaya",        "Spain",      "Valencia CF",      "LB",  81, 82, 56, 76, 76, 73, 70, 22, 20000,  50, 3, 3, face_skin=2, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(231, "Simone Zaza",      "Italy",      "Valencia CF",      "ST",  76, 76, 73, 64, 68, 52, 79, 26,  8000,  50, 3, 2, face_skin=2, face_hair="black",   face_style="short",  face_beard="beard"),

    # ── SEVILLA FC ───────────────────────────────────────────────────────────
    Player(232, "Ever Banega",      "Argentina",  "Sevilla FC",       "CM",  83, 68, 72, 87, 82, 64, 68, 29, 20000,  80, 4, 3, face_skin=3, face_hair="black",   face_style="short",  face_beard="stubble"),
    Player(233, "Wissam Ben Yedder","France",     "Sevilla FC",       "ST",  80, 82, 77, 74, 79, 42, 69, 27, 20000,  60, 3, 3, face_skin=4, face_hair="black",   face_style="short",  face_beard="stubble"),
    Player(234, "Luis Muriel",      "Colombia",   "Sevilla FC",       "ST",  80, 89, 76, 73, 78, 40, 71, 26, 18000,  60, 4, 4, face_skin=5, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(235, "Sergio Rico",      "Spain",      "Sevilla FC",       "GK",  77, 47, 11, 43, 46, 11, 75, 24,  8000,  35, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(236, "Clement Lenglet",  "France",     "Sevilla FC",       "CB",  82, 64, 38, 67, 55, 84, 77, 22, 20000,  50, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),

    # ── VILLARREAL ───────────────────────────────────────────────────────────
    Player(237, "Cedric Bakambu",   "DR Congo",   "Villarreal",       "ST",  80, 86, 77, 73, 78, 42, 73, 26, 18000,  60, 3, 3, face_skin=5, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(238, "Denis Suarez",     "Spain",      "Villarreal",       "CM",  78, 72, 68, 80, 78, 55, 64, 23, 12000,  40, 3, 3, face_skin=2, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(239, "Sergio Asenjo",    "Spain",      "Villarreal",       "GK",  82, 48, 11, 44, 47, 11, 79, 29, 10000,  50, 3, 1, face_skin=2, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(240, "Samuel Castillejo","Spain",      "Villarreal",       "RW",  77, 79, 70, 74, 77, 49, 66, 22,  8000,  35, 3, 3, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),

    # ── REAL BETIS ───────────────────────────────────────────────────────────
    Player(241, "Joaquin",          "Spain",      "Real Betis",       "RW",  76, 74, 68, 78, 75, 55, 65, 36,  3000,  30, 4, 4, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(242, "Dani Ceballos",    "Spain",      "Real Betis",       "CM",  80, 74, 69, 83, 80, 60, 66, 21, 25000,  50, 4, 4, face_skin=2, face_hair="brown",   face_style="short",  face_beard="stubble"),
    Player(243, "Pau Lopez",        "Spain",      "Real Betis",       "GK",  75, 47, 11, 43, 46, 11, 73, 22,  8000,  30, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),

    # ── REAL SOCIEDAD ────────────────────────────────────────────────────────
    Player(244, "Mikel Oyarzabal",  "Spain",      "Real Sociedad",    "LW",  79, 80, 74, 77, 81, 52, 67, 20, 15000,  40, 3, 3, face_skin=2, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(245, "Willian Jose",     "Brazil",     "Real Sociedad",    "ST",  77, 76, 73, 68, 70, 50, 77, 26,  8000,  40, 3, 2, face_skin=4, face_hair="black",   face_style="short",  face_beard="beard"),
    Player(246, "Geronimo Rulli",   "Argentina",  "Real Sociedad",    "GK",  78, 47, 11, 43, 45, 11, 76, 25,  8000,  35, 3, 1, face_skin=3, face_hair="black",   face_style="short",  face_beard="clean"),

    # ── ATHLETIC CLUB ────────────────────────────────────────────────────────
    Player(247, "Aritz Aduriz",     "Spain",      "Athletic Club",    "ST",  80, 74, 78, 68, 72, 51, 82, 36,  5000,  50, 3, 2, face_skin=2, face_hair="grey",    face_style="short",  face_beard="stubble"),
    Player(248, "Iker Muniain",     "Spain",      "Athletic Club",    "LW",  80, 80, 73, 79, 82, 55, 68, 25, 15000,  50, 3, 3, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(249, "Kepa Arrizabalaga","Spain",      "Athletic Club",    "GK",  82, 48, 11, 45, 48, 11, 79, 22, 15000,  50, 3, 1, face_skin=2, face_hair="black",   face_style="short",  face_beard="clean"),

    # ── ESPANYOL ─────────────────────────────────────────────────────────────
    Player(250, "Gerard Moreno",    "Spain",      "Espanyol",         "ST",  77, 78, 73, 73, 74, 50, 72, 25,  8000,  40, 3, 3, face_skin=2, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(251, "Pablo Piatti",     "Argentina",  "Espanyol",         "LW",  78, 82, 73, 76, 80, 48, 64, 31,  8000,  45, 4, 4, face_skin=3, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(252, "Diego Lopez",      "Spain",      "Espanyol",         "GK",  76, 46, 11, 43, 45, 11, 75, 36,  2000,  30, 3, 1, face_skin=2, face_hair="grey",    face_style="short",  face_beard="clean"),

    # ── CELTA VIGO ───────────────────────────────────────────────────────────
    Player(253, "Iago Aspas",       "Spain",      "Celta Vigo",       "ST",  83, 82, 80, 78, 80, 55, 70, 30, 30000,  80, 4, 4, face_skin=2, face_hair="brown",   face_style="short",  face_beard="stubble"),
    Player(254, "Brais Mendez",     "Spain",      "Celta Vigo",       "RW",  76, 78, 69, 75, 74, 52, 66, 20,  8000,  30, 3, 3, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(255, "Ruben Blanco",     "Spain",      "Celta Vigo",       "GK",  74, 46, 10, 42, 44, 10, 73, 22,  4000,  25, 3, 1, face_skin=2, face_hair="black",   face_style="short",  face_beard="clean"),

    # ── EIBAR ────────────────────────────────────────────────────────────────
    Player(256, "Sergi Enrich",     "Spain",      "Eibar",            "ST",  73, 72, 69, 63, 65, 52, 77, 28,  4000,  25, 3, 2, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(257, "Marko Dmitrovic",  "Serbia",     "Eibar",            "GK",  75, 47, 10, 42, 44, 10, 76, 25,  5000,  25, 3, 1, face_skin=2, face_hair="black",   face_style="short",  face_beard="beard"),

    # ── GETAFE CF ────────────────────────────────────────────────────────────
    Player(258, "Jorge Molina",     "Spain",      "Getafe CF",        "ST",  75, 70, 71, 65, 66, 52, 78, 35,  4000,  25, 3, 2, face_skin=2, face_hair="black",   face_style="short",  face_beard="stubble"),
    Player(259, "Vicente Guaita",   "Spain",      "Getafe CF",        "GK",  77, 47, 11, 43, 45, 11, 76, 30,  5000,  30, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(260, "Jaime Mata",       "Spain",      "Getafe CF",        "RW",  76, 78, 72, 68, 70, 52, 72, 30,  5000,  25, 3, 3, face_skin=2, face_hair="black",   face_style="short",  face_beard="clean"),

    # ── DEPORTIVO LA CORUNA ──────────────────────────────────────────────────
    Player(261, "Lucas Perez",      "Spain",      "Deportivo La Coruna","ST", 76, 80, 72, 70, 73, 48, 70, 29,  6000,  35, 3, 3, face_skin=2, face_hair="brown",   face_style="short",  face_beard="stubble"),
    Player(262, "German Lux",       "Argentina",  "Deportivo La Coruna","GK", 74, 46, 10, 42, 44, 10, 74, 35,  3000,  25, 3, 1, face_skin=3, face_hair="black",   face_style="short",  face_beard="clean"),

    # ── LAS PALMAS ───────────────────────────────────────────────────────────
    Player(263, "Jese Rodriguez",   "Spain",      "Las Palmas",       "ST",  75, 82, 70, 72, 74, 44, 68, 24,  6000,  30, 3, 4, face_skin=5, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(264, "Javi Varas",       "Spain",      "Las Palmas",       "GK",  73, 46, 10, 41, 43, 10, 73, 32,  3000,  20, 3, 1, face_skin=2, face_hair="black",   face_style="short",  face_beard="clean"),

    # ── MALAGA CF ────────────────────────────────────────────────────────────
    Player(265, "Sandro Ramirez",   "Spain",      "Malaga CF",        "ST",  74, 80, 69, 67, 68, 44, 68, 22,  8000,  30, 3, 3, face_skin=3, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(266, "Roberto Jimenez",  "Spain",      "Malaga CF",        "GK",  74, 46, 10, 42, 44, 10, 73, 29,  3000,  20, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),

    # ── ALAVES ───────────────────────────────────────────────────────────────
    Player(267, "Ibai Gomez",       "Spain",      "Alaves",           "RW",  73, 78, 66, 70, 72, 52, 65, 27,  4000,  25, 3, 3, face_skin=2, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(268, "Fernando Pacheco", "Spain",      "Alaves",           "GK",  74, 46, 10, 42, 44, 10, 73, 26,  3000,  20, 3, 1, face_skin=2, face_hair="black",   face_style="short",  face_beard="clean"),

    # ── LEGANES ──────────────────────────────────────────────────────────────
    Player(269, "Nabil El Zhar",    "Morocco",    "Leganes",          "LW",  72, 74, 65, 68, 69, 50, 65, 32,  3000,  20, 3, 3, face_skin=4, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(270, "Nereo Champagne",  "Argentina",  "Leganes",          "GK",  73, 45, 10, 41, 43, 10, 73, 30,  3000,  20, 3, 1, face_skin=3, face_hair="brown",   face_style="short",  face_beard="clean"),

    # ── LEVANTE UD ───────────────────────────────────────────────────────────
    Player(271, "Roger Marti",      "Spain",      "Levante UD",       "ST",  72, 74, 67, 64, 65, 50, 73, 26,  3000,  20, 3, 2, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
    Player(272, "Oier Olazabal",    "Spain",      "Levante UD",       "GK",  73, 45, 10, 41, 43, 10, 73, 29,  3000,  20, 3, 1, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),

    # ── GIRONA FC ────────────────────────────────────────────────────────────
    Player(273, "Cristhian Stuani", "Uruguay",    "Girona FC",        "ST",  77, 78, 73, 67, 68, 54, 78, 31,  8000,  35, 3, 2, face_skin=3, face_hair="brown",   face_style="short",  face_beard="beard"),
    Player(274, "Yassine Bounou",   "Morocco",    "Girona FC",        "GK",  75, 46, 10, 42, 44, 10, 74, 26,  4000,  25, 3, 1, face_skin=4, face_hair="black",   face_style="short",  face_beard="clean"),
    Player(275, "Portu",            "Spain",      "Girona FC",        "RW",  74, 78, 68, 71, 71, 52, 66, 26,  4000,  25, 3, 3, face_skin=2, face_hair="brown",   face_style="short",  face_beard="clean"),
]
