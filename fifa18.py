#!/usr/bin/env python3
"""
FIFA 18 — Game Simulator
EA Sports  •  The Journey Continues

Run:  python fifa18.py
"""

import sys
import os

# Ensure project root is on the path
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from engine.display import (
    header, section, menu, confirm, pause, clear, fifa_banner,
    color, bold, CYAN, YELLOW, GREEN, RED, BOLD, RESET, DIM
)
from modes.career  import CareerMode
from modes.fut     import FUTMode
from modes.journey import JourneyMode


def quick_match():
    """Play a one-off exhibition match between two clubs."""
    from data.players import PLAYERS_BY_CLUB
    from data.teams   import CLUBS
    from engine.match import MatchSimulator, display_match_live
    from copy import deepcopy
    import random

    clear()
    header("QUICK MATCH", 60)
    club_list = list(CLUBS.keys())
    for i, c in enumerate(club_list, 1):
        print(f"  {BOLD}{YELLOW}{i:>2}{RESET}. {c}")
    print()

    def pick(prompt):
        while True:
            try:
                idx = int(input(f"  {CYAN}{prompt}: {RESET}")) - 1
                if 0 <= idx < len(club_list):
                    return club_list[idx]
                print(f"  {RED}Invalid.{RESET}")
            except (ValueError, EOFError):
                return random.choice(club_list)

    home_name = pick("Home team number")
    away_name = pick("Away team number")

    home_squad = deepcopy(PLAYERS_BY_CLUB.get(home_name, []))
    away_squad = deepcopy(PLAYERS_BY_CLUB.get(away_name, []))

    if not home_squad or not away_squad:
        from data.players import PLAYERS
        if not home_squad:
            home_squad = random.sample(PLAYERS, 11)
        if not away_squad:
            away_squad = random.sample(PLAYERS, 11)

    home_club = CLUBS[home_name]
    away_club = CLUBS[away_name]

    sim = MatchSimulator()
    result = sim.simulate(home_squad, away_squad, home_club, away_club)
    display_match_live(result)

    # Show player ratings
    section("PLAYER RATINGS")
    sorted_ratings = sorted(result.player_ratings.items(), key=lambda x: x[1], reverse=True)
    for name, rating in sorted_ratings[:10]:
        bar = "█" * int(rating)
        color_code = GREEN if rating >= 8 else (YELLOW if rating >= 6.5 else RED)
        print(f"  {name:<25} {color(f'{rating:.1f}', color_code)}  {DIM}{bar}{RESET}")
    pause()


def view_players():
    """Browse and search the FIFA 18 player database."""
    from data.players import PLAYERS
    from engine.display import table, player_card

    clear()
    header("PLAYER DATABASE", 60)
    options = [
        "Top 20 Overall",
        "Top Strikers",
        "Top Midfielders",
        "Top Defenders / GKs",
        "FUT Icons",
        "Search by Name",
        "Back",
    ]
    choice = menu("Browse Players", options)

    if choice == 7:
        return

    if choice == 1:
        players = sorted(PLAYERS, key=lambda p: p.overall, reverse=True)[:20]
    elif choice == 2:
        players = sorted([p for p in PLAYERS if p.position in ("ST", "LW", "RW", "CAM")],
                         key=lambda p: p.overall, reverse=True)[:15]
    elif choice == 3:
        players = sorted([p for p in PLAYERS if p.position in ("CM", "CDM", "CAM")],
                         key=lambda p: p.overall, reverse=True)[:15]
    elif choice == 4:
        players = sorted([p for p in PLAYERS if p.position in ("CB", "LB", "RB", "GK")],
                         key=lambda p: p.overall, reverse=True)[:15]
    elif choice == 5:
        players = [p for p in PLAYERS if p.is_icon]
    elif choice == 6:
        query = input(f"  {CYAN}Search name: {RESET}").strip().lower()
        players = [p for p in PLAYERS if query in p.name.lower()]
    else:
        return

    clear()
    if not players:
        print(f"  {RED}No players found.{RESET}")
        pause()
        return

    rows = [(p.name, p.position, p.overall, p.age, p.nationality,
             p.club, p.pace, p.shooting, p.passing, p.dribbling)
            for p in players]
    table(["Name","Pos","OVR","Age","Nationality","Club","PAC","SHO","PAS","DRI"],
          rows, [24, 4, 4, 4, 14, 18, 4, 4, 4, 4])

    print()
    try:
        idx = int(input(f"  {CYAN}View detailed card (enter row #, 0 to skip): {RESET}")) - 1
        if 0 <= idx < len(players):
            clear()
            player_card(players[idx])
    except (ValueError, EOFError):
        pass
    pause()


def main_menu():
    """Main game menu."""
    while True:
        clear()
        fifa_banner()
        print(f"  {DIM}Powered by Frostbite Engine  •  EA Sports FIFA 18 Simulator{RESET}\n")

        options = [
            "Career Mode        — Manage a top club",
            "FIFA Ultimate Team — Build your dream squad",
            "The Journey        — Hunter Returns (Story Mode)",
            "Quick Match        — Exhibition game",
            "Player Database    — Browse FIFA 18 players",
            "Quit",
        ]
        choice = menu("MAIN MENU", options)

        if choice == 1:
            CareerMode().run()
        elif choice == 2:
            FUTMode().run()
        elif choice == 3:
            JourneyMode().run()
        elif choice == 4:
            quick_match()
        elif choice == 5:
            view_players()
        elif choice == 6:
            clear()
            print(f"\n  {YELLOW}It's in the game!{RESET}  {DIM}EA SPORTS.{RESET}\n")
            break


if __name__ == "__main__":
    try:
        main_menu()
    except KeyboardInterrupt:
        print(f"\n\n  {DIM}Game exited.{RESET}\n")
