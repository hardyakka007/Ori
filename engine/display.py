"""The Beautiful Game 2026 — Terminal display helpers."""

import os
import shutil

# ANSI colour codes
RESET   = "\033[0m"
BOLD    = "\033[1m"
DIM     = "\033[2m"
RED     = "\033[91m"
GREEN   = "\033[92m"
YELLOW  = "\033[93m"
BLUE    = "\033[94m"
MAGENTA = "\033[95m"
CYAN    = "\033[96m"
WHITE   = "\033[97m"
GOLD    = "\033[33m"
BG_BLUE  = "\033[44m"
BG_GREEN = "\033[42m"


def color(text, code: str) -> str:
    return f"{code}{text}{RESET}"


def bold(text) -> str:
    return f"{BOLD}{text}{RESET}"


def header(title: str, width: int = 60):
    pad = (width - len(title) - 2) // 2
    print(f"\n{BG_BLUE}{BOLD}{'═'*width}{RESET}")
    print(f"{BG_BLUE}{BOLD}{' '*pad} {title} {' '*pad}{RESET}")
    print(f"{BG_BLUE}{BOLD}{'═'*width}{RESET}\n")


def section(title: str, width: int = 60):
    print(f"\n{CYAN}{BOLD}{'─'*width}{RESET}")
    print(f"{CYAN}{BOLD}  {title}{RESET}")
    print(f"{CYAN}{'─'*width}{RESET}")


def table(headers: list, rows: list, col_widths: list = None):
    if not rows:
        print(f"  {DIM}(no data){RESET}")
        return
    if col_widths is None:
        col_widths = [max(len(str(h)), max(len(str(r[i])) for r in rows))
                      for i, h in enumerate(headers)]
    sep = "  ".join(f"{h:<{w}}" for h, w in zip(headers, col_widths))
    print(f"  {BOLD}{sep}{RESET}")
    print(f"  {'  '.join('─'*w for w in col_widths)}")
    for row in rows:
        line = "  ".join(f"{str(v):<{w}}" for v, w in zip(row, col_widths))
        print(f"  {line}")


def menu(title: str, options: list) -> int:
    section(title)
    for i, opt in enumerate(options, 1):
        print(f"  {BOLD}{YELLOW}{i}{RESET}. {opt}")
    print()
    while True:
        try:
            choice = int(input(f"  {CYAN}Enter choice (1-{len(options)}): {RESET}"))
            if 1 <= choice <= len(options):
                return choice
            print(f"  {RED}Invalid choice. Try again.{RESET}")
        except (ValueError, EOFError):
            print(f"  {RED}Please enter a number.{RESET}")


def confirm(prompt: str) -> bool:
    ans = input(f"  {YELLOW}{prompt} (y/n): {RESET}").strip().lower()
    return ans == "y"


def pause():
    input(f"\n  {DIM}Press Enter to continue...{RESET}")


def clear():
    os.system("cls" if os.name == "nt" else "clear")


def progress_bar(current: int, total: int, label: str = "", width: int = 30) -> str:
    filled = int(width * current / total) if total > 0 else 0
    bar = f"{GREEN}{'█'*filled}{DIM}{'░'*(width-filled)}{RESET}"
    pct = f"{int(100*current/total):>3}%" if total > 0 else "  0%"
    return f"[{bar}] {pct} {label}"


def rating_stars(rating: int, max_rating: int = 5) -> str:
    return f"{YELLOW}{'★'*rating}{'☆'*(max_rating-rating)}{RESET}"


def player_card_inline(player, short: bool = False):
    """Print a styled player card inline (non-curses)."""
    pos_color = {
        "GK": YELLOW, "CB": BLUE, "LB": BLUE, "RB": BLUE,
        "CDM": GREEN, "CM": GREEN, "CAM": CYAN,
        "LW": MAGENTA, "RW": MAGENTA, "ST": RED,
    }.get(player.position, WHITE)

    if short:
        print(f"  {BOLD}{player.name:<25}{RESET} "
              f"{color(player.position, pos_color):<8} "
              f"OVR:{BOLD}{color(str(player.overall), YELLOW)}{RESET}  "
              f"Age:{player.age}")
        return

    print(f"\n  ┌{'─'*38}┐")
    print(f"  │ {BOLD}{color(str(player.overall), YELLOW)} {color(player.position, pos_color)}"
          f"  {player.name:<25}{RESET}│")
    print(f"  │  {player.nationality:<15} {player.club:<20} │")
    print(f"  ├{'─'*38}┤")
    print(f"  │  PAC {player.pace:<3}  SHO {player.shooting:<3}  PAS {player.passing:<3}   │")
    print(f"  │  DRI {player.dribbling:<3}  DEF {player.defending:<3}  PHY {player.physical:<3}   │")
    print(f"  │  Skill {rating_stars(player.skill_moves)}  Weak Foot {rating_stars(player.weak_foot)}  │")
    if player.is_icon:
        print(f"  │         {color('★ LEGEND ★', GOLD)}                  │")
    print(f"  └{'─'*38}┘")


def tbg_banner():
    """The Beautiful Game 2026 — main title banner."""
    print(f"""
{BOLD}{GOLD}
  ████████╗██████╗  ██████╗
  ╚══██╔══╝██╔══██╗██╔════╝
     ██║   ██████╔╝██║  ███╗
     ██║   ██╔══██╗██║   ██║
     ██║   ██████╔╝╚██████╔╝
     ╚═╝   ╚═════╝  ╚═════╝
{RESET}{WHITE}     THE BEAUTIFUL GAME  {GOLD}2026{RESET}
""")
