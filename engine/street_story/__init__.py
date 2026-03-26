"""Footy Street — Story Mode. 7 chapters across 7 cities."""
from typing import Optional

from engine.street_story.base import StoryChapter
from engine.street_story.ch1 import CHAPTER_1
from engine.street_story.ch2 import CHAPTER_2
from engine.street_story.ch3 import CHAPTER_3
from engine.street_story.ch4 import CHAPTER_4
from engine.street_story.ch5 import CHAPTER_5
from engine.street_story.ch6 import CHAPTER_6
from engine.street_story.ch7 import CHAPTER_7

CHAPTERS: list[StoryChapter] = [
    CHAPTER_1,
    CHAPTER_2,
    CHAPTER_3,
    CHAPTER_4,
    CHAPTER_5,
    CHAPTER_6,
    CHAPTER_7,
]

CHAPTER_BY_NUMBER = {c.number: c for c in CHAPTERS}


def get_chapter(n: int) -> Optional[StoryChapter]:
    return CHAPTER_BY_NUMBER.get(n)


def chapter_to_dict(c: StoryChapter, rival_type: str = "") -> dict:
    """Serialise a chapter. rival_type = 'crew' | 'rival' | ''."""
    intro = c.intro
    post_win = c.post_win

    if c.is_rival_chapter and rival_type:
        if rival_type == "crew":
            intro = c.intro_crew or c.intro
            post_win = c.post_win_crew or c.post_win
        elif rival_type == "rival":
            intro = c.intro_rival or c.intro
            post_win = c.post_win_rival or c.post_win

    return {
        "number": c.number,
        "city": c.city,
        "country": c.country,
        "title": c.title,
        "location_detail": c.location_detail,
        "intro": intro,
        "objective": c.objective,
        "opponent_club": c.opponent_club,
        "opponent_label": c.opponent_label,
        "post_win": post_win,
        "post_loss": c.post_loss,
        "is_rival_chapter": c.is_rival_chapter,
        "is_last": c.number == len(CHAPTERS),
    }


def all_chapters_dict(rival_type: str = "") -> list:
    return [chapter_to_dict(c, rival_type) for c in CHAPTERS]
