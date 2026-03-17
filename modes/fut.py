"""
FIFA 18 Ultimate Team (FUT 18)
Squad builder, chemistry system, Squad Battles, FUT Icons, FUT Draft.
"""

import random
import json
import os
from copy import deepcopy
from typing import List, Dict, Optional, Tuple

from data.players import Player, PLAYERS, PLAYERS_BY_CLUB, FORMATIONS
from data.teams import CLUBS
from engine.match import MatchSimulator, display_match_live
from engine.display import (
    header, section, menu, confirm, pause, clear, table,
    bold, color, player_card, rating_stars,
    CYAN, YELLOW, GREEN, RED, BOLD, RESET, DIM, MAGENTA, WHITE
)

FUT_SAVE_FILE = "saves/fut_save.json"

# ── Card rarity tiers ─────────────────────────────────────────────────────────
CARD_TIERS = {
    "Bronze":       (range(40, 65),  0.35, DIM),
    "Silver":       (range(65, 75),  0.40, WHITE),
    "Gold":         (range(75, 87),  0.20, YELLOW),
    "Rare Gold":    (range(87, 92),  0.04, YELLOW),
    "In-Form":      (range(87, 95),  0.005, CYAN),
    "Icon":         (range(91, 99),  0.005, MAGENTA),
}

# ── Squad chemistry positions ─────────────────────────────────────────────────
CHEM_LINKS = {
    "4-3-3": [
        ("GK", "LB"), ("GK", "CB1"), ("GK", "CB2"), ("GK", "RB"),
        ("LB", "CB1"), ("CB1", "CB2"), ("CB2", "RB"),
        ("LB", "LCM"), ("CB1", "CM"), ("CB2", "RCM"), ("RB", "RCM"),
        ("LCM", "CM"), ("CM", "RCM"),
        ("LCM", "LW"), ("CM", "ST"), ("RCM", "RW"),
    ],
    "4-2-3-1": [
        ("GK", "LB"), ("GK", "CB1"), ("GK", "CB2"), ("GK", "RB"),
        ("LB", "LCDM"), ("LCDM", "RCDM"), ("RCDM", "RB"),
        ("LCDM", "LAM"), ("LCDM", "CAM"), ("RCDM", "CAM"), ("RCDM", "RAM"),
        ("LAM", "CAM"), ("CAM", "RAM"),
        ("CAM", "ST"),
    ],
}

SQUAD_BATTLE_OPPONENTS = [
    ("El Clasico XI",       90, "tiki_taka"),
    ("Premier League Best", 88, "high_press"),
    ("Bundesliga Stars",    85, "gegenpressing"),
    ("Serie A Legends",     83, "counter"),
    ("World XI",            95, "balanced"),
    ("EA Sports FC",        92, "high_press"),
    ("Icon Squad",          96, "balanced"),
]


class FUTCard:
    """Represents a player card in FUT."""
    def __init__(self, player: Player, tier: str = "Gold", boosted: bool = False):
        self.player = deepcopy(player)
        self.tier = tier
        self.boosted = boosted
        if boosted:
            for stat in ("pace", "shooting", "passing", "dribbling", "defending", "physical"):
                setattr(self.player, stat, min(99, getattr(self.player, stat) + 3))
            self.player.overall = min(99, self.player.overall + 2)

    @property
    def tier_color(self) -> str:
        return CARD_TIERS.get(self.tier, (None, None, YELLOW))[2]

    def display(self, short: bool = False):
        p = self.player
        tc = self.tier_color
        boost_tag = f" {CYAN}[IF]{RESET}" if self.boosted else ""
        if short:
            print(f"  {color(self.tier, tc):<12} "
                  f"{BOLD}{p.name:<25}{RESET} "
                  f"{p.position:<4} "
                  f"OVR:{color(str(p.overall), YELLOW)}{boost_tag}")
        else:
            player_card(p)
            print(f"  Tier: {color(self.tier, tc)}{boost_tag}")


class FUTSquad:
    """An 11-player FUT squad with chemistry."""
    MAX_SIZE = 11

    def __init__(self, formation: str = "4-3-3"):
        self.formation = formation
        self.cards: List[FUTCard] = []

    @property
    def chemistry(self) -> int:
        """Calculate squad chemistry (0-100)."""
        if not self.cards:
            return 0
        base = sum(c.player.overall for c in self.cards) / len(self.cards)

        # Nationality bonus
        nats = [c.player.nationality for c in self.cards]
        top_nat = max(set(nats), key=nats.count)
        nat_count = nats.count(top_nat)
        nat_bonus = nat_count * 3

        # Club bonus
        clubs = [c.player.club for c in self.cards if c.player.club != "Icon"]
        if clubs:
            top_club = max(set(clubs), key=clubs.count)
            club_count = clubs.count(top_club)
            club_bonus = club_count * 4
        else:
            club_bonus = 0

        raw = base * 0.6 + nat_bonus + club_bonus
        return min(100, int(raw))

    @property
    def overall(self) -> float:
        if not self.cards:
            return 0
        top11 = sorted(self.cards, key=lambda c: c.player.overall, reverse=True)[:11]
        ovr = sum(c.player.overall for c in top11) / len(top11)
        chem_bonus = (self.chemistry - 50) * 0.05
        return round(ovr + chem_bonus, 1)

    def display(self):
        section(f"YOUR SQUAD  |  OVR: {color(str(self.overall), YELLOW)}"
                f"  |  Chemistry: {color(str(self.chemistry), GREEN)}/100")
        if not self.cards:
            print(f"  {DIM}Squad is empty. Open packs or use FUT Draft!{RESET}")
            return
        rows = [(i+1, c.player.name, c.player.position, c.player.overall,
                 c.player.nationality, c.player.club,
                 color(c.tier, c.tier_color))
                for i, c in enumerate(self.cards)]
        table(["#","Name","Pos","OVR","Nationality","Club","Tier"],
              rows, [3, 24, 4, 4, 14, 18, 12])


class PackOpener:
    """Open FUT card packs."""

    PACKS = {
        "Bronze Pack":      (750,   5,  [("Bronze", 0.85), ("Silver", 0.15)]),
        "Silver Pack":      (2500,  5,  [("Silver", 0.75), ("Gold", 0.25)]),
        "Gold Pack":        (5000,  6,  [("Gold", 0.80), ("Rare Gold", 0.15), ("In-Form", 0.05)]),
        "Premium Gold":     (12500, 9,  [("Gold", 0.70), ("Rare Gold", 0.22), ("In-Form", 0.07), ("Icon", 0.01)]),
        "TOTW Pack":        (25000, 6,  [("In-Form", 0.70), ("Rare Gold", 0.29), ("Icon", 0.01)]),
    }

    def open(self, pack_name: str) -> List[FUTCard]:
        _, count, tier_weights = self.PACKS[pack_name]
        cards = []
        for _ in range(count):
            tier = self._pick_tier(tier_weights)
            player = self._pick_player_for_tier(tier)
            boosted = (tier == "In-Form")
            cards.append(FUTCard(player, tier, boosted))
        return cards

    def _pick_tier(self, weights: List[Tuple[str, float]]) -> str:
        r = random.random()
        cumulative = 0
        for tier, weight in weights:
            cumulative += weight
            if r <= cumulative:
                return tier
        return weights[-1][0]

    def _pick_player_for_tier(self, tier: str) -> Player:
        ovr_range = CARD_TIERS[tier][0]
        candidates = [p for p in PLAYERS if p.overall in ovr_range]
        if tier == "Icon":
            candidates = [p for p in PLAYERS if p.is_icon]
        if not candidates:
            candidates = PLAYERS
        return deepcopy(random.choice(candidates))


class FUTMode:
    """Full FIFA 18 Ultimate Team mode."""

    def __init__(self):
        self.coins: int = 5000
        self.squad = FUTSquad("4-3-3")
        self.club: List[FUTCard] = []   # all cards owned (the "Club")
        self.pack_opener = PackOpener()
        self.sim = MatchSimulator()
        self.squad_battle_points: int = 0
        self.wins: int = 0
        self.draft_active: bool = False

    # ── Entry point ──────────────────────────────────────────────────────────

    def run(self):
        clear()
        header("⚽  FIFA ULTIMATE TEAM 18  ⚽", 60)

        if os.path.exists(FUT_SAVE_FILE) and confirm("Load existing FUT save?"):
            self._load()

        self._fut_loop()

    def _fut_loop(self):
        while True:
            clear()
            header(f"FUT 18  |  Coins: {color(str(self.coins), YELLOW)}  "
                   f"|  SB Points: {color(str(self.squad_battle_points), CYAN)}", 70)

            options = [
                "View Squad",
                "Open Packs",
                "Squad Battles",
                "FUT Draft",
                "Transfer Market (Buy/Sell)",
                "FUT Icons",
                "Save & Back",
            ]
            choice = menu("FUT HUB", options)

            if choice == 1:
                self._view_squad_menu()
            elif choice == 2:
                self._open_packs()
            elif choice == 3:
                self._squad_battles()
            elif choice == 4:
                self._fut_draft()
            elif choice == 5:
                self._transfer_market()
            elif choice == 6:
                self._icons_menu()
            elif choice == 7:
                self._save()
                break

    # ── Squad Management ──────────────────────────────────────────────────────

    def _view_squad_menu(self):
        while True:
            clear()
            self.squad.display()
            print()
            options = ["Add Card from Club", "Remove Player", "Change Formation", "Back"]
            choice = menu("Squad Options", options)
            if choice == 1:
                self._add_to_squad()
            elif choice == 2:
                self._remove_from_squad()
            elif choice == 3:
                self._change_formation()
            elif choice == 4:
                break

    def _add_to_squad(self):
        if not self.club:
            print(f"  {YELLOW}Your club is empty. Open some packs first!{RESET}")
            pause()
            return
        section("SELECT CARD FROM YOUR CLUB")
        for i, c in enumerate(self.club[:30], 1):
            print(f"  {BOLD}{YELLOW}{i:>2}{RESET}. ", end="")
            c.display(short=True)
        try:
            idx = int(input(f"\n  {CYAN}Enter card # to add (0 to cancel): {RESET}")) - 1
        except (ValueError, EOFError):
            return
        if 0 <= idx < len(self.club):
            card = self.club[idx]
            self.squad.cards.append(card)
            print(f"  {GREEN}✓ {card.player.name} added to squad!{RESET}")
        pause()

    def _remove_from_squad(self):
        if not self.squad.cards:
            print(f"  {RED}Squad is empty.{RESET}")
            pause()
            return
        for i, c in enumerate(self.squad.cards, 1):
            print(f"  {BOLD}{YELLOW}{i:>2}{RESET}. ", end="")
            c.display(short=True)
        try:
            idx = int(input(f"\n  {CYAN}Select player # to remove (0 to cancel): {RESET}")) - 1
        except (ValueError, EOFError):
            return
        if 0 <= idx < len(self.squad.cards):
            removed = self.squad.cards.pop(idx)
            print(f"  {GREEN}✓ {removed.player.name} removed.{RESET}")
        pause()

    def _change_formation(self):
        formation_list = list(FORMATIONS.keys())
        choice = menu("Choose Formation", formation_list)
        self.squad.formation = formation_list[choice - 1]
        print(f"  Formation changed to {BOLD}{YELLOW}{self.squad.formation}{RESET}")
        pause()

    # ── Pack Opening ──────────────────────────────────────────────────────────

    def _open_packs(self):
        clear()
        header("PACK STORE", 60)
        pack_list = list(PackOpener.PACKS.keys())
        for i, pack in enumerate(pack_list, 1):
            cost, count, _ = PackOpener.PACKS[pack]
            print(f"  {BOLD}{YELLOW}{i}{RESET}. {pack:<22} "
                  f"{color(str(count), CYAN)} cards  —  {GREEN}{cost:,} coins{RESET}")
        print(f"\n  {DIM}Your coins: {YELLOW}{self.coins}{RESET}\n")
        try:
            choice = int(input(f"  {CYAN}Choose pack (0 to cancel): {RESET}")) - 1
        except (ValueError, EOFError):
            return
        if choice < 0 or choice >= len(pack_list):
            return

        pack_name = pack_list[choice]
        cost = PackOpener.PACKS[pack_name][0]
        if self.coins < cost:
            print(f"  {RED}Not enough coins! Need {cost:,}, have {self.coins:,}.{RESET}")
            pause()
            return

        self.coins -= cost
        cards = self.pack_opener.open(pack_name)
        clear()
        print(f"\n  {BOLD}{YELLOW}★ PACK OPENING: {pack_name} ★{RESET}\n")
        for c in cards:
            print(f"  ", end="")
            c.display(short=True)
            self.club.append(c)

        print(f"\n  {DIM}Cards added to your club!{RESET}")
        pause()

    # ── Squad Battles ─────────────────────────────────────────────────────────

    def _squad_battles(self):
        clear()
        header("SQUAD BATTLES", 60)
        print(f"  {DIM}Battle AI squads to earn coins and SB points.{RESET}\n")
        print(f"  Your SB Points: {color(str(self.squad_battle_points), CYAN)}\n")

        rows = [(i+1, name, ovr, style) for i, (name, ovr, style) in
                enumerate(SQUAD_BATTLE_OPPONENTS)]
        table(["#","Opponent Squad","OVR","Style"], rows, [3, 25, 4, 15])
        print()

        try:
            choice = int(input(f"  {CYAN}Choose opponent (0 to cancel): {RESET}")) - 1
        except (ValueError, EOFError):
            return
        if choice < 0 or choice >= len(SQUAD_BATTLE_OPPONENTS):
            return

        opp_name, opp_ovr, opp_style = SQUAD_BATTLE_OPPONENTS[choice]

        difficulties = ["Amateur (Easy)", "Semi-Pro", "Professional", "World Class", "Legendary"]
        diff_choice = menu("Choose Difficulty", difficulties)
        diff_mult = [0.6, 0.8, 1.0, 1.2, 1.5][diff_choice - 1]

        if not self.squad.cards:
            print(f"  {RED}Build a squad first!{RESET}")
            pause()
            return

        # Build opponent squad
        opp_squad = self._build_ai_squad(opp_ovr)
        my_squad = [c.player for c in self.squad.cards]

        from data.teams import Club, TEAM_STYLES
        my_club_obj  = Club("My FUT Team", "FUT", "World", "FUT Stadium", 50000,
                            "balanced", 5, 0, 0)
        opp_club_obj = Club(opp_name, "FUT", "World", "FUT Arena", 50000,
                            opp_style, 8, 0, 0)

        clear()
        result = self.sim.simulate(my_squad, opp_squad, my_club_obj, opp_club_obj)
        display_match_live(result)

        # Rewards
        won = result.home_score > result.away_score
        drew = result.home_score == result.away_score
        base_coins = int(600 * diff_mult)
        base_points = int(300 * diff_mult)
        if won:
            coins_earned = base_coins
            points_earned = base_points
            self.wins += 1
            print(f"  {GREEN}✓ Victory! Earned {coins_earned} coins and {points_earned} SB points.{RESET}")
        elif drew:
            coins_earned = base_coins // 2
            points_earned = base_points // 3
            print(f"  {YELLOW}Draw. Earned {coins_earned} coins and {points_earned} SB points.{RESET}")
        else:
            coins_earned = base_coins // 4
            points_earned = base_points // 5
            print(f"  {RED}Defeat. Small consolation reward.{RESET}")
            print(f"  Earned {coins_earned} coins and {points_earned} SB points.")

        self.coins += coins_earned
        self.squad_battle_points += points_earned

        # Milestone rewards
        if self.squad_battle_points >= 1000 and self.squad_battle_points - points_earned < 1000:
            print(f"\n  {BOLD}{YELLOW}🎁 MILESTONE: 1000 SB Points! Bonus Gold Pack awarded!{RESET}")
            bonus = self.pack_opener.open("Gold Pack")
            for c in bonus:
                self.club.append(c)

        pause()

    def _build_ai_squad(self, target_ovr: int) -> List[Player]:
        """Build an AI opponent squad at approximately the given overall rating."""
        pool = sorted(PLAYERS, key=lambda p: abs(p.overall - target_ovr))[:30]
        squad = random.sample(pool, min(11, len(pool)))
        return [deepcopy(p) for p in squad]

    # ── FUT Draft ────────────────────────────────────────────────────────────

    def _fut_draft(self):
        clear()
        header("FUT DRAFT", 60)
        print(f"  {DIM}Build a team from random gold cards and compete!{RESET}")
        print(f"  Cost: {GREEN}15,000 coins{RESET}  or  "
              f"{CYAN}1 FUT Draft Token{RESET}\n")

        if self.coins < 15000:
            print(f"  {RED}Need 15,000 coins to enter the Draft.{RESET}")
            pause()
            return
        if not confirm("Enter FUT Draft for 15,000 coins?"):
            return
        self.coins -= 15000

        # Draft picks — 5 choices per position, pick the best
        draft_squad: List[FUTCard] = []
        positions = ["GK", "CB", "CB", "LB", "RB", "CDM", "CM", "CAM", "LW", "RW", "ST"]

        clear()
        print(f"\n  {BOLD}{YELLOW}★ DRAFT SQUAD SELECTION ★{RESET}\n")

        for pos in positions:
            candidates = [p for p in PLAYERS if p.position == pos or
                          (pos in ("LW", "RW") and p.position in ("LW", "RW", "CAM"))]
            picks = random.sample(candidates, min(5, len(candidates)))
            print(f"\n  {BOLD}Choose {color(pos, CYAN)}:{RESET}")
            for i, p in enumerate(picks, 1):
                print(f"    {YELLOW}{i}{RESET}. {p.name:<25} OVR:{BOLD}{color(str(p.overall), YELLOW)}{RESET} "
                      f"({p.nationality}, {p.club})")
            while True:
                try:
                    choice = int(input(f"  {CYAN}Pick (1-{len(picks)}): {RESET}")) - 1
                    if 0 <= choice < len(picks):
                        card = FUTCard(deepcopy(picks[choice]), "Gold")
                        draft_squad.append(card)
                        break
                except (ValueError, EOFError):
                    pass

        # Show final draft squad
        clear()
        section("YOUR DRAFT SQUAD")
        for c in draft_squad:
            c.display(short=True)
        total_ovr = sum(c.player.overall for c in draft_squad) / len(draft_squad)
        print(f"\n  Squad OVR: {BOLD}{color(str(round(total_ovr, 1)), YELLOW)}{RESET}\n")
        pause()

        # Play 4 draft matches
        wins = 0
        for round_num in range(1, 5):
            opp_ovr = int(total_ovr * random.uniform(0.95, 1.1))
            opp_squad = self._build_ai_squad(opp_ovr)
            my_squad = [c.player for c in draft_squad]

            from data.teams import Club
            my_club = Club("Draft Team", "FUT", "World", "Arena", 50000, "balanced", 7, 0, 0)
            opp_club_name = random.choice(list(CLUBS.keys()))
            opp_club = CLUBS.get(opp_club_name, my_club)

            clear()
            print(f"\n  {BOLD}DRAFT ROUND {round_num}/4{RESET}\n")
            result = self.sim.simulate(my_squad, opp_squad, my_club, opp_club)
            display_match_live(result)

            if result.home_score > result.away_score:
                wins += 1
                print(f"  {GREEN}Round {round_num} WIN!  ({wins}/4){RESET}")
            elif result.home_score == result.away_score:
                print(f"  {YELLOW}Round {round_num} DRAW.{RESET}")
            else:
                print(f"  {RED}Round {round_num} LOSS. Draft over.{RESET}")
                pause()
                break
            pause()

        # Draft rewards
        clear()
        print(f"\n  {BOLD}{YELLOW}★ DRAFT COMPLETE — {wins} WINS ★{RESET}\n")
        rewards = {
            0: (2000,  "Bronze Pack"),
            1: (5000,  "Silver Pack"),
            2: (10000, "Gold Pack"),
            3: (15000, "Gold Pack"),
            4: (25000, "Premium Gold"),
        }
        coins_r, pack_r = rewards.get(wins, (2000, "Bronze Pack"))
        print(f"  Reward: {GREEN}{coins_r:,} coins{RESET} + {YELLOW}{pack_r}{RESET}")
        self.coins += coins_r
        bonus_cards = self.pack_opener.open(pack_r)
        for c in bonus_cards:
            print(f"  → ", end="")
            c.display(short=True)
            self.club.append(c)
        pause()

    # ── Transfer Market ───────────────────────────────────────────────────────

    def _transfer_market(self):
        while True:
            clear()
            header("FUT TRANSFER MARKET", 60)
            print(f"  Coins: {color(str(self.coins), YELLOW)}\n")
            options = ["Buy Player", "Sell Card from Club", "Back"]
            choice = menu("Transfer Market", options)
            if choice == 1:
                self._buy_player()
            elif choice == 2:
                self._sell_card()
            elif choice == 3:
                break

    def _buy_player(self):
        clear()
        section("BUY A PLAYER")
        available = sorted(PLAYERS, key=lambda p: p.overall, reverse=True)[:25]
        rows = [(i+1, p.name, p.position, p.overall, p.nationality,
                 f"{p.value:,}", f"{p.wage}k/w")
                for i, p in enumerate(available)]
        table(["#","Name","Pos","OVR","Nat","Price (coins)","Wage"], rows,
              [3, 24, 4, 4, 12, 14, 9])
        try:
            idx = int(input(f"\n  {CYAN}Select player # to buy (0 to cancel): {RESET}")) - 1
        except (ValueError, EOFError):
            return
        if idx < 0 or idx >= len(available):
            return
        target = available[idx]
        market_price = target.value  # value is in thousands
        if self.coins < market_price:
            print(f"  {RED}Not enough coins! Need {market_price:,}, have {self.coins:,}.{RESET}")
        else:
            self.coins -= market_price
            card = FUTCard(target, "Gold")
            self.club.append(card)
            print(f"  {GREEN}✓ {target.name} added to your Club for {market_price:,} coins!{RESET}")
        pause()

    def _sell_card(self):
        if not self.club:
            print(f"  {YELLOW}Your club has no cards.{RESET}")
            pause()
            return
        section("SELL CARD")
        for i, c in enumerate(self.club[:30], 1):
            print(f"  {BOLD}{YELLOW}{i:>2}{RESET}. ", end="")
            c.display(short=True)
        try:
            idx = int(input(f"\n  {CYAN}Select card # to sell (0 to cancel): {RESET}")) - 1
        except (ValueError, EOFError):
            return
        if idx < 0 or idx >= len(self.club):
            return
        card = self.club[idx]
        sell_price = int(card.player.value * random.uniform(0.7, 0.95))
        if confirm(f"  Sell {card.player.name} for {sell_price:,} coins?"):
            self.club.pop(idx)
            # also remove from squad if present
            self.squad.cards = [c for c in self.squad.cards if c.player.name != card.player.name]
            self.coins += sell_price
            print(f"  {GREEN}✓ Sold for {sell_price:,} coins!{RESET}")
        pause()

    # ── FUT Icons ─────────────────────────────────────────────────────────────

    def _icons_menu(self):
        clear()
        header("FUT ICONS", 60)
        icons = [p for p in PLAYERS if p.is_icon]
        print(f"  {DIM}FUT Icons are legendary players from football history.{RESET}")
        print(f"  {DIM}Available on all platforms in FIFA 18!{RESET}\n")
        for p in icons:
            print(f"  {BOLD}{MAGENTA}★ ICON{RESET}  ", end="")
            player_card(p, short=True)
        print(f"\n  {DIM}Icons can be obtained from Premium Gold and TOTW packs.{RESET}")
        pause()

    # ── Save / Load ───────────────────────────────────────────────────────────

    def _save(self):
        os.makedirs("saves", exist_ok=True)
        data = {
            "coins": self.coins,
            "wins": self.wins,
            "squad_battle_points": self.squad_battle_points,
            "squad_formation": self.squad.formation,
            "squad_cards": [{"player": c.player.to_dict(), "tier": c.tier,
                              "boosted": c.boosted} for c in self.squad.cards],
            "club": [{"player": c.player.to_dict(), "tier": c.tier,
                      "boosted": c.boosted} for c in self.club],
        }
        with open(FUT_SAVE_FILE, "w") as f:
            json.dump(data, f, indent=2)
        print(f"  {GREEN}✓ FUT saved.{RESET}")

    def _load(self):
        with open(FUT_SAVE_FILE) as f:
            data = json.load(f)
        self.coins = data["coins"]
        self.wins = data.get("wins", 0)
        self.squad_battle_points = data.get("squad_battle_points", 0)
        self.squad = FUTSquad(data.get("squad_formation", "4-3-3"))
        for cd in data.get("squad_cards", []):
            self.squad.cards.append(
                FUTCard(Player.from_dict(cd["player"]), cd["tier"], cd["boosted"])
            )
        for cd in data.get("club", []):
            self.club.append(
                FUTCard(Player.from_dict(cd["player"]), cd["tier"], cd["boosted"])
            )
        print(f"  {GREEN}✓ FUT loaded. Coins: {self.coins:,}{RESET}")
        pause()
