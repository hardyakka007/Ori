"""
data/players/__init__.py
Player dataclass + aggregated roster from all league modules.
"""

from dataclasses import dataclass, field
from typing import List


@dataclass
class Player:
    id: int
    name: str
    nationality: str
    club: str
    position: str       # GK CB LB RB CDM CM CAM LW RW ST
    overall: int
    pace: int
    shooting: int
    passing: int
    dribbling: int
    defending: int
    physical: int
    age: int
    value: int          # thousands EUR
    wage: int           # thousands EUR/week
    weak_foot: int      # 1-5
    skill_moves: int    # 1-5
    is_icon: bool = False
    contract_years: int = 2
    fitness: int = 100
    morale: int = 75
    # Face attributes used by PlayerFace.vue SVG portrait generator
    face_skin: int = 2           # 1=very light 2=light 3=medium 4=tan/olive 5=dark
    face_hair: str = "brown"     # black brown blonde red grey bald
    face_style: str = "short"    # short curly shaved long afro mohawk bald
    face_beard: str = "clean"    # clean stubble beard goatee

    @property
    def attack_rating(self) -> float:
        if self.position == "GK":
            return float(self.overall)
        w = {"pace": 0.15, "shooting": 0.35, "passing": 0.20, "dribbling": 0.30}
        return (self.pace * w["pace"] + self.shooting * w["shooting"] +
                self.passing * w["passing"] + self.dribbling * w["dribbling"])

    @property
    def defense_rating(self) -> float:
        if self.position == "GK":
            return float(self.overall)
        w = {"pace": 0.15, "defending": 0.50, "physical": 0.35}
        return (self.pace * w["pace"] + self.defending * w["defending"] +
                self.physical * w["physical"])

    def to_dict(self) -> dict:
        return {k: getattr(self, k) for k in [
            "id", "name", "nationality", "club", "position", "overall",
            "pace", "shooting", "passing", "dribbling", "defending", "physical",
            "age", "value", "wage", "weak_foot", "skill_moves", "is_icon",
            "contract_years", "fitness", "morale",
            "face_skin", "face_hair", "face_style", "face_beard",
        ]}

    @classmethod
    def from_dict(cls, d: dict) -> "Player":
        return cls(**{k: v for k, v in d.items() if k in cls.__dataclass_fields__})


FORMATIONS = {
    "4-3-3":   ["GK", "RB", "CB", "CB", "LB", "CM", "CM", "CM", "RW", "LW", "ST"],
    "4-2-3-1": ["GK", "RB", "CB", "CB", "LB", "CDM", "CDM", "CAM", "RW", "LW", "ST"],
    "4-4-2":   ["GK", "RB", "CB", "CB", "LB", "CM", "CM", "CM", "CM", "ST", "ST"],
}

# ── Aggregate all league rosters ─────────────────────────────────────────────
from .premier_league import PL_PLAYERS        # noqa: E402
from .la_liga        import LALIGA_PLAYERS    # noqa: E402
from .bundesliga     import BUNDESLIGA_PLAYERS# noqa: E402
from .serie_a        import SERIEA_PLAYERS    # noqa: E402
from .ligue_1        import LIGUE1_PLAYERS    # noqa: E402
from .icons          import ICON_PLAYERS      # noqa: E402

PLAYERS: List[Player] = (
    PL_PLAYERS + LALIGA_PLAYERS + BUNDESLIGA_PLAYERS +
    SERIEA_PLAYERS + LIGUE1_PLAYERS + ICON_PLAYERS
)

PLAYER_BY_ID = {p.id: p for p in PLAYERS}

PLAYERS_BY_CLUB: dict = {}
for _p in PLAYERS:
    PLAYERS_BY_CLUB.setdefault(_p.club, []).append(_p)
