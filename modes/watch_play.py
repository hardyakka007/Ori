"""The Beautiful Game 2026 — Watch the Play (auto-simulation mode)."""

import random
from copy import deepcopy

from data.players import PLAYERS_BY_CLUB
from data.clubs import CLUBS, CLUB_LIST
from engine.match import MatchSimulator, display_match_live
from engine.display import (
    header, section, menu, confirm, pause, clear, table,
    bold, color, player_card_inline,
    CYAN, YELLOW, GREEN, RED, BOLD, RESET, DIM, GOLD
)


def _pick_club(prompt: str) -> str:
    """Display club list and return chosen club name."""
    print(f"\n  {BOLD}{'#':<4} {'Club':<26} {'League':<24} {'Style'}{RESET}")
    print(f"  {'─'*70}")
    for i, name in enumerate(CLUB_LIST, 1):
        club = CLUBS[name]
        print(f"  {YELLOW}{i:>2}{RESET}.  {name:<26} {DIM}{club.league:<24} {club.style.name}{RESET}")
    print()
    while True:
        try:
            idx = int(input(f"  {CYAN}{prompt}: {RESET}")) - 1
            if 0 <= idx < len(CLUB_LIST):
                return CLUB_LIST[idx]
            print(f"  {RED}Enter a number 1–{len(CLUB_LIST)}.{RESET}")
        except (ValueError, EOFError):
            return random.choice(CLUB_LIST)


def run():
    """Watch the Play entry point."""
    clear()
    header("WATCH THE PLAY", 60)
    print(f"  {DIM}Pick two clubs and watch the match auto-simulate as a live feed.{RESET}\n")

    home_name = _pick_club("Home team number")
    away_name = _pick_club("Away team number")

    print(f"\n  {BOLD}{color(home_name, CYAN)}  vs  {color(away_name, CYAN)}{RESET}")
    if not confirm("Kick off?"):
        return

    # Build squads — pad with random players if club roster is thin
    home_squad = deepcopy(PLAYERS_BY_CLUB.get(home_name, []))
    away_squad = deepcopy(PLAYERS_BY_CLUB.get(away_name, []))

    from data.players import PLAYERS
    while len(home_squad) < 6:
        home_squad.append(random.choice(PLAYERS))
    while len(away_squad) < 6:
        away_squad.append(random.choice(PLAYERS))

    home_club = CLUBS[home_name]
    away_club = CLUBS[away_name]

    clear()
    sim = MatchSimulator()
    result = sim.simulate(home_squad, away_squad, home_club, away_club)
    display_match_live(result)

    # Player ratings table
    section("PLAYER RATINGS", 60)
    sorted_ratings = sorted(result.player_ratings.items(), key=lambda x: x[1], reverse=True)
    for name, rating in sorted_ratings[:10]:
        bar = "█" * int(rating)
        c = GREEN if rating >= 8.0 else (YELLOW if rating >= 6.5 else RED)
        print(f"  {name:<28} {color(f'{rating:.1f}', c)}  {DIM}{bar}{RESET}")

    pause()
