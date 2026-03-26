"""Shared dataclass for Footy Street story chapters."""
from dataclasses import dataclass, field
from typing import Optional


@dataclass
class StoryChapter:
    number: int
    city: str
    country: str
    title: str
    location_detail: str
    intro: str
    objective: str
    opponent_club: str
    opponent_label: str
    post_win: str
    post_loss: str
    is_rival_chapter: bool = False
    intro_crew: str = ""
    intro_rival: str = ""
    post_win_crew: str = ""
    post_win_rival: str = ""
