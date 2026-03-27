"""The Beautiful Game 2026 — Club data with real team names."""

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
    name: str
    league: str
    country: str
    stadium: str
    capacity: int
    style_key: str
    prestige: int      # 1-10
    primary_color: str    # hex for UI
    secondary_color: str  # hex for UI

    @property
    def style(self) -> TeamStyle:
        return TEAM_STYLES[self.style_key]


# ── PREMIER LEAGUE ───────────────────────────────────────────────────────────
CLUBS: Dict[str, Club] = {
    "Manchester City":      Club("Manchester City",      "Premier League", "England",
                                 "Etihad Stadium",          55097, "gegenpressing", 10, "#6CABDD", "#FFFFFF"),
    "Manchester United":    Club("Manchester United",    "Premier League", "England",
                                 "Old Trafford",             74879, "balanced",      9,  "#DA291C", "#FBE122"),
    "Liverpool":            Club("Liverpool",            "Premier League", "England",
                                 "Anfield",                  54074, "gegenpressing", 9,  "#C8102E", "#F6EB61"),
    "Chelsea":              Club("Chelsea",              "Premier League", "England",
                                 "Stamford Bridge",          40853, "counter",       8,  "#034694", "#DBA111"),
    "Arsenal":              Club("Arsenal",              "Premier League", "England",
                                 "Emirates Stadium",         60260, "tiki_taka",     8,  "#EF0107", "#FFFFFF"),
    "Tottenham Hotspur":    Club("Tottenham Hotspur",    "Premier League", "England",
                                 "Tottenham Hotspur Stadium",62850, "high_press",   8,  "#132257", "#FFFFFF"),
    "Leicester City":       Club("Leicester City",       "Premier League", "England",
                                 "King Power Stadium",       32261, "counter",       7,  "#003090", "#FDBE11"),
    "Everton":              Club("Everton",              "Premier League", "England",
                                 "Goodison Park",            39572, "direct",        6,  "#003399", "#FFFFFF"),
    "Burnley":              Club("Burnley",              "Premier League", "England",
                                 "Turf Moor",                21994, "direct",        5,  "#6C1D45", "#99D6EA"),
    "Newcastle United":     Club("Newcastle United",     "Premier League", "England",
                                 "St. James' Park",          52305, "balanced",      6,  "#241F20", "#FFFFFF"),
    "Crystal Palace":       Club("Crystal Palace",       "Premier League", "England",
                                 "Selhurst Park",            25486, "counter",       5,  "#1B458F", "#C4122E"),
    "Bournemouth":          Club("Bournemouth",          "Premier League", "England",
                                 "Vitality Stadium",         11364, "balanced",      5,  "#DA291C", "#000000"),
    "West Ham United":      Club("West Ham United",      "Premier League", "England",
                                 "London Stadium",           60000, "direct",        6,  "#7A263A", "#1BB1E7"),
    "Watford":              Club("Watford",              "Premier League", "England",
                                 "Vicarage Road",            22200, "counter",       5,  "#FBEE23", "#ED2127"),
    "Brighton":             Club("Brighton",             "Premier League", "England",
                                 "Falmer Stadium",           30750, "balanced",      5,  "#0057B8", "#FFFFFF"),
    "Huddersfield Town":    Club("Huddersfield Town",    "Premier League", "England",
                                 "John Smith's Stadium",     24500, "direct",        4,  "#0E63AD", "#FFFFFF"),
    "Southampton":          Club("Southampton",          "Premier League", "England",
                                 "St. Mary's Stadium",       32384, "balanced",      6,  "#D71920", "#130C0E"),
    "Swansea City":         Club("Swansea City",         "Premier League", "England",
                                 "Liberty Stadium",          21088, "tiki_taka",     5,  "#FFFFFF", "#000000"),
    "Stoke City":           Club("Stoke City",           "Premier League", "England",
                                 "bet365 Stadium",           27902, "direct",        5,  "#E03A3E", "#FFFFFF"),
    "West Brom":            Club("West Brom",            "Premier League", "England",
                                 "The Hawthorns",            26500, "counter",       5,  "#122F67", "#FFFFFF"),

    # ── LA LIGA ──────────────────────────────────────────────────────────────
    "Real Madrid":          Club("Real Madrid",          "La Liga",        "Spain",
                                 "Santiago Bernabeu",        81044, "balanced",     10, "#FFFFFF", "#FFD700"),
    "FC Barcelona":         Club("FC Barcelona",         "La Liga",        "Spain",
                                 "Camp Nou",                 99354, "tiki_taka",    10, "#A50044", "#004D98"),
    "Atletico Madrid":      Club("Atletico Madrid",      "La Liga",        "Spain",
                                 "Wanda Metropolitano",      68456, "counter",       9, "#CB3524", "#FFFFFF"),
    "Valencia CF":          Club("Valencia CF",          "La Liga",        "Spain",
                                 "Mestalla",                 55000, "balanced",      7, "#FF7B00", "#000000"),
    "Sevilla FC":           Club("Sevilla FC",           "La Liga",        "Spain",
                                 "Ramon Sanchez-Pizjuan",    43000, "balanced",      7, "#D71920", "#FFFFFF"),
    "Villarreal":           Club("Villarreal",           "La Liga",        "Spain",
                                 "Estadio de la Ceramica",   23500, "counter",       6, "#FFD700", "#009FC3"),
    "Real Betis":           Club("Real Betis",           "La Liga",        "Spain",
                                 "Benito Villamarin",        60720, "balanced",      6, "#00954C", "#FFFFFF"),
    "Real Sociedad":        Club("Real Sociedad",        "La Liga",        "Spain",
                                 "Reale Arena",              39500, "tiki_taka",     6, "#003DA5", "#FFFFFF"),
    "Athletic Club":        Club("Athletic Club",        "La Liga",        "Spain",
                                 "San Mames",                53289, "high_press",    6, "#EE2523", "#FFFFFF"),
    "Espanyol":             Club("Espanyol",             "La Liga",        "Spain",
                                 "RCDE Stadium",             40000, "balanced",      5, "#004899", "#FFFFFF"),
    "Celta Vigo":           Club("Celta Vigo",           "La Liga",        "Spain",
                                 "Balaidos",                 29000, "tiki_taka",     5, "#70B5D9", "#FFFFFF"),
    "Eibar":                Club("Eibar",                "La Liga",        "Spain",
                                 "Ipurua",                    6235, "direct",        4, "#1C3F7A", "#FFFFFF"),
    "Getafe CF":            Club("Getafe CF",            "La Liga",        "Spain",
                                 "Coliseum Alfonso Perez",   17700, "counter",       4, "#0B4EA2", "#FFFFFF"),
    "Deportivo La Coruna":  Club("Deportivo La Coruna",  "La Liga",        "Spain",
                                 "Estadio de Riazor",        34600, "balanced",      5, "#1B68B3", "#FFFFFF"),
    "Las Palmas":           Club("Las Palmas",           "La Liga",        "Spain",
                                 "Gran Canaria",             32400, "direct",        4, "#FFD700", "#004C97"),
    "Malaga CF":            Club("Malaga CF",            "La Liga",        "Spain",
                                 "La Rosaleda",              30044, "counter",       5, "#1C5FA6", "#FFFFFF"),
    "Alaves":               Club("Alaves",               "La Liga",        "Spain",
                                 "Mendizorroza",             19840, "counter",       4, "#1459A8", "#FFFFFF"),
    "Leganes":              Club("Leganes",              "La Liga",        "Spain",
                                 "Butarque",                 12454, "direct",        4, "#003DA5", "#FFFFFF"),
    "Levante UD":           Club("Levante UD",           "La Liga",        "Spain",
                                 "Ciudad de Valencia",       25354, "direct",        4, "#C41E3A", "#1B60A6"),
    "Girona FC":            Club("Girona FC",            "La Liga",        "Spain",
                                 "Montilivi",                13450, "balanced",      4, "#C41E3A", "#FFFFFF"),

    # ── BUNDESLIGA ───────────────────────────────────────────────────────────
    "Bayern Munich":        Club("Bayern Munich",        "Bundesliga",     "Germany",
                                 "Allianz Arena",            75000, "high_press",   10, "#DC052D", "#0066B2"),
    "Borussia Dortmund":    Club("Borussia Dortmund",    "Bundesliga",     "Germany",
                                 "Signal Iduna Park",        81365, "gegenpressing", 8, "#FDE100", "#000000"),
    "RB Leipzig":           Club("RB Leipzig",           "Bundesliga",     "Germany",
                                 "Red Bull Arena",           47069, "gegenpressing", 7, "#DD0741", "#FFFFFF"),
    "Bayer Leverkusen":     Club("Bayer Leverkusen",     "Bundesliga",     "Germany",
                                 "BayArena",                 30210, "high_press",    7, "#E32221", "#000000"),
    "Schalke 04":           Club("Schalke 04",           "Bundesliga",     "Germany",
                                 "Veltins-Arena",            62271, "balanced",      7, "#004D9D", "#FFFFFF"),
    "Hoffenheim":           Club("Hoffenheim",           "Bundesliga",     "Germany",
                                 "PreZero Arena",            30150, "gegenpressing", 6, "#1961AC", "#FFFFFF"),
    "Hertha Berlin":        Club("Hertha Berlin",        "Bundesliga",     "Germany",
                                 "Olympiastadion",           74475, "balanced",      6, "#003E82", "#FFFFFF"),
    "Borussia Moenchengladbach": Club("Borussia Moenchengladbach", "Bundesliga", "Germany",
                                 "Borussia-Park",            54057, "gegenpressing", 6, "#000000", "#FFFFFF"),
    "Eintracht Frankfurt":  Club("Eintracht Frankfurt",  "Bundesliga",     "Germany",
                                 "Deutsche Bank Park",       51500, "direct",        6, "#E1000F", "#000000"),
    "Werder Bremen":        Club("Werder Bremen",        "Bundesliga",     "Germany",
                                 "Weserstadion",             42100, "balanced",      6, "#1D9054", "#FFFFFF"),
    "Augsburg":             Club("Augsburg",             "Bundesliga",     "Germany",
                                 "WWK Arena",                30660, "direct",        5, "#BA3733", "#007A47"),
    "Freiburg":             Club("Freiburg",             "Bundesliga",     "Germany",
                                 "Europa-Park Stadion",      34700, "balanced",      5, "#CC0000", "#000000"),
    "Wolfsburg":            Club("Wolfsburg",            "Bundesliga",     "Germany",
                                 "Volkswagen Arena",         30000, "balanced",      6, "#65B32E", "#FFFFFF"),
    "Mainz 05":             Club("Mainz 05",             "Bundesliga",     "Germany",
                                 "Mewa Arena",               34034, "high_press",    5, "#CC0000", "#FFFFFF"),
    "VfB Stuttgart":        Club("VfB Stuttgart",        "Bundesliga",     "Germany",
                                 "MHPArena",                 60441, "balanced",      6, "#E32221", "#FFFFFF"),
    "Hannover 96":          Club("Hannover 96",          "Bundesliga",     "Germany",
                                 "HDI Arena",                49000, "direct",        5, "#009D4E", "#000000"),
    "Hamburg SV":           Club("Hamburg SV",           "Bundesliga",     "Germany",
                                 "Volksparkstadion",         57000, "balanced",      6, "#005CA9", "#FFFFFF"),
    "FC Cologne":           Club("FC Cologne",           "Bundesliga",     "Germany",
                                 "RheinEnergieStadion",      50000, "direct",        5, "#E3000F", "#FFFFFF"),

    # ── SERIE A ──────────────────────────────────────────────────────────────
    "Juventus":             Club("Juventus",             "Serie A",        "Italy",
                                 "Allianz Stadium",          41507, "balanced",      10, "#000000", "#FFFFFF"),
    "Napoli":               Club("Napoli",               "Serie A",        "Italy",
                                 "Stadio Maradona",          54726, "tiki_taka",      9, "#0067B1", "#FFFFFF"),
    "Roma":                 Club("Roma",                 "Serie A",        "Italy",
                                 "Olimpico",                 70634, "balanced",       8, "#8E1F2F", "#FFD700"),
    "Inter Milan":          Club("Inter Milan",          "Serie A",        "Italy",
                                 "San Siro",                 80018, "counter",        8, "#010E80", "#000000"),
    "AC Milan":             Club("AC Milan",             "Serie A",        "Italy",
                                 "San Siro",                 80018, "balanced",       7, "#FB090B", "#000000"),
    "Lazio":                Club("Lazio",                "Serie A",        "Italy",
                                 "Olimpico",                 70634, "counter",        7, "#87D8F7", "#FFFFFF"),
    "Atalanta":             Club("Atalanta",             "Serie A",        "Italy",
                                 "Gewiss Stadium",           21300, "gegenpressing",  7, "#1C5BAA", "#000000"),
    "Fiorentina":           Club("Fiorentina",           "Serie A",        "Italy",
                                 "Artemio Franchi",          43147, "balanced",       6, "#4F2277", "#FFFFFF"),
    "Torino":               Club("Torino",               "Serie A",        "Italy",
                                 "Olimpico Grande Torino",   28177, "direct",         5, "#8B1A1A", "#FFFFFF"),
    "Sampdoria":            Club("Sampdoria",            "Serie A",        "Italy",
                                 "Luigi Ferraris",           36599, "balanced",       5, "#0E4DA4", "#FFFFFF"),
    "Cagliari":             Club("Cagliari",             "Serie A",        "Italy",
                                 "Unipol Domus",             16416, "counter",        5, "#990000", "#FFFFFF"),
    "Udinese":              Club("Udinese",              "Serie A",        "Italy",
                                 "Dacia Arena",              25652, "direct",         5, "#000000", "#FFFFFF"),
    "Genoa":                Club("Genoa",                "Serie A",        "Italy",
                                 "Luigi Ferraris",           36599, "direct",         5, "#8B0000", "#FFFFFF"),
    "Sassuolo":             Club("Sassuolo",             "Serie A",        "Italy",
                                 "Mapei Stadium",            21584, "tiki_taka",      5, "#00985F", "#000000"),
    "Chievo":               Club("Chievo",               "Serie A",        "Italy",
                                 "Bentegodi",                39211, "counter",        4, "#FFD700", "#0000A0"),
    "Bologna":              Club("Bologna",              "Serie A",        "Italy",
                                 "Renato Dall'Ara",          38279, "balanced",       5, "#D6002B", "#00558C"),
    "SPAL":                 Club("SPAL",                 "Serie A",        "Italy",
                                 "Paolo Mazza",              16134, "direct",         4, "#0F4DA1", "#FFFFFF"),
    "Hellas Verona":        Club("Hellas Verona",        "Serie A",        "Italy",
                                 "Bentegodi",                39211, "balanced",       5, "#194295", "#FFD700"),
    "Crotone":              Club("Crotone",              "Serie A",        "Italy",
                                 "Ezio Scida",               16547, "direct",         3, "#C41E3A", "#000000"),
    "Benevento":            Club("Benevento",            "Serie A",        "Italy",
                                 "Ciro Vigorito",            16867, "direct",         3, "#FFD700", "#8B0000"),

    # ── LIGUE 1 ──────────────────────────────────────────────────────────────
    "Paris Saint-Germain":  Club("Paris Saint-Germain",  "Ligue 1",       "France",
                                 "Parc des Princes",         47929, "direct",        10, "#003370", "#DA291C"),
    "Monaco":               Club("Monaco",               "Ligue 1",       "France",
                                 "Stade Louis II",           18523, "counter",        9, "#CE1126", "#FFFFFF"),
    "Olympique Lyon":       Club("Olympique Lyon",       "Ligue 1",       "France",
                                 "Groupama Stadium",         59186, "balanced",       8, "#FFFFFF", "#DB0032"),
    "Olympique Marseille":  Club("Olympique Marseille",  "Ligue 1",       "France",
                                 "Velodrome",                67394, "high_press",     8, "#2FAEE0", "#FFFFFF"),
    "Lille OSC":            Club("Lille OSC",            "Ligue 1",       "France",
                                 "Pierre-Mauroy Stadium",    50186, "balanced",       6, "#E21E26", "#FFFFFF"),
    "Saint-Etienne":        Club("Saint-Etienne",        "Ligue 1",       "France",
                                 "Geoffroy-Guichard",        41965, "counter",        6, "#007544", "#FFFFFF"),
    "Girondins Bordeaux":   Club("Girondins Bordeaux",   "Ligue 1",       "France",
                                 "Matmut Atlantique",        42115, "balanced",       6, "#002F6C", "#FFFFFF"),
    "Nantes":               Club("Nantes",               "Ligue 1",       "France",
                                 "Beaujoire",                37473, "direct",         5, "#FFD700", "#FFFFFF"),
    "Nice":                 Club("Nice",                  "Ligue 1",       "France",
                                 "Allianz Riviera",          35624, "balanced",       6, "#CF2026", "#000000"),
    "Stade Rennais":        Club("Stade Rennais",        "Ligue 1",       "France",
                                 "Roazhon Park",             29778, "balanced",       5, "#E21E26", "#000000"),
    "Montpellier":          Club("Montpellier",          "Ligue 1",       "France",
                                 "Stade de la Mosson",       32939, "balanced",       5, "#F07800", "#0A1E96"),
    "Guingamp":             Club("Guingamp",             "Ligue 1",       "France",
                                 "Roudourou",                18256, "direct",         4, "#CF2E2E", "#000000"),
    "Angers SCO":           Club("Angers SCO",           "Ligue 1",       "France",
                                 "Stade Jean Bouin",         17771, "counter",        4, "#000000", "#FFFFFF"),
    "Toulouse FC":          Club("Toulouse FC",          "Ligue 1",       "France",
                                 "Stadium Municipal",        37000, "balanced",       4, "#631F8B", "#FFFFFF"),
    "Metz":                 Club("Metz",                 "Ligue 1",       "France",
                                 "Saint-Symphorien",         26000, "direct",         4, "#8B1A1A", "#000000"),
    "Strasbourg":           Club("Strasbourg",           "Ligue 1",       "France",
                                 "Stade de la Meinau",       29230, "balanced",       4, "#1C63B7", "#FFFFFF"),
    "Dijon FCO":            Club("Dijon FCO",            "Ligue 1",       "France",
                                 "Gaston Gerard",            15731, "direct",         3, "#D3192C", "#000000"),
    "Amiens SC":            Club("Amiens SC",            "Ligue 1",       "France",
                                 "Licorne",                  12097, "direct",         3, "#000066", "#FFFFFF"),
    "Caen":                 Club("Caen",                 "Ligue 1",       "France",
                                 "Michel d'Ornano",          20900, "counter",        4, "#003DA5", "#CC0000"),
    "Troyes AC":            Club("Troyes AC",            "Ligue 1",       "France",
                                 "Stade de l'Aube",          20000, "direct",         3, "#003DA5", "#FFFFFF"),
}

CLUB_LIST: List[str] = list(CLUBS.keys())

LEAGUES: Dict[str, List[str]] = {
    "Premier League": [
        "Manchester City", "Manchester United", "Liverpool", "Chelsea", "Arsenal",
        "Tottenham Hotspur", "Leicester City", "Everton", "Burnley", "Newcastle United",
        "Crystal Palace", "Bournemouth", "West Ham United", "Watford", "Brighton",
        "Huddersfield Town", "Southampton", "Swansea City", "Stoke City", "West Brom",
    ],
    "La Liga": [
        "Real Madrid", "FC Barcelona", "Atletico Madrid", "Valencia CF", "Sevilla FC",
        "Villarreal", "Real Betis", "Real Sociedad", "Athletic Club", "Espanyol",
        "Celta Vigo", "Eibar", "Getafe CF", "Deportivo La Coruna", "Las Palmas",
        "Malaga CF", "Alaves", "Leganes", "Levante UD", "Girona FC",
    ],
    "Bundesliga": [
        "Bayern Munich", "Borussia Dortmund", "RB Leipzig", "Bayer Leverkusen",
        "Schalke 04", "Hoffenheim", "Hertha Berlin", "Borussia Moenchengladbach",
        "Eintracht Frankfurt", "Werder Bremen", "Augsburg", "Freiburg", "Wolfsburg",
        "Mainz 05", "VfB Stuttgart", "Hannover 96", "Hamburg SV", "FC Cologne",
    ],
    "Serie A": [
        "Juventus", "Napoli", "Roma", "Inter Milan", "AC Milan", "Lazio", "Atalanta",
        "Fiorentina", "Torino", "Sampdoria", "Cagliari", "Udinese", "Genoa",
        "Sassuolo", "Chievo", "Bologna", "SPAL", "Hellas Verona", "Crotone", "Benevento",
    ],
    "Ligue 1": [
        "Paris Saint-Germain", "Monaco", "Olympique Lyon", "Olympique Marseille",
        "Lille OSC", "Saint-Etienne", "Girondins Bordeaux", "Nantes", "Nice",
        "Stade Rennais", "Montpellier", "Guingamp", "Angers SCO", "Toulouse FC",
        "Metz", "Strasbourg", "Dijon FCO", "Amiens SC", "Caen", "Troyes AC",
    ],
}
