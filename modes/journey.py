"""
FIFA 18 — The Journey: Hunter Returns
Chapter-by-chapter story mode following Alex Hunter's European career.
Branching choices affect morale, club, media reputation and FUT rewards.
"""

import random
import json
import os
from copy import deepcopy
from typing import List, Dict, Optional

from data.players import Player, PLAYERS
from data.teams import CLUBS
from engine.match import MatchSimulator, MatchResult, display_match_live
from engine.display import (
    header, section, menu, confirm, pause, clear,
    bold, color, progress_bar,
    CYAN, YELLOW, GREEN, RED, BOLD, RESET, DIM, MAGENTA, WHITE, BG_GREEN
)

JOURNEY_SAVE_FILE = "saves/journey_save.json"

# ── Alex Hunter stats ─────────────────────────────────────────────────────────
HUNTER_BASE = {
    "name": "Alex Hunter",
    "position": "ST",
    "overall": 75,
    "pace": 82,
    "shooting": 76,
    "passing": 72,
    "dribbling": 80,
    "defending": 38,
    "physical": 74,
    "morale": 75,       # 0-100
    "reputation": 50,   # 0-100  media profile
    "goals": 0,
    "assists": 0,
    "apps": 0,
    "club": "Real Madrid",
    "chapter": 1,
}

# ── Chapters ──────────────────────────────────────────────────────────────────
CHAPTERS = [
    {
        "number": 1,
        "title": "European Debut",
        "intro": (
            "Alex Hunter has made the dream move to Europe.\n"
            "After a stunning debut Premier League season, he's joined one of\n"
            "the continent's biggest clubs. The press are watching every move.\n"
            "Can he handle the pressure of the world stage?"
        ),
        "objectives": ["Score in your debut", "Win the match"],
        "club_options": ["Real Madrid", "FC Barcelona", "Juventus", "Bayern Munich"],
        "match": {
            "opponent": "Atletico Madrid",
            "competition": "La Liga",
            "importance": "season opener",
        },
        "choices": [
            {
                "prompt": "The manager asks: 'Do you want to start or build confidence from the bench?'",
                "options": ["Start — show the world", "Bench — observe first"],
                "effects":  [{"rep": +5,  "morale": -5}, {"morale": +10, "rep": -3}],
            }
        ],
        "reward": {"coins": 500, "card": "Alex Hunter 75"},
    },
    {
        "number": 2,
        "title": "Media Storm",
        "intro": (
            "After a slow start, tabloids question whether Alex Hunter was\n"
            "a wise signing. A big interview opportunity arises.\n"
            "What Hunter says next could define his image in Europe."
        ),
        "objectives": ["Score 2 goals", "Maintain morale above 60"],
        "match": {
            "opponent": "Man City",
            "competition": "Champions League",
            "importance": "group stage",
        },
        "choices": [
            {
                "prompt": "Journalist asks: 'Are you as good as Messi and Ronaldo?'",
                "options": ["'I'll let the pitch do the talking.'",
                            "'I believe I can reach that level one day.'",
                            "'That comparison is unfair right now.'"],
                "effects": [{"rep": +10, "morale": +5},
                            {"rep": +5,  "morale": +10},
                            {"rep": -3,  "morale": +8}],
            }
        ],
        "reward": {"coins": 750, "card": "Alex Hunter 77"},
        "celebrity_cameo": "Thierry Henry gives Hunter a mentor chat.",
    },
    {
        "number": 3,
        "title": "Rival Clash",
        "intro": (
            "The biggest match of the season is here.\n"
            "Alex Hunter's club faces their fiercest rival.\n"
            "A hat-trick would silence every critic."
        ),
        "objectives": ["Score a hat-trick", "Win El Clasico / Der Klassiker / Derbi"],
        "match": {
            "opponent": "FC Barcelona",
            "competition": "La Liga",
            "importance": "El Clasico",
        },
        "choices": [
            {
                "prompt": "Before the match: Training ground tension. The captain snaps at Hunter.",
                "options": ["Confront the captain publicly",
                            "Speak to the manager privately",
                            "Ignore it — focus on football"],
                "effects": [{"rep": -5,  "morale": -10},
                            {"rep": +5,  "morale": +5},
                            {"morale": +3}],
            }
        ],
        "reward": {"coins": 1000, "card": "Alex Hunter 80"},
        "celebrity_cameo": "Cristiano Ronaldo gives Hunter a post-match fist-bump.",
    },
    {
        "number": 4,
        "title": "Injury Crisis",
        "intro": (
            "A muscle injury puts Hunter on the sidelines for weeks.\n"
            "The team struggles without him. His comeback match is watched\n"
            "by 500 million people worldwide."
        ),
        "objectives": ["Return from injury", "Score comeback goal"],
        "match": {
            "opponent": "Liverpool",
            "competition": "Champions League",
            "importance": "Round of 16",
        },
        "choices": [
            {
                "prompt": "The physio says you're 90% fit. The manager wants you to play.",
                "options": ["Play — the team needs me", "Rest another week — be 100%"],
                "effects": [{"rep": +8,  "morale": +5,  "overall_boost": -1},
                            {"rep": -3,  "morale": +10, "overall_boost": +2}],
            }
        ],
        "reward": {"coins": 1000, "card": "Alex Hunter IF 83"},
    },
    {
        "number": 5,
        "title": "Trophy Hunt",
        "intro": (
            "The season is reaching its climax.\n"
            "Hunter's club is fighting on three fronts.\n"
            "He must deliver in the biggest moments."
        ),
        "objectives": ["Score in a cup final", "Win a trophy"],
        "match": {
            "opponent": "PSG",
            "competition": "Champions League Semi-Final",
            "importance": "Semi-final first leg",
        },
        "choices": [
            {
                "prompt": "Club president offers a new, improved contract.",
                "options": ["Sign immediately — loyal to the club",
                            "Stall — see if bigger clubs call",
                            "Reject — want a new challenge"],
                "effects": [{"rep": +5,  "morale": +15},
                            {"rep": -5,  "morale": 0},
                            {"rep": 0,   "morale": -10, "club_change": True}],
            }
        ],
        "reward": {"coins": 1500, "card": "Alex Hunter 85"},
        "celebrity_cameo": "Neymar Jr invites Hunter to train with him in Paris.",
    },
    {
        "number": 6,
        "title": "The Final Curtain",
        "intro": (
            "The Champions League Final. The biggest stage in club football.\n"
            "80,000 fans. Hundreds of millions watching worldwide.\n"
            "This is Alex Hunter's defining moment."
        ),
        "objectives": ["Score in the Champions League Final", "Win the Champions League"],
        "match": {
            "opponent": "Bayern Munich",
            "competition": "Champions League Final",
            "importance": "THE FINAL",
        },
        "choices": [
            {
                "prompt": "Hunter gives a pre-match speech in the dressing room.",
                "options": ["Passionate speech — fire up the team",
                            "Stay calm — lead by example"],
                "effects": [{"morale": +15, "rep": +10},
                            {"morale": +5,  "rep": +5}],
            }
        ],
        "reward": {"coins": 3000, "card": "Champions Alex Hunter 89"},
    },
]


class JourneyMode:
    """FIFA 18: The Journey — Hunter Returns story mode."""

    def __init__(self):
        self.hunter = deepcopy(HUNTER_BASE)
        self.sim = MatchSimulator()
        self.completed_chapters: List[int] = []
        self.fut_rewards: List[str] = []

    # ── Entry point ──────────────────────────────────────────────────────────

    def run(self):
        clear()
        header("⚽  THE JOURNEY: HUNTER RETURNS  ⚽", 60)

        if os.path.exists(JOURNEY_SAVE_FILE) and confirm("Load existing Journey save?"):
            self._load()

        self._journey_loop()

    def _journey_loop(self):
        while True:
            clear()
            header(f"THE JOURNEY  |  {self.hunter['club']}  |  "
                   f"Chapter {self.hunter['chapter']}/6", 70)
            self._print_hunter_status()

            options = [
                "Play Next Chapter",
                "Alex Hunter Stats",
                "FUT Rewards Earned",
                "Save & Back",
            ]
            choice = menu("THE JOURNEY HUB", options)

            if choice == 1:
                self._play_chapter()
            elif choice == 2:
                self._hunter_stats()
            elif choice == 3:
                self._show_rewards()
            elif choice == 4:
                self._save()
                break

    def _print_hunter_status(self):
        h = self.hunter
        morale_bar = progress_bar(h["morale"], 100, width=15)
        rep_bar    = progress_bar(h["reputation"], 100, width=15)
        print(f"  Club:        {BOLD}{color(h['club'], CYAN)}{RESET}")
        print(f"  Overall:     {BOLD}{color(str(h['overall']), YELLOW)}{RESET}  "
              f"  Goals: {h['goals']}  Assists: {h['assists']}  Apps: {h['apps']}")
        print(f"  Morale:      {morale_bar}")
        print(f"  Reputation:  {rep_bar}\n")
        if self.hunter["chapter"] > 6:
            print(f"  {BOLD}{YELLOW}★ Story Complete! ★{RESET}\n")

    # ── Chapter playthrough ──────────────────────────────────────────────────

    def _play_chapter(self):
        chapter_num = self.hunter["chapter"]
        if chapter_num > 6:
            print(f"\n  {YELLOW}You've completed The Journey! Check your FUT rewards.{RESET}")
            pause()
            return

        chapter = CHAPTERS[chapter_num - 1]
        clear()
        self._chapter_intro(chapter)

        # Club selection on chapter 1
        if chapter_num == 1:
            self._choose_club(chapter["club_options"])

        # Branching choices
        for choice_data in chapter.get("choices", []):
            self._make_choice(choice_data)

        # Celebrity cameo
        cameo = chapter.get("celebrity_cameo")
        if cameo:
            print(f"\n  {BOLD}{MAGENTA}★ SPECIAL MOMENT:{RESET} {cameo}\n")
            pause()

        # Play the match
        self._chapter_match(chapter)

        # Chapter reward
        self._award_reward(chapter)

        # Complete chapter
        self.completed_chapters.append(chapter_num)
        self.hunter["chapter"] = chapter_num + 1

        if chapter_num == 6:
            self._ending()

    def _chapter_intro(self, chapter: dict):
        print(f"\n  {BOLD}{YELLOW}CHAPTER {chapter['number']}: {chapter['title'].upper()}{RESET}\n")
        print(f"{'─'*60}")
        for line in chapter["intro"].split("\n"):
            print(f"  {line}")
        print(f"{'─'*60}")
        print(f"\n  {BOLD}Objectives:{RESET}")
        for obj in chapter["objectives"]:
            print(f"    {CYAN}►{RESET} {obj}")
        print()
        pause()

    def _choose_club(self, club_options: List[str]):
        clear()
        section("CHOOSE YOUR CLUB")
        print(f"  {DIM}Alex Hunter has earned the move of a lifetime.{RESET}\n")
        for i, club_name in enumerate(club_options, 1):
            club = CLUBS.get(club_name)
            if club:
                print(f"  {BOLD}{YELLOW}{i}{RESET}. {club_name:<22} "
                      f"{DIM}│{RESET} {club.league}  "
                      f"│  Prestige: {'★'*(club.prestige//2)}")
        print()
        while True:
            try:
                choice = int(input(f"  {CYAN}Choose club for Hunter: {RESET}")) - 1
                if 0 <= choice < len(club_options):
                    self.hunter["club"] = club_options[choice]
                    print(f"\n  {GREEN}Alex Hunter signs for {BOLD}{self.hunter['club']}{RESET}!")
                    print(f"  He's unveiled at a press conference, beaming with pride.")
                    pause()
                    break
            except (ValueError, EOFError):
                pass

    def _make_choice(self, choice_data: dict):
        print(f"\n  {BOLD}{WHITE}» DECISION TIME «{RESET}")
        print(f"  {choice_data['prompt']}\n")
        options = choice_data["options"]
        effects = choice_data["effects"]
        for i, opt in enumerate(options, 1):
            print(f"  {BOLD}{YELLOW}{i}{RESET}. {opt}")
        print()
        while True:
            try:
                idx = int(input(f"  {CYAN}Your choice (1-{len(options)}): {RESET}")) - 1
                if 0 <= idx < len(options):
                    effect = effects[idx]
                    self._apply_effect(effect)
                    print(f"\n  {DIM}[Choice recorded]{RESET}")
                    break
            except (ValueError, EOFError):
                pass
        pause()

    def _apply_effect(self, effect: dict):
        if "rep" in effect:
            self.hunter["reputation"] = max(0, min(100,
                self.hunter["reputation"] + effect["rep"]))
        if "morale" in effect:
            self.hunter["morale"] = max(0, min(100,
                self.hunter["morale"] + effect["morale"]))
        if "overall_boost" in effect:
            self.hunter["overall"] = max(60, min(99,
                self.hunter["overall"] + effect["overall_boost"]))
        if effect.get("club_change"):
            new_clubs = [c for c in CLUBS if c != self.hunter["club"]]
            self.hunter["club"] = random.choice(new_clubs)
            print(f"\n  {YELLOW}Hunter decides to move! He joins {BOLD}{self.hunter['club']}{RESET}.")

    def _chapter_match(self, chapter: dict):
        match_info = chapter["match"]
        opponent_name = match_info["opponent"]
        competition = match_info["competition"]
        importance = match_info["importance"]

        clear()
        print(f"\n  {BOLD}{YELLOW}★ {competition.upper()} — {importance.upper()} ★{RESET}")
        print(f"  {self.hunter['club']}  vs  {opponent_name}\n")

        # Build Hunter as a player object
        h = self.hunter
        hunter_player = Player(
            id=999, name=h["name"], nationality="England",
            club=h["club"], position=h["position"],
            overall=h["overall"], pace=h["pace"], shooting=h["shooting"],
            passing=h["passing"], dribbling=h["dribbling"],
            defending=h["defending"], physical=h["physical"],
            age=20, value=50000, wage=50, weak_foot=3, skill_moves=3,
        )

        # Build squads
        from data.players import PLAYERS_BY_CLUB
        my_base = deepcopy(PLAYERS_BY_CLUB.get(self.hunter["club"], []))
        if len(my_base) >= 10:
            my_squad = my_base[:10] + [hunter_player]
        else:
            my_squad = my_base + [hunter_player]

        opp_squad = deepcopy(PLAYERS_BY_CLUB.get(opponent_name,
                             random.sample(PLAYERS, 11)))

        from data.teams import Club
        my_club_obj  = CLUBS.get(self.hunter["club"],
                       Club(self.hunter["club"], "Unknown", "Unknown", "Stadium", 40000,
                            "balanced", 7, 0, 0))
        opp_club_obj = CLUBS.get(opponent_name,
                       Club(opponent_name, "Unknown", "Unknown", "Stadium", 40000,
                            "balanced", 7, 0, 0))

        if not confirm("Play the match?"):
            return

        result = self.sim.simulate(my_squad, opp_squad, my_club_obj, opp_club_obj)
        display_match_live(result)

        # Check Hunter's performance
        hunter_goals = sum(1 for name, _ in result.home_scorers if name == h["name"])
        hunter_rating = result.player_ratings.get(h["name"], 6.5)

        self.hunter["goals"] += hunter_goals
        self.hunter["apps"] += 1

        if hunter_goals > 0:
            print(f"\n  {BOLD}{GREEN}Alex Hunter scored {hunter_goals} goal(s)! "
                  f"Incredible performance!{RESET}")
            self.hunter["morale"] = min(100, self.hunter["morale"] + 10 * hunter_goals)
            self.hunter["reputation"] = min(100, self.hunter["reputation"] + 5 * hunter_goals)
            # Improve Hunter's stats
            self.hunter["overall"] = min(90, self.hunter["overall"] + hunter_goals)
            self.hunter["shooting"] = min(90, self.hunter["shooting"] + 1)
        elif hunter_rating >= 7.0:
            print(f"\n  {YELLOW}Strong performance from Hunter (rated {hunter_rating}).{RESET}")
            self.hunter["morale"] = min(100, self.hunter["morale"] + 5)
        else:
            print(f"\n  {DIM}Hunter had a quiet game (rated {hunter_rating}).{RESET}")
            self.hunter["morale"] = max(0, self.hunter["morale"] - 5)

        # Win/Loss morale impact
        if result.home_score > result.away_score:
            print(f"  {GREEN}A victory for {self.hunter['club']}!{RESET}")
            self.hunter["morale"] = min(100, self.hunter["morale"] + 5)
        elif result.home_score == result.away_score:
            print(f"  {YELLOW}A hard-fought draw.{RESET}")
        else:
            print(f"  {RED}A defeat. The dressing room is quiet.{RESET}")
            self.hunter["morale"] = max(0, self.hunter["morale"] - 8)

        pause()

    def _award_reward(self, chapter: dict):
        reward = chapter.get("reward", {})
        coins = reward.get("coins", 0)
        card = reward.get("card", "")
        print(f"\n  {BOLD}{YELLOW}★ CHAPTER REWARD ★{RESET}")
        if coins:
            print(f"  {GREEN}+{coins} FUT Coins{RESET}")
        if card:
            print(f"  {CYAN}+Player Card: {BOLD}{card}{RESET}")
            self.fut_rewards.append(card)
        pause()

    # ── Ending ────────────────────────────────────────────────────────────────

    def _ending(self):
        clear()
        h = self.hunter
        print(f"""
  {BOLD}{YELLOW}{'═'*60}{RESET}
  {BOLD}{YELLOW}  ★  THE JOURNEY COMPLETE  ★{RESET}
  {BOLD}{YELLOW}{'═'*60}{RESET}

  {DIM}Alex Hunter has completed his European adventure.{RESET}

  {BOLD}Final Stats:{RESET}
    Goals:       {GREEN}{h['goals']}{RESET}
    Apps:        {h['apps']}
    Overall:     {BOLD}{YELLOW}{h['overall']}{RESET}
    Reputation:  {progress_bar(h['reputation'], 100, width=20)}
    Morale:      {progress_bar(h['morale'], 100, width=20)}
    Club:        {BOLD}{CYAN}{h['club']}{RESET}

  {DIM}Hunter's story continues in FIFA 19...{RESET}
""")
        if h["goals"] >= 10:
            print(f"  {BOLD}{MAGENTA}★ ACHIEVEMENT: Top Scorer — 10+ Journey goals! ★{RESET}")
        if h["reputation"] >= 80:
            print(f"  {BOLD}{CYAN}★ ACHIEVEMENT: Media Darling — 80+ Reputation! ★{RESET}")
        pause()

    # ── Side screens ─────────────────────────────────────────────────────────

    def _hunter_stats(self):
        clear()
        h = self.hunter
        header(f"ALEX HUNTER  |  {h['club']}", 60)
        print(f"  Position:   {BOLD}{color(h['position'], CYAN)}{RESET}")
        print(f"  Overall:    {BOLD}{color(str(h['overall']), YELLOW)}{RESET}")
        print()
        stats = ["pace", "shooting", "passing", "dribbling", "defending", "physical"]
        for s in stats:
            bar = progress_bar(h[s], 99, width=20)
            print(f"  {s.capitalize():<12} {bar}  ({h[s]})")
        print()
        print(f"  Goals:      {GREEN}{h['goals']}{RESET}")
        print(f"  Assists:    {h['assists']}")
        print(f"  Appearances:{h['apps']}")
        print(f"  Chapter:    {h['chapter']}/6")
        pause()

    def _show_rewards(self):
        clear()
        header("FUT REWARDS EARNED", 60)
        if not self.fut_rewards:
            print(f"  {DIM}Complete chapters to earn FUT rewards!{RESET}")
        else:
            for r in self.fut_rewards:
                print(f"  {YELLOW}★{RESET} {r}")
        pause()

    # ── Save / Load ──────────────────────────────────────────────────────────

    def _save(self):
        os.makedirs("saves", exist_ok=True)
        data = {
            "hunter": self.hunter,
            "completed_chapters": self.completed_chapters,
            "fut_rewards": self.fut_rewards,
        }
        with open(JOURNEY_SAVE_FILE, "w") as f:
            json.dump(data, f, indent=2)
        print(f"  {GREEN}✓ Journey saved.{RESET}")

    def _load(self):
        with open(JOURNEY_SAVE_FILE) as f:
            data = json.load(f)
        self.hunter = data["hunter"]
        self.completed_chapters = data["completed_chapters"]
        self.fut_rewards = data.get("fut_rewards", [])
        print(f"  {GREEN}✓ Journey loaded — Chapter {self.hunter['chapter']}/6.{RESET}")
        pause()
