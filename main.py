#!/usr/bin/env python3
"""
The Beautiful Game 2026
Run: python main.py
"""

import sys
import os

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from screens.stadium import show_splash
from engine.display import clear


def main():
    while True:
        choice = show_splash()

        if choice == 1:
            from modes.play_game import run
            run()

        elif choice == 2:
            from modes.watch_play import run
            run()

        elif choice == 5:
            clear()
            print("\n  Thanks for playing The Beautiful Game 2026.\n")
            break


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n\n  Game exited.\n")
