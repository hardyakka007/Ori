"""
FIFA 18 Career Mode
Manager Career: transfer negotiations, season progression, training, table standings.
"""

import random
import json
import os
from copy import deepcopy
from typing import List, Dict, Optional, Tuple

from data.players import Player, PLAYERS, PLAYERS_BY_CLUB, CLUBS as CLUB_NAMES, FORMATIONS
from data.teams import CLUBS, LEAGUES
from engine.match import MatchSimulator, MatchResult, display_match_live
from engine.display import (
    header, section, menu, confirm, pause, clear, table,
    bold, color, player_card, progress_bar,
    CYAN, YELLOW, GREEN, RED, BOLD, RESET, DIM, MAGENTA
)


SAVE_FILE = "saves/career_save.json"




class Season:
    def __init__(self, year: int):
        self.year = year
        self.matchweek = 0
        self.results: List[MatchResult] = []


class StandingsEntry:
    def __init__(self, club: str):
        self.club = club
        self.played = 0
        self.wins = 0
        self.draws = 0
        self.losses = 0
        self.gf = 0
        self.ga = 0

    @property
    def points(self) -> int:
        return self.wins * 3 + self.draws

    @property
    def gd(self) -> int:
        return self.gf - self.ga

    def to_dict(self):
        return self.__dict__

    @classmethod
    def from_dict(cls, d):
        e = cls(d["club"])
        for k, v in d.items():
            setattr(e, k, v)
        return e


class CareerMode:
    """Full FIFA 18 Manager Career Mode."""

    SEASON_LENGTH = 10  # matches per season (condensed for playability)

    def __init__(self):
        self.sim = MatchSimulator()
        self.club_name: str = ""
        self.squad: List[Player] = []
        self.formation: str = "4-3-3"
        self.season: int = 2017
        self.matchweek: int = 0
        self.budget: int = 0
        self.wage_budget: int = 0
        self.standings: Dict[str, StandingsEntry] = {}
        self.trophies: List[str] = []
        self.transfer_window_open: bool = True
        self.season_results: List[MatchResult] = []

    # ── Entry point ─────────────────────────────────────────────────────────

    def run(self):
        clear()
        header("⚽  CAREER MODE  ⚽", 60)

        if os.path.exists(SAVE_FILE) and confirm("Load existing career save?"):
            self._load()
        else:
            self._setup_new_career()

        self._career_loop()

    # ── Setup ────────────────────────────────────────────────────────────────

    def _setup_new_career(self):
        section("CHOOSE YOUR CLUB")
        club_list = list(CLUBS.keys())
        for i, c in enumerate(club_list, 1):
            club = CLUBS[c]
            print(f"  {BOLD}{YELLOW}{i:>2}{RESET}. "
                  f"{c:<22} {DIM}│{RESET} {club.league:<16} "
                  f"Budget: €{club.budget // 1000}M  "
                  f"Prestige: {'★'*club.prestige//2}")
        print()
        while True:
            try:
                choice = int(input(f"  {CYAN}Enter club number: {RESET}")) - 1
                if 0 <= choice < len(club_list):
                    self.club_name = club_list[choice]
                    break
                print(f"  {RED}Invalid choice.{RESET}")
            except (ValueError, EOFError):
                pass

        club = CLUBS[self.club_name]
        self.budget = club.budget
        self.wage_budget = club.wage_budget

        # Assign squad
        self.squad = deepcopy(PLAYERS_BY_CLUB.get(self.club_name, []))
        if not self.squad:
            # fallback: pick 11 random players
            self.squad = random.sample(PLAYERS, min(11, len(PLAYERS)))

        # Build league standings
        league = next((l for l, clubs in LEAGUES.items() if self.club_name in clubs), "Premier League")
        league_clubs = LEAGUES.get(league, [self.club_name])
        self.standings = {c: StandingsEntry(c) for c in league_clubs}

        self._choose_formation()
        self.season = 2017
        self.matchweek = 0
        print(f"\n  {GREEN}Welcome to {self.club_name}! Season {self.season}/{self.season+1} begins.{RESET}")
        pause()

    def _choose_formation(self):
        section("CHOOSE FORMATION")
        formation_list = list(FORMATIONS.keys())
        choice = menu("Pick your formation", formation_list)
        self.formation = formation_list[choice - 1]
        print(f"  Formation set to {BOLD}{YELLOW}{self.formation}{RESET}")

    # ── Main career loop ─────────────────────────────────────────────────────

    def _career_loop(self):
        while True:
            clear()
            header(f"⚽  {self.club_name}  |  Season {self.season}/{self.season+1}  |  MW {self.matchweek}", 70)
            self._print_quick_status()

            options = [
                "Play Next Match",
                "View Squad",
                "Transfer Market",
                "Training",
                "League Table",
                "Season Results",
                "Save & Quit",
            ]
            choice = menu("MANAGER HUB", options)

            if choice == 1:
                self._play_match()
            elif choice == 2:
                self._view_squad()
            elif choice == 3:
                self._transfer_market()
            elif choice == 4:
                self._training()
            elif choice == 5:
                self._league_table()
            elif choice == 6:
                self._season_results()
            elif choice == 7:
                self._save()
                print(f"\n  {GREEN}Career saved. See you next session!{RESET}\n")
                break

    def _print_quick_status(self):
        entry = self.standings.get(self.club_name)
        pos = self._league_position()
        print(f"  {DIM}League Position:{RESET} {BOLD}{color(str(pos), YELLOW)}{RESET}  "
              f"  {DIM}Points:{RESET} {BOLD}{entry.points if entry else 0}{RESET}"
              f"  {DIM}Budget:{RESET} {BOLD}{GREEN}€{self.budget//1000}M{RESET}"
              f"  {DIM}Trophies:{RESET} {', '.join(self.trophies) or 'None'}\n")

    # ── Match ────────────────────────────────────────────────────────────────

    def _play_match(self):
        if self.matchweek >= self.SEASON_LENGTH:
            print(f"\n  {YELLOW}Season complete! Use the Hub to start a new season.{RESET}")
            pause()
            self._end_of_season()
            return

        # Pick opponent from standings (rotate)
        opponents = [c for c in self.standings if c != self.club_name]
        if not opponents:
            opponents = [c for c in CLUBS if c != self.club_name]
        opponent_name = opponents[self.matchweek % len(opponents)]

        home_club = CLUBS.get(self.club_name)
        away_club = CLUBS.get(opponent_name)
        if not home_club or not away_club:
            print(f"  {RED}Club data missing.{RESET}")
            pause()
            return

        away_squad = deepcopy(PLAYERS_BY_CLUB.get(opponent_name, random.sample(PLAYERS, 11)))

        clear()
        header(f"MATCHDAY {self.matchweek + 1}  |  {self.club_name} vs {opponent_name}", 70)
        self._print_lineups(self.squad, away_squad, opponent_name)

        if not confirm("Kick off?"):
            return

        result = self.sim.simulate(self.squad, away_squad, home_club, away_club, verbose=True)
        display_match_live(result)

        self._update_standings(result)
        self.season_results.append(result)
        self.matchweek += 1

        # Fitness drop
        for p in self.squad:
            p.fitness = max(50, p.fitness - random.randint(5, 15))

        pause()

    def _print_lineups(self, home_squad, away_squad, away_name):
        section("LINEUPS")
        h_names = [f"{p.name} ({p.position})" for p in home_squad[:11]]
        a_names = [f"{p.name} ({p.position})" for p in away_squad[:11]]
        print(f"  {BOLD}{CYAN}{self.club_name:<35}{RESET}  {BOLD}{CYAN}{away_name}{RESET}")
        for i in range(max(len(h_names), len(a_names))):
            h = h_names[i] if i < len(h_names) else ""
            a = a_names[i] if i < len(a_names) else ""
            print(f"  {h:<35}  {a}")
        print()

    def _update_standings(self, result: MatchResult):
        home = self.standings.get(result.home_team)
        away = self.standings.get(result.away_team)
        if home:
            home.played += 1
            home.gf += result.home_score
            home.ga += result.away_score
            if result.home_score > result.away_score:
                home.wins += 1
            elif result.home_score == result.away_score:
                home.draws += 1
            else:
                home.losses += 1
        if away:
            away.played += 1
            away.gf += result.away_score
            away.ga += result.home_score
            if result.away_score > result.home_score:
                away.wins += 1
            elif result.away_score == result.home_score:
                away.draws += 1
            else:
                away.losses += 1

    def _league_position(self) -> int:
        sorted_clubs = sorted(self.standings.values(),
                              key=lambda e: (e.points, e.gd, e.gf), reverse=True)
        for i, entry in enumerate(sorted_clubs, 1):
            if entry.club == self.club_name:
                return i
        return len(self.standings) + 1

    # ── Squad view ───────────────────────────────────────────────────────────

    def _view_squad(self):
        clear()
        header("YOUR SQUAD", 60)
        rows = []
        for p in sorted(self.squad, key=lambda p: p.overall, reverse=True):
            rows.append([p.name, p.position, p.overall,
                         p.age, f"€{p.wage}k/w",
                         progress_bar(p.fitness, 100, width=12)])
        table(["Name", "Pos", "OVR", "Age", "Wage", "Fitness"],
              rows, [24, 4, 4, 4, 9, 22])
        pause()

    # ── Transfer Market ──────────────────────────────────────────────────────

    def _transfer_market(self):
        while True:
            clear()
            header("TRANSFER MARKET", 60)
            print(f"  {DIM}Available Budget:{RESET} {GREEN}€{self.budget//1000}M{RESET}\n")
            options = ["Browse Players for Sale", "List Player (Sell)", "View Incoming Offers", "Back"]
            choice = menu("Transfer Options", options)
            if choice == 1:
                self._browse_market()
            elif choice == 2:
                self._sell_player()
            elif choice == 3:
                self._incoming_offers()
            elif choice == 4:
                break

    def _browse_market(self):
        clear()
        section("PLAYERS AVAILABLE")
        # Show top 20 players not in our squad
        my_ids = {p.id for p in self.squad}
        available = [p for p in PLAYERS if p.id not in my_ids and not p.is_icon]
        available.sort(key=lambda p: p.overall, reverse=True)
        available = available[:20]

        rows = [(p.name, p.position, p.overall, p.age,
                 p.club, f"€{p.value//1000}M", f"€{p.wage}k/w")
                for p in available]
        table(["Name","Pos","OVR","Age","Club","Value","Wage"],
              rows, [24, 4, 4, 4, 18, 9, 9])
        print()

        try:
            idx = int(input(f"  {CYAN}Enter player # to negotiate (0 to cancel): {RESET}")) - 1
        except (ValueError, EOFError):
            return
        if idx < 0 or idx >= len(available):
            return

        target = available[idx]
        self._negotiate_transfer(target)

    def _negotiate_transfer(self, target: Player):
        clear()
        section(f"TRANSFER NEGOTIATION — {target.name}")
        player_card(target)

        print(f"\n  {DIM}Asking price:{RESET} {YELLOW}€{target.value//1000}M{RESET}")
        print(f"  {DIM}Your budget :{RESET} {GREEN}€{self.budget//1000}M{RESET}\n")

        if target.value > self.budget:
            print(f"  {RED}Insufficient budget for this transfer.{RESET}")
            pause()
            return

        # Step 1: negotiate fee with selling club
        print(f"  {BOLD}Step 1: Agree fee with {target.club}{RESET}")
        try:
            offer = int(input(f"  {CYAN}Your offer (€k, asking={target.value}): €{RESET}"))
        except (ValueError, EOFError):
            return

        acceptance_threshold = target.value * random.uniform(0.85, 1.05)
        if offer >= acceptance_threshold:
            print(f"  {GREEN}✓ {target.club} accepts your offer of €{offer}k!{RESET}")
        elif offer >= acceptance_threshold * 0.9:
            counter = int(acceptance_threshold * 1.03)
            print(f"  {YELLOW}⇄ {target.club} counters with €{counter}k.{RESET}")
            if not confirm(f"  Accept counter-offer of €{counter}k?"):
                print(f"  {RED}Transfer talks collapsed.{RESET}")
                pause()
                return
            offer = counter
        else:
            print(f"  {RED}✗ {target.club} rejects your offer. They want more.{RESET}")
            pause()
            return

        # Step 2: personal terms
        print(f"\n  {BOLD}Step 2: Personal terms with {target.name}'s agent{RESET}")
        print(f"  {DIM}Player's current wage: €{target.wage}k/w{RESET}")
        try:
            wage_offer = int(input(f"  {CYAN}Wage offer (€k/w): €{RESET}"))
        except (ValueError, EOFError):
            return

        if wage_offer >= target.wage * 0.9:
            print(f"  {GREEN}✓ {target.name} agrees personal terms!{RESET}")
            # Unveiling ceremony
            print(f"\n  {BOLD}{YELLOW}🎉 TRANSFER COMPLETE! 🎉{RESET}")
            print(f"  {target.club} unveils {BOLD}{target.name}{RESET} at a press conference.")
            print(f"  He holds up the {self.club_name} shirt and waves to the fans!")
            self.squad.append(deepcopy(target))
            self.budget -= offer
            pause()
        else:
            print(f"  {RED}✗ {target.name} rejects the contract offer.{RESET}")
            pause()

    def _sell_player(self):
        clear()
        section("LIST A PLAYER FOR SALE")
        rows = [(i+1, p.name, p.position, p.overall, f"€{p.value//1000}M")
                for i, p in enumerate(self.squad)]
        table(["#", "Name", "Pos", "OVR", "Est. Value"], rows, [3, 24, 4, 4, 10])
        try:
            idx = int(input(f"  {CYAN}Select player # (0 to cancel): {RESET}")) - 1
        except (ValueError, EOFError):
            return
        if idx < 0 or idx >= len(self.squad):
            return
        player = self.squad[idx]
        if confirm(f"  List {player.name} for €{player.value//1000}M?"):
            # Simulate a buyer making an offer
            offer = int(player.value * random.uniform(0.8, 1.1))
            print(f"\n  {YELLOW}{random.choice(list(CLUBS.keys()))}{RESET} offers {GREEN}€{offer//1000}M{RESET}.")
            if confirm("Accept?"):
                self.squad.pop(idx)
                self.budget += offer
                print(f"  {GREEN}✓ {player.name} sold for €{offer//1000}M!{RESET}")
        pause()

    def _incoming_offers(self):
        clear()
        section("INCOMING TRANSFER OFFERS")
        if not self.squad:
            print(f"  {DIM}No squad.{RESET}")
            pause()
            return
        # Simulate random AI interest
        target = random.choice(self.squad)
        bid = int(target.value * random.uniform(0.7, 1.0))
        bidder = random.choice([c for c in CLUBS if c != self.club_name])
        print(f"  {BOLD}{YELLOW}{bidder}{RESET} wants to sign {BOLD}{target.name}{RESET}.")
        print(f"  Bid: {GREEN}€{bid//1000}M{RESET}  (Market value: €{target.value//1000}M)")
        if confirm("Accept bid?"):
            self.squad.remove(target)
            self.budget += bid
            print(f"  {GREEN}✓ {target.name} sold to {bidder} for €{bid//1000}M!{RESET}")
        pause()

    # ── Training ─────────────────────────────────────────────────────────────

    def _training(self):
        clear()
        header("TRAINING GROUND", 60)
        drills = [
            ("Fitness Session",   "Restore fitness for all players",        "fitness"),
            ("Shooting Drills",   "Improve shooting (+1 OVR for attackers)","shooting"),
            ("Passing Drills",    "Improve passing (+1 OVR for midfielders)","passing"),
            ("Defensive Shape",   "Improve defending (+1 OVR for defenders)","defending"),
            ("Sprint Training",   "Improve pace (+1 OVR for attackers)",    "pace"),
        ]
        for i, (name, desc, _) in enumerate(drills, 1):
            print(f"  {BOLD}{YELLOW}{i}{RESET}. {name:<22} — {DIM}{desc}{RESET}")
        print()
        try:
            choice = int(input(f"  {CYAN}Choose drill (0 to cancel): {RESET}")) - 1
        except (ValueError, EOFError):
            return
        if choice < 0 or choice >= len(drills):
            return

        name, _, stat = drills[choice]
        if stat == "fitness":
            for p in self.squad:
                p.fitness = min(100, p.fitness + random.randint(10, 20))
            print(f"\n  {GREEN}✓ All players refreshed! Fitness restored.{RESET}")
        else:
            pos_map = {
                "shooting": ("ST", "LW", "RW"),
                "passing":  ("CM", "CAM", "CDM"),
                "defending":("CB", "LB", "RB"),
                "pace":     ("ST", "LW", "RW"),
            }
            targets = [p for p in self.squad if p.position in pos_map.get(stat, ())]
            for p in targets:
                setattr(p, stat, min(99, getattr(p, stat) + 1))
                p.overall = min(99, p.overall + 1)
            print(f"\n  {GREEN}✓ {name} complete! "
                  f"{len(targets)} players improved their {stat}.{RESET}")
        pause()

    # ── League Table ─────────────────────────────────────────────────────────

    def _league_table(self):
        clear()
        header("LEAGUE TABLE", 60)
        sorted_entries = sorted(self.standings.values(),
                                key=lambda e: (e.points, e.gd, e.gf), reverse=True)
        rows = []
        for i, e in enumerate(sorted_entries, 1):
            marker = f"{YELLOW}►{RESET}" if e.club == self.club_name else " "
            rows.append([f"{marker}{i}", e.club, e.played, e.wins, e.draws,
                         e.losses, e.gf, e.ga, e.gd, e.points])
        table(["#", "Club", "P", "W", "D", "L", "GF", "GA", "GD", "Pts"],
              rows, [3, 22, 3, 3, 3, 3, 4, 4, 5, 4])
        pause()

    # ── Season Results ────────────────────────────────────────────────────────

    def _season_results(self):
        clear()
        header("SEASON RESULTS", 60)
        if not self.season_results:
            print(f"  {DIM}No matches played yet.{RESET}")
        for r in self.season_results:
            hs = color(str(r.home_score), GREEN if r.home_score > r.away_score
                       else (YELLOW if r.home_score == r.away_score else RED))
            as_ = color(str(r.away_score), GREEN if r.away_score > r.home_score
                        else (YELLOW if r.away_score == r.home_score else RED))
            print(f"  {r.home_team:<22} {hs} - {as_} {r.away_team}")
        pause()

    # ── End of Season ────────────────────────────────────────────────────────

    def _end_of_season(self):
        clear()
        header(f"END OF SEASON {self.season}/{self.season+1}", 60)
        pos = self._league_position()
        entry = self.standings.get(self.club_name)
        print(f"  Final League Position: {BOLD}{YELLOW}{pos}{RESET}")
        if entry:
            print(f"  Record: {entry.wins}W {entry.draws}D {entry.losses}L  "
                  f"Points: {entry.points}")

        if pos == 1:
            trophy = f"League Champion {self.season}/{self.season+1}"
            self.trophies.append(trophy)
            print(f"\n  {BOLD}{YELLOW}🏆 CHAMPIONS! You've won the league! 🏆{RESET}")

        # Reset for next season
        self.season += 1
        self.matchweek = 0
        self.season_results = []
        for e in self.standings.values():
            e.played = e.wins = e.draws = e.losses = e.gf = e.ga = 0

        # Transfer window opens
        self.transfer_window_open = True
        self.budget += 20000  # seasonal budget top-up (€20M)
        print(f"\n  {GREEN}Season {self.season}/{self.season+1} begins. "
              f"Budget topped up by €20M.{RESET}")
        pause()

    # ── Save / Load ──────────────────────────────────────────────────────────

    def _save(self):
        os.makedirs("saves", exist_ok=True)
        data = {
            "club_name": self.club_name,
            "squad": [p.to_dict() for p in self.squad],
            "formation": self.formation,
            "season": self.season,
            "matchweek": self.matchweek,
            "budget": self.budget,
            "wage_budget": self.wage_budget,
            "standings": {k: v.to_dict() for k, v in self.standings.items()},
            "trophies": self.trophies,
        }
        with open(SAVE_FILE, "w") as f:
            json.dump(data, f, indent=2)
        print(f"  {GREEN}✓ Career saved.{RESET}")

    def _load(self):
        with open(SAVE_FILE) as f:
            data = json.load(f)
        self.club_name = data["club_name"]
        self.squad = [Player.from_dict(p) for p in data["squad"]]
        self.formation = data["formation"]
        self.season = data["season"]
        self.matchweek = data["matchweek"]
        self.budget = data["budget"]
        self.wage_budget = data["wage_budget"]
        self.standings = {k: StandingsEntry.from_dict(v)
                          for k, v in data["standings"].items()}
        self.trophies = data["trophies"]
        print(f"  {GREEN}✓ Career loaded — {self.club_name}, Season {self.season}.{RESET}")
        pause()
