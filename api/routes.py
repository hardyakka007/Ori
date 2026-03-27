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
        "face_skin": p.face_skin,
        "face_hair": p.face_hair,
        "face_style": p.face_style,
        "face_beard": p.face_beard,
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
            # Try compatible positions
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
            # Generate a filler player
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


# ── Endpoints ──────────────────────────────────────────────────────────────────

@api_bp.route("/spotlight")
def spotlight():
    """Return a random player for the splash screen spotlight card."""
    player = random.choice(PLAYERS)
    return jsonify(_player_spotlight_dict(player))


@api_bp.route("/clubs")
def clubs():
    """Return the full club list with metadata."""
    result = []
    for name, club in CLUBS.items():
        result.append({
            "name": club.name,
            "league": club.league,
            "country": club.country,
            "stadium": club.stadium,
            "capacity": club.capacity,
            "prestige": club.prestige,
            "style": club.style.name,
            "style_desc": club.style.description,
            "primary_color": club.primary_color,
            "secondary_color": club.secondary_color,
        })
    return jsonify(result)


@api_bp.route("/simulate", methods=["POST"])
def simulate():
    """Run a Watch the Play simulation between two clubs."""
    body = request.get_json(force=True)
    home_name = body.get("home")
    away_name = body.get("away")

    if home_name not in CLUBS or away_name not in CLUBS:
        return jsonify({"error": "Invalid club name"}), 400

    home_club = CLUBS[home_name]
    away_club = CLUBS[away_name]
    home_squad = _get_squad(home_name)
    away_squad = _get_squad(away_name)

    result = _SIMULATOR.simulate(home_squad, away_squad, home_club, away_club, verbose=False)

    # Serialize
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
        {"player": name, "rating": rating, "team": _team_for_player(name, home_squad, away_squad)}
        for name, rating in sorted(result.player_ratings.items(), key=lambda x: -x[1])
    ]

    return jsonify({
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
    })


@api_bp.route("/teams/<club_name>")
def team_data(club_name: str):
    """Return squad data for Play the Game team selection."""
    # URL-decode the club name
    from urllib.parse import unquote
    club_name = unquote(club_name)

    if club_name not in CLUBS:
        return jsonify({"error": "Club not found"}), 404

    club = CLUBS[club_name]
    squad = _get_squad(club_name)

    return jsonify({
        "club": {
            "name": club.name,
            "style": club.style.name,
            "prestige": club.prestige,
            "primary_color": club.primary_color,
            "secondary_color": club.secondary_color,
        },
        "players": [p.to_dict() for p in squad],
    })


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
