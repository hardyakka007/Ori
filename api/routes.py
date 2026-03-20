"""The Beautiful Game 2026 — REST API routes."""

import random
from flask import Blueprint, jsonify, request

from data.players import PLAYERS, PLAYERS_BY_CLUB, Player
from data.clubs import CLUBS, CLUB_LIST
from engine.match import MatchSimulator

api_bp = Blueprint("api", __name__, url_prefix="/api")

_SIMULATOR = MatchSimulator()


# ── Helpers ────────────────────────────────────────────────────────────────────

SPOTLIGHT_STATS = {
    "GK":  ["reflexes", "positioning", "kicking"],
    "CB":  ["defending", "physical", "pace"],
    "LB":  ["defending", "physical", "pace"],
    "RB":  ["defending", "physical", "pace"],
    "CDM": ["defending", "passing", "physical"],
    "CM":  ["passing", "dribbling", "vision"],
    "CAM": ["passing", "dribbling", "shooting"],
    "LW":  ["shooting", "pace", "dribbling"],
    "RW":  ["shooting", "pace", "dribbling"],
    "ST":  ["shooting", "pace", "dribbling"],
}

STAT_LABELS = {
    "shooting":    lambda p: ("SHO", p.shooting),
    "pace":        lambda p: ("PAC", p.pace),
    "dribbling":   lambda p: ("DRI", p.dribbling),
    "passing":     lambda p: ("PAS", p.passing),
    "defending":   lambda p: ("DEF", p.defending),
    "physical":    lambda p: ("PHY", p.physical),
    "reflexes":    lambda p: ("REF", p.overall),
    "positioning": lambda p: ("POS", p.defending),
    "kicking":     lambda p: ("KIC", p.passing),
    "vision":      lambda p: ("VIS", p.passing),
}


def _card_tier(overall: int) -> str:
    if overall >= 90:
        return "gold"
    if overall >= 85:
        return "silver"
    return "standard"


def _player_spotlight_dict(p: Player) -> dict:
    stat_keys = SPOTLIGHT_STATS.get(p.position, ["shooting", "pace", "dribbling"])
    stats = []
    for key in stat_keys:
        label, val = STAT_LABELS[key](p)
        stats.append({"label": label, "value": val})

    return {
        "id": p.id,
        "name": p.name,
        "club": p.club,
        "position": p.position,
        "nationality": p.nationality,
        "overall": p.overall,
        "tier": _card_tier(p.overall),
        "stats": stats,
        "is_icon": p.is_icon,
        "face_url": f"/assets/faces/{p.id}.png",
    }


def _get_squad(club_name: str) -> list:
    """Return up to 11 players for a club, padding with generated fillers if needed."""
    real = list(PLAYERS_BY_CLUB.get(club_name, []))
    if len(real) >= 11:
        return real[:11]

    # Build a 4-3-3 formation
    formation_positions = ["GK", "RB", "CB", "CB", "LB", "CM", "CM", "CM", "RW", "LW", "ST"]
    squad: list[Player] = []
    used_positions: dict[str, int] = {}

    # Try to fill slots from real players by position
    remaining_real = list(real)
    for pos in formation_positions:
        match = next((p for p in remaining_real if p.position == pos), None)
        if match is None:
            compat = {
                "GK": [], "RB": ["LB"], "LB": ["RB"], "CB": [],
                "CM": ["CAM", "CDM"], "CAM": ["CM"], "CDM": ["CM"],
                "RW": ["LW", "CAM", "ST"], "LW": ["RW", "CAM", "ST"],
                "ST": ["LW", "RW", "CAM"],
            }
            for alt in compat.get(pos, []):
                match = next((p for p in remaining_real if p.position == alt), None)
                if match:
                    break

        if match:
            squad.append(match)
            remaining_real.remove(match)
        else:
            ovr = 72 + random.randint(-3, 3)
            used_positions[pos] = used_positions.get(pos, 0) + 1
            num = used_positions[pos]
            filler = Player(
                id=9000 + len(squad),
                name=f"{club_name[:3].upper()} #{num} ({pos})",
                nationality="Unknown",
                club=club_name,
                position=pos,
                overall=ovr,
                pace=70, shooting=68, passing=70, dribbling=68,
                defending=70, physical=72, age=24,
                value=5000, wage=5, weak_foot=3, skill_moves=2,
            )
            squad.append(filler)

    return squad


def _simulate_result(home_name: str, away_name: str) -> dict:
    """Shared simulation helper used by multiple endpoints."""
    home_club  = CLUBS[home_name]
    away_club  = CLUBS[away_name]
    home_squad = _get_squad(home_name)
    away_squad = _get_squad(away_name)

    result = _SIMULATOR.simulate(home_squad, away_squad, home_club, away_club, verbose=False)

    events = [
        {
            "minute": e.minute,
            "type": e.event_type,
            "team": e.team,
            "player": e.player_name,
            "detail": e.detail,
        }
        for e in result.events
    ]

    ratings_list = [
        {
            "player": name,
            "rating": rating,
            "team": _team_for_player(name, home_squad, away_squad),
        }
        for name, rating in sorted(result.player_ratings.items(), key=lambda x: -x[1])
    ]

    return {
        "home": result.home_team,
        "away": result.away_team,
        "score": {"home": result.home_score, "away": result.away_score},
        "scorers": [
            *[{"team": "home", "player": n, "minute": m} for n, m in result.home_scorers],
            *[{"team": "away", "player": n, "minute": m} for n, m in result.away_scorers],
        ],
        "events": events,
        "possession": {"home": result.home_possession, "away": result.away_possession},
        "shots": {"home": result.home_shots, "away": result.away_shots},
        "shots_on_target": {
            "home": result.home_shots_on_target,
            "away": result.away_shots_on_target,
        },
        "ratings": ratings_list,
        "motm": {
            "player": result.motm,
            "rating": result.player_ratings.get(result.motm, 0),
            "face_url": _face_url_for_player(result.motm),
        },
    }


# ── Existing Endpoints ─────────────────────────────────────────────────────────

@api_bp.route("/spotlight")
def spotlight():
    player = random.choice(PLAYERS)
    return jsonify(_player_spotlight_dict(player))


@api_bp.route("/clubs")
def clubs():
    result = []
    for name, club in CLUBS.items():
        result.append({
            "name": club.name,
            "league": club.league,
            "country": club.country,
            "stadium": club.stadium,
            "prestige": club.prestige,
            "style": club.style.name,
            "style_desc": club.style.description,
        })
    return jsonify(result)


@api_bp.route("/simulate", methods=["POST"])
def simulate():
    body = request.get_json(force=True)
    home_name = body.get("home")
    away_name = body.get("away")

    if home_name not in CLUBS or away_name not in CLUBS:
        return jsonify({"error": "Invalid club name"}), 400

    return jsonify(_simulate_result(home_name, away_name))


@api_bp.route("/teams/<club_name>")
def team_data(club_name: str):
    from urllib.parse import unquote
    club_name = unquote(club_name)

    if club_name not in CLUBS:
        return jsonify({"error": "Club not found"}), 404

    club  = CLUBS[club_name]
    squad = _get_squad(club_name)

    return jsonify({
        "club": {
            "name": club.name,
            "style": club.style.name,
            "prestige": club.prestige,
        },
        "players": [p.to_dict() for p in squad],
    })


# ── Player Database ────────────────────────────────────────────────────────────

@api_bp.route("/players")
def players():
    """
    Full player list with optional filters:
      ?position=ST&club=Munich+FC&league=German+Top+Flight
      &min_ovr=80&max_ovr=99&search=Ronaldo&sort=overall
    """
    pos_filter    = request.args.get("position", "").strip()
    club_filter   = request.args.get("club", "").strip()
    league_filter = request.args.get("league", "").strip()
    min_ovr       = int(request.args.get("min_ovr", 0))
    max_ovr       = int(request.args.get("max_ovr", 99))
    search        = request.args.get("search", "").strip().lower()
    sort_key      = request.args.get("sort", "overall").strip()

    result = []
    for p in PLAYERS:
        if pos_filter and not _pos_matches(p.position, pos_filter):
            continue
        if club_filter and p.club != club_filter:
            continue
        if league_filter:
            club_obj = CLUBS.get(p.club)
            if not club_obj or club_obj.league != league_filter:
                continue
        if p.overall < min_ovr or p.overall > max_ovr:
            continue
        if search and search not in p.name.lower():
            continue
        result.append(p.to_dict())

    sort_map = {
        "overall": lambda d: -d["overall"],
        "name":    lambda d: d["name"],
        "pace":    lambda d: -d["pace"],
        "shooting":  lambda d: -d["shooting"],
        "passing":   lambda d: -d["passing"],
        "dribbling": lambda d: -d["dribbling"],
        "defending": lambda d: -d["defending"],
        "physical":  lambda d: -d["physical"],
    }
    key_fn = sort_map.get(sort_key, sort_map["overall"])
    result.sort(key=key_fn)

    return jsonify(result)


def _pos_matches(player_pos: str, filter_pos: str) -> bool:
    groups = {
        "GK":  ["GK"],
        "DEF": ["CB", "LB", "RB"],
        "MID": ["CDM", "CM", "CAM"],
        "ATT": ["LW", "RW", "ST"],
    }
    if filter_pos in groups:
        return player_pos in groups[filter_pos]
    return player_pos == filter_pos


# ── League Season Simulation ───────────────────────────────────────────────────

@api_bp.route("/league/<path:league_name>")
def league_season(league_name: str):
    """Simulate a full season for every club in the given league."""
    from engine.career import generate_fixtures, calculate_standings, get_league_clubs

    club_names = get_league_clubs(league_name)
    if len(club_names) < 2:
        return jsonify({"error": f"No clubs found for league: {league_name}"}), 404

    fixtures = generate_fixtures(club_names)

    # Simulate every match
    scorer_tally: dict[str, int] = {}
    results = []

    for f in fixtures:
        if f.home not in CLUBS or f.away not in CLUBS:
            f.home_score = 0
            f.away_score = 0
            f.played = True
            continue

        res = _simulate_result(f.home, f.away)
        f.home_score = res["score"]["home"]
        f.away_score = res["score"]["away"]
        f.played = True

        # Track top scorers
        for scorer in res["scorers"]:
            name = scorer["player"]
            scorer_tally[name] = scorer_tally.get(name, 0) + 1

        results.append({
            "matchday": f.matchday,
            "home": f.home,
            "away": f.away,
            "home_score": f.home_score,
            "away_score": f.away_score,
        })

    standings = calculate_standings(club_names, fixtures)

    top_scorers = sorted(
        [{"player": name, "goals": g} for name, g in scorer_tally.items()],
        key=lambda x: -x["goals"],
    )[:5]

    champion = standings[0].club if standings else ""
    top_scorer = top_scorers[0]["player"] if top_scorers else ""

    # Golden Glove — fewest goals conceded (GK's club)
    gk_standings = sorted(standings, key=lambda r: r.ga)
    golden_glove_club = gk_standings[0].club if gk_standings else ""
    gk = next((p for p in PLAYERS_BY_CLUB.get(golden_glove_club, []) if p.position == "GK"), None)
    golden_glove = gk.name if gk else golden_glove_club

    return jsonify({
        "league": league_name,
        "standings": [r.to_dict() for r in standings],
        "top_scorers": top_scorers,
        "awards": {
            "champion": champion,
            "top_scorer": top_scorer,
            "golden_glove": golden_glove,
        },
        "results": results,
    })


# ── Career Mode ────────────────────────────────────────────────────────────────

@api_bp.route("/career/fixtures/<path:league_name>")
def career_fixtures(league_name: str):
    """Return the fixture schedule for a league (unsimulated)."""
    from engine.career import generate_fixtures, get_league_clubs

    club_names = get_league_clubs(league_name)
    if not club_names:
        return jsonify({"error": f"No clubs found for: {league_name}"}), 404

    fixtures = generate_fixtures(club_names)
    return jsonify({
        "league": league_name,
        "clubs": club_names,
        "fixtures": [f.to_dict() for f in fixtures],
    })


@api_bp.route("/career/simulate", methods=["POST"])
def career_simulate():
    """Simulate a single career fixture. Same as /simulate but explicit for career use."""
    body = request.get_json(force=True)
    home_name = body.get("home")
    away_name = body.get("away")

    if home_name not in CLUBS or away_name not in CLUBS:
        return jsonify({"error": "Invalid club name"}), 400

    return jsonify(_simulate_result(home_name, away_name))


# ── The Journey ────────────────────────────────────────────────────────────────

@api_bp.route("/journey/chapter/<int:n>")
def journey_chapter(n: int):
    from engine.journey import get_chapter, chapter_to_dict
    chapter = get_chapter(n)
    if not chapter:
        return jsonify({"error": f"Chapter {n} not found"}), 404
    return jsonify(chapter_to_dict(chapter))


@api_bp.route("/journey/result", methods=["POST"])
def journey_result():
    """
    Simulate the chapter's match and return result + narrative.
    Body: { "chapter": 1, "won": true/false }
    The match is simulated server-side; won/loss is determined by the client
    after playing interactively or via watch-play simulation.
    """
    body = request.get_json(force=True)
    chapter_num = body.get("chapter", 1)
    won = bool(body.get("won", False))

    from engine.journey import get_chapter, chapter_to_dict
    chapter = get_chapter(chapter_num)
    if not chapter:
        return jsonify({"error": "Chapter not found"}), 404

    # Simulate the match
    if chapter.home_club in CLUBS and chapter.away_club in CLUBS:
        match_data = _simulate_result(chapter.home_club, chapter.away_club)
        home_score = match_data["score"]["home"]
        away_score = match_data["score"]["away"]
        # Determine win from Ori's perspective
        if chapter.ori_is_home:
            won = home_score > away_score
        else:
            won = away_score > home_score
    else:
        match_data = {}

    narrative = chapter.post_win if won else chapter.post_loss
    next_chapter = chapter_num + 1 if chapter_num < 5 else None

    return jsonify({
        "chapter": chapter_num,
        "won": won,
        "narrative": narrative,
        "ori_ovr_gain": chapter.ori_ovr_gain if won else 0,
        "match": match_data,
        "next_chapter": next_chapter,
    })


# ── TBG Pack System ────────────────────────────────────────────────────────────

@api_bp.route("/packs")
def packs_list():
    from engine.ultimate_team import packs_info
    return jsonify(packs_info())


@api_bp.route("/pack/open", methods=["POST"])
def pack_open():
    body = request.get_json(force=True)
    pack_key = body.get("pack", "standard")

    from engine.ultimate_team import open_pack
    cards = open_pack(pack_key)
    if not cards:
        return jsonify({"error": "Unknown pack type"}), 400

    return jsonify({"pack": pack_key, "cards": cards})


@api_bp.route("/pack/chemistry", methods=["POST"])
def pack_chemistry():
    body = request.get_json(force=True)
    squad = body.get("squad", [])

    from engine.ultimate_team import calculate_chemistry, calculate_squad_ovr
    return jsonify({
        "chemistry": calculate_chemistry(squad),
        "squad_ovr": calculate_squad_ovr(squad),
    })


# ── Available Leagues ──────────────────────────────────────────────────────────

@api_bp.route("/leagues")
def leagues_list():
    """Return all unique league names."""
    leagues = sorted(set(club.league for club in CLUBS.values()))
    return jsonify(leagues)


# ── Private helpers ────────────────────────────────────────────────────────────

def _team_for_player(name: str, home_squad, away_squad) -> str:
    for p in home_squad:
        if p.name == name:
            return "home"
    return "away"


def _face_url_for_player(name: str) -> str:
    for p in PLAYERS:
        if p.name == name:
            return f"/assets/faces/{p.id}.png"
    return ""
