"""The Beautiful Game 2026 — Stadium splash screen with player spotlight."""

import random
from engine.display import (
    RESET, BOLD, DIM, RED, GREEN, YELLOW, BLUE, MAGENTA, CYAN, WHITE, GOLD, color
)


# ── Player card tiers by OVR ─────────────────────────────────────────────────
def _card_style(ovr: int):
    if ovr >= 90:
        return GOLD,   "LEGEND"
    elif ovr >= 85:
        return WHITE,  "SILVER"
    elif ovr >= 80:
        return YELLOW, "GOLD"
    else:
        return CYAN,   "STANDARD"


def _position_stats(player) -> list:
    """Return 3 (label, value) pairs relevant to this player's position."""
    pos = player.position
    if pos == "GK":
        return [("REF", player.defending), ("POS", player.physical), ("KIC", player.passing)]
    elif pos in ("CB", "LB", "RB"):
        return [("DEF", player.defending), ("PHY", player.physical), ("PAC", player.pace)]
    elif pos in ("CDM", "CM"):
        return [("PAS", player.passing), ("DRI", player.dribbling), ("DEF", player.defending)]
    elif pos in ("CAM", "LM", "RM"):
        return [("PAS", player.passing), ("DRI", player.dribbling), ("SHO", player.shooting)]
    else:  # LW, RW, ST, CF
        return [("SHO", player.shooting), ("PAC", player.pace), ("DRI", player.dribbling)]


def _draw_player_card(player, width: int = 78):
    """Render the player spotlight card (top half of splash)."""
    border_color, tier = _card_style(player.overall)
    stats = _position_stats(player)

    inner = width - 4  # inside ║ ║

    club_display = player.club if not player.is_icon else "★ LEGEND ★"

    pos_color = {
        "GK": YELLOW, "CB": BLUE, "LB": BLUE, "RB": BLUE,
        "CDM": GREEN, "CM": GREEN, "CAM": CYAN,
        "LW": MAGENTA, "RW": MAGENTA, "ST": RED,
    }.get(player.position, WHITE)

    title = "  ★  P L A Y E R   S P O T L I G H T  ★"
    print(f"\n{BOLD}{border_color}{title:^{width}}{RESET}")
    print(f"{border_color}  ╔{'═'*(inner)}╗{RESET}")

    # Tier badge + name + position + OVR
    name_line = f"  {BOLD}{color(tier, border_color):<10}  {player.name:<26}{color(player.position, pos_color):<6}  OVR: {color(str(player.overall), border_color)}"
    print(f"{border_color}  ║{RESET}{name_line:<{inner+40}}{border_color}  ║{RESET}")

    # Club + nationality
    club_line = f"  {DIM}{club_display:<30}  {player.nationality}{RESET}"
    print(f"{border_color}  ║{RESET}{club_line:<{inner+10}}{border_color}  ║{RESET}")

    # Divider
    print(f"{border_color}  ║{'─'*inner}║{RESET}")

    # Stats
    stat_parts = "    ".join(
        f"{BOLD}{color(lbl, border_color)}{RESET} {BOLD}{WHITE}{val}{RESET}" for lbl, val in stats
    )
    stat_line = f"  {stat_parts}"
    print(f"{border_color}  ║{RESET}{stat_line:<{inner+60}}{border_color}  ║{RESET}")

    print(f"{border_color}  ╚{'═'*inner}╝{RESET}")


def _draw_stadium(width: int = 78):
    """Render the ASCII stadium pitch (bottom half, above menu)."""
    W = width

    crowd_row = ("♟♙" * (W // 2))[:W]
    stands    = ("▓░" * (W // 2))[:W]

    pitch_inner = W - 6  # inside │ │ borders

    # Top stand
    print(f"  {stands}")
    print(f"  {BOLD}{crowd_row[:W]}{RESET}")
    print(f"  ╠══{'═'*(W-4)}══╣")

    # Pitch rows
    p_rows = []

    # Row 0: touchline
    p_rows.append(f"│  {'─'*(pitch_inner)}  │")

    # Row 1: penalty boxes + scoreboard hint
    left_box  = "┌──────────┐"
    right_box = "┌──────────┐"
    mid_space = " " * (pitch_inner - len(left_box) - len(right_box) - 2)
    p_rows.append(f"│  {left_box}{mid_space}{right_box}  │")

    # Row 2: goal mouths + centre circle top
    goal_l = "│  ╭─────╮  │"
    goal_r = "│  ╭─────╮  │"
    mid_circle = f"{'':^{pitch_inner - len(goal_l) - len(goal_r) + 2}}"
    circle_row = f"│  {goal_l}{'○':^{pitch_inner - len(goal_l) - len(goal_r) + 4}}{goal_r}  │"
    p_rows.append(circle_row)

    # Row 3: centre spot + crossbar
    midline_str = f"│  │{'':^{len(goal_l)-4}}│{'────┼────':^{pitch_inner - len(goal_l)*2 + 2}}│{'':^{len(goal_r)-4}}│  │"
    p_rows.append(midline_str)

    # Row 4: goal mouths bottom
    goal_l2 = "│  ╰─────╯  │"
    goal_r2 = "│  ╰─────╯  │"
    circle_row2 = f"│  {goal_l2}{'○':^{pitch_inner - len(goal_l2) - len(goal_r2) + 4}}{goal_r2}  │"
    p_rows.append(circle_row2)

    # Row 5: penalty boxes bottom
    p_rows.append(f"│  {'└──────────┘'}{' '*(pitch_inner - 24)}{'└──────────┘'}  │")

    # Row 6: touchline
    p_rows.append(f"│  {'─'*(pitch_inner)}  │")

    for row in p_rows:
        print(f"  {GREEN}{row}{RESET}")

    print(f"  ╠══{'═'*(W-4)}══╣")
    print(f"  {BOLD}{crowd_row[:W]}{RESET}")
    print(f"  {stands}")


def _draw_menu(width: int = 78):
    """Render the main menu below the stadium."""
    title = "T H E   B E A U T I F U L   G A M E   2 0 2 6"
    print(f"\n{BOLD}{GOLD}{title:^{width}}{RESET}\n")
    print(f"  {BOLD}{GREEN}  1. Play the Game{RESET}")
    print(f"  {BOLD}{CYAN}  2. Watch the Play{RESET}")
    print(f"  {DIM}  3. Career Mode          [Coming Soon]{RESET}")
    print(f"  {DIM}  4. The Journey          [Coming Soon]{RESET}")
    print(f"  {WHITE}  5. Quit{RESET}")
    print()


def show_splash() -> int:
    """
    Display the full stadium splash screen and return the menu choice (1-5).
    Player card top, stadium art + menu below.
    """
    from data.players import PLAYERS
    import os

    os.system("cls" if os.name == "nt" else "clear")

    # Pick a random player (not an icon for splash — they get a separate path)
    non_icons = [p for p in PLAYERS if not p.is_icon]
    featured = random.choice(non_icons)

    try:
        cols = os.get_terminal_size().columns
    except OSError:
        cols = 80
    width = min(cols - 2, 78)

    _draw_player_card(featured, width)
    _draw_stadium(width)
    _draw_menu(width)

    while True:
        try:
            raw = input(f"  {CYAN}Select option: {RESET}").strip()
            choice = int(raw)
            if 1 <= choice <= 5:
                if choice in (3, 4):
                    print(f"\n  {DIM}Coming soon — check back in v2!{RESET}\n")
                    import time; time.sleep(1.5)
                    return show_splash()
                return choice
            print(f"  {RED}Enter a number 1–5.{RESET}")
        except (ValueError, EOFError):
            print(f"  {RED}Enter a number 1–5.{RESET}")
