"""TBG Pack System — pack definitions, opening logic, and chemistry."""

import random
from dataclasses import dataclass
from typing import List

from data.players import PLAYERS, Player


def _card_tier(overall: int) -> str:
    if overall >= 90:
        return "gold"
    if overall >= 85:
        return "silver"
    return "standard"


def _get_league(club_name: str) -> str:
    from data.clubs import CLUBS
    club = CLUBS.get(club_name)
    return club.league if club else "Unknown"


def _player_to_card(p: Player) -> dict:
    return {
        "id": p.id,
        "name": p.name,
        "club": p.club,
        "position": p.position,
        "nationality": p.nationality,
        "overall": p.overall,
        "pace": p.pace,
        "shooting": p.shooting,
        "passing": p.passing,
        "dribbling": p.dribbling,
        "defending": p.defending,
        "physical": p.physical,
        "tier": _card_tier(p.overall),
        "is_icon": p.is_icon,
    }


@dataclass
class PackDefinition:
    name: str
    cost: int
    cards: int
    gold_guaranteed: int
    description: str


PACKS = {
    "standard": PackDefinition(
        name="Standard Pack",
        cost=750,
        cards=5,
        gold_guaranteed=0,
        description="5 players. No gold guarantee.",
    ),
    "premium": PackDefinition(
        name="Premium Pack",
        cost=2500,
        cards=10,
        gold_guaranteed=1,
        description="10 players. 1 gold guaranteed.",
    ),
    "elite": PackDefinition(
        name="Elite Pack",
        cost=7500,
        cards=15,
        gold_guaranteed=3,
        description="15 players. 3 gold guaranteed.",
    ),
}


def open_pack(pack_key: str) -> List[dict]:
    """Open a pack and return a list of player card dicts."""
    pack = PACKS.get(pack_key)
    if not pack:
        return []

    gold_pool    = [p for p in PLAYERS if p.overall >= 90]
    silver_pool  = [p for p in PLAYERS if 85 <= p.overall < 90]
    std_pool     = [p for p in PLAYERS if p.overall < 85]

    result = []
    gold_given = 0

    for i in range(pack.cards):
        remaining    = pack.cards - i
        gold_needed  = pack.gold_guaranteed - gold_given

        if gold_needed > 0 and remaining <= gold_needed:
            pool = gold_pool or PLAYERS
        else:
            roll = random.random()
            if roll < 0.05 and gold_pool:
                pool = gold_pool
            elif roll < 0.25 and silver_pool:
                pool = silver_pool
            else:
                pool = std_pool or PLAYERS

        player = random.choice(pool)
        if player.overall >= 90:
            gold_given += 1

        result.append(_player_to_card(player))

    return result


def calculate_chemistry(squad: List[dict]) -> int:
    """
    Chemistry 0-110.  Each player scores 0-10 based on club/league links.
    Max possible = 110 (11 × 10).
    """
    if len(squad) < 11:
        return 0

    players = squad[:11]
    clubs   = [p.get("club", "") for p in players]
    leagues = [_get_league(p.get("club", "")) for p in players]

    total = 0
    for i in range(11):
        club   = clubs[i]
        league = leagues[i]
        club_links   = sum(1 for j, c in enumerate(clubs)   if j != i and c == club)
        league_links = sum(1 for j, l in enumerate(leagues) if j != i and l == league)

        if club_links >= 2:
            chem = 10
        elif club_links == 1:
            chem = 8
        elif league_links >= 2:
            chem = 6
        elif league_links == 1:
            chem = 4
        else:
            chem = 2

        total += chem

    return min(110, total)


def calculate_squad_ovr(squad: List[dict]) -> int:
    """Weighted average OVR for up to 11 players."""
    if not squad:
        return 0
    overalls = [p.get("overall", 70) for p in squad[:11]]
    return round(sum(overalls) / len(overalls))


def packs_info() -> List[dict]:
    return [
        {
            "key": k,
            "name": v.name,
            "cost": v.cost,
            "cards": v.cards,
            "gold_guaranteed": v.gold_guaranteed,
            "description": v.description,
        }
        for k, v in PACKS.items()
    ]
