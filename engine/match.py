"""
The Beautiful Game 2026 — Match Simulation Engine
Simulates a 90-minute match using team/player ratings, styles, and RNG.
"""

import random
import math
from dataclasses import dataclass, field
from typing import List, Tuple, Optional

from data.players import Player, FORMATIONS
from data.clubs import Club, TEAM_STYLES


@dataclass
class MatchEvent:
    minute: int
    event_type: str   # "goal", "yellow", "red", "substitution", "injury", "miss", "save"
    team: str
    player_name: str
    detail: str = ""

    def __str__(self) -> str:
        icons = {"goal": "⚽", "yellow": "🟨", "red": "🟥", "save": "🧤",
                 "miss": "💨", "substitution": "🔄", "injury": "🤕"}
        icon = icons.get(self.event_type, "•")
        return f"  {self.minute:>2}' {icon}  [{self.team}] {self.player_name}{' — ' + self.detail if self.detail else ''}"


@dataclass
class MatchResult:
    home_team: str
    away_team: str
    home_score: int
    away_score: int
    home_scorers: List[Tuple[str, int]] = field(default_factory=list)
    away_scorers: List[Tuple[str, int]] = field(default_factory=list)
    events: List[MatchEvent] = field(default_factory=list)
    home_possession: int = 50
    home_shots: int = 0
    away_shots: int = 0
    home_shots_on_target: int = 0
    away_shots_on_target: int = 0
    player_ratings: dict = field(default_factory=dict)  # name -> rating (1-10)
    motm: str = ""   # Man of the Match

    @property
    def away_possession(self) -> int:
        return 100 - self.home_possession

    def summary_line(self) -> str:
        return f"{self.home_team} {self.home_score} - {self.away_score} {self.away_team}"


class MatchSimulator:
    """Simulates a match between two squads."""

    def __init__(self):
        self.rng = random.Random()

    # ── Public API ──────────────────────────────────────────────────────────

    def simulate(
        self,
        home_squad: List[Player],
        away_squad: List[Player],
        home_club: Club,
        away_club: Club,
        verbose: bool = True,
    ) -> MatchResult:
        """Run a full 90-minute match simulation."""
        result = MatchResult(home_team=home_club.name, away_team=away_club.name,
                             home_score=0, away_score=0)

        home_att, home_def, home_mid = self._squad_ratings(home_squad)
        away_att, away_def, away_mid = self._squad_ratings(away_squad)

        # Possession based on midfield + style
        home_pos = 50 + (home_mid - away_mid) * 0.25
        home_pos += home_club.style.possession_bonus - away_club.style.possession_bonus
        home_pos = max(30, min(70, home_pos))
        result.home_possession = round(home_pos)

        # Number of attacks per team
        home_attacks = int(self.rng.gauss(12, 3) * home_club.style.attack_frequency)
        away_attacks = int(self.rng.gauss(12, 3) * away_club.style.attack_frequency)
        home_attacks = max(4, home_attacks)
        away_attacks = max(4, away_attacks)

        # Simulate each attack as a discrete event
        minutes_used: set[int] = set()
        for _ in range(home_attacks):
            minute = self._unique_minute(minutes_used, 1, 90)
            self._simulate_attack(result, home_squad, away_squad, home_club, away_club,
                                  home_att, away_def, minute, is_home=True)

        for _ in range(away_attacks):
            minute = self._unique_minute(minutes_used, 1, 90)
            self._simulate_attack(result, away_squad, home_squad, away_club, home_club,
                                  away_att, home_def, minute, is_home=False)

        # Cards (occasional)
        self._simulate_cards(result, home_squad, away_squad, home_club, away_club)

        # Sort events by minute
        result.events.sort(key=lambda e: e.minute)

        # Player ratings
        result.player_ratings = self._assign_ratings(result, home_squad, away_squad)
        result.motm = self._motm(result.player_ratings)

        # Shot stats
        goal_events = [e for e in result.events if e.event_type == "goal"]
        shot_events  = [e for e in result.events if e.event_type in ("goal", "save", "miss")]
        result.home_shots = sum(1 for e in shot_events if e.team == home_club.name)
        result.away_shots = sum(1 for e in shot_events if e.team == away_club.name)
        result.home_shots_on_target = sum(1 for e in [e for e in result.events
                                          if e.event_type in ("goal", "save")]
                                          if e.team == home_club.name)
        result.away_shots_on_target = sum(1 for e in [e for e in result.events
                                          if e.event_type in ("goal", "save")]
                                          if e.team == away_club.name)

        return result

    # ── Internal helpers ────────────────────────────────────────────────────

    def _squad_ratings(self, squad: List[Player]) -> Tuple[float, float, float]:
        """Return (attack, defense, midfield) composite ratings for a squad."""
        att_players = [p for p in squad if p.position in ("ST", "LW", "RW", "CAM")]
        def_players = [p for p in squad if p.position in ("CB", "LB", "RB", "CDM", "GK")]
        mid_players = [p for p in squad if p.position in ("CM", "CDM", "CAM")]

        def avg(lst: List[Player], fn) -> float:
            vals = [fn(p) for p in lst]
            return sum(vals) / len(vals) if vals else 70.0

        att = avg(att_players, lambda p: p.attack_rating)
        dfs = avg(def_players, lambda p: p.defense_rating)
        mid = avg(mid_players + att_players + def_players, lambda p: p.overall)
        return att, dfs, mid

    def _simulate_attack(
        self,
        result: MatchResult,
        att_squad: List[Player],
        def_squad: List[Player],
        att_club: Club,
        def_club: Club,
        att_rating: float,
        def_rating: float,
        minute: int,
        is_home: bool,
    ):
        """Simulate one attacking move — may produce goal, save, or miss."""
        # Fitness modifier
        fitness_mod = sum(p.fitness for p in att_squad) / (len(att_squad) * 100)

        # Chance quality: ratio of attack vs defense ± style ± RNG
        base = att_rating / (att_rating + def_rating)
        noise = self.rng.gauss(0, 0.08)
        pressing_penalty = (def_club.style.pressing_intensity - 1.0) * 0.05
        shot_quality = base * fitness_mod + noise - pressing_penalty
        shot_quality = max(0.05, min(0.95, shot_quality))

        # Pick attacker (weighted by attack_rating)
        attacker = self._pick_player(
            [p for p in att_squad if p.position in ("ST", "LW", "RW", "CAM", "CM")]
            or att_squad, lambda p: p.attack_rating
        )
        gk = next((p for p in def_squad if p.position == "GK"), None)
        team_name = att_club.name

        shot_roll = self.rng.random()

        if shot_roll < shot_quality * 0.55:           # GOAL
            result.events.append(MatchEvent(minute, "goal", team_name, attacker.name,
                                            self._goal_type()))
            if is_home:
                result.home_score += 1
                result.home_scorers.append((attacker.name, minute))
            else:
                result.away_score += 1
                result.away_scorers.append((attacker.name, minute))

        elif shot_roll < shot_quality * 0.55 + 0.20:  # SAVE
            gk_name = gk.name if gk else "Goalkeeper"
            result.events.append(MatchEvent(minute, "save", att_club.name, attacker.name,
                                            f"saved by {gk_name}"))

        else:                                          # MISS
            result.events.append(MatchEvent(minute, "miss", team_name, attacker.name,
                                            self._miss_type()))

    def _simulate_cards(self, result: MatchResult, home_squad, away_squad, home_club, away_club):
        for squad, club in ((home_squad, home_club), (away_squad, away_club)):
            for player in squad:
                if player.position in ("CDM", "CM", "CB") and self.rng.random() < 0.08:
                    minute = self.rng.randint(1, 90)
                    result.events.append(MatchEvent(minute, "yellow", club.name, player.name))
                if self.rng.random() < 0.01:
                    minute = self.rng.randint(1, 90)
                    result.events.append(MatchEvent(minute, "red", club.name, player.name,
                                                    "straight red"))

    def _assign_ratings(self, result: MatchResult, home_squad, away_squad) -> dict:
        ratings = {}
        all_squads = [(home_squad, result.home_team, result.home_score, result.away_score),
                      (away_squad, result.away_team, result.away_score, result.home_score)]
        for squad, team, gf, ga in all_squads:
            for p in squad:
                base = 6.0 + (p.overall - 75) * 0.04
                if any(name == p.name for name, _ in
                       (result.home_scorers if team == result.home_team else result.away_scorers)):
                    base += 1.5
                if p.position == "GK" and ga == 0:
                    base += 1.0
                base += self.rng.gauss(0, 0.4)
                ratings[p.name] = round(max(3.0, min(10.0, base)), 1)
        return ratings

    def _motm(self, ratings: dict) -> str:
        return max(ratings, key=ratings.get) if ratings else ""

    @staticmethod
    def _pick_player(squad: List[Player], weight_fn) -> Player:
        weights = [weight_fn(p) for p in squad]
        total = sum(weights)
        r = random.random() * total
        cumulative = 0
        for p, w in zip(squad, weights):
            cumulative += w
            if r <= cumulative:
                return p
        return squad[-1]

    @staticmethod
    def _unique_minute(used: set, low: int, high: int) -> int:
        minute = random.randint(low, high)
        while minute in used:
            minute = random.randint(low, high)
        used.add(minute)
        return minute

    @staticmethod
    def _goal_type() -> str:
        types = ["Low shot", "Header", "Long range", "Tap-in", "Volley",
                 "Penalty", "Free kick", "Counter-attack finish"]
        return random.choice(types)

    @staticmethod
    def _miss_type() -> str:
        types = ["Wide", "Over the bar", "Hit the post", "Blocked",
                 "Keeper claims", "Off target"]
        return random.choice(types)


def display_match_live(result: MatchResult):
    """Print a formatted live match commentary."""
    from engine.display import color, CYAN, YELLOW, GREEN, RED, RESET, BOLD, DIM

    print(f"\n{BOLD}{'─'*60}{RESET}")
    print(f"{BOLD}{color(result.home_team, CYAN):>28}  vs  {color(result.away_team, CYAN)}{RESET}")
    print(f"{'─'*60}")

    for event in result.events:
        if event.event_type == "goal":
            print(color(str(event), GREEN))
        elif event.event_type in ("yellow", "red"):
            c = YELLOW if event.event_type == "yellow" else RED
            print(color(str(event), c))
        else:
            print(str(event))

    print(f"\n{'─'*60}")
    print(f"{BOLD}  FINAL SCORE:  "
          f"{color(result.home_team, CYAN)} {result.home_score} - "
          f"{result.away_score} {color(result.away_team, CYAN)}{RESET}")
    print(f"{'─'*60}")
    print(f"  Possession : {result.home_team} {result.home_possession}% | "
          f"{result.away_team} {result.away_possession}%")
    print(f"  Shots      : {result.home_shots} - {result.away_shots}")
    print(f"  On Target  : {result.home_shots_on_target} - {result.away_shots_on_target}")
    if result.motm:
        print(f"  {BOLD}Man of the Match:{RESET} {color(result.motm, YELLOW)}")
    print(f"{'─'*60}\n")
