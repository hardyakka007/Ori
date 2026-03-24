"""The Journey — five story chapters following Ori Franklin's career."""

from dataclasses import dataclass
from typing import List, Optional


@dataclass
class Choice:
    text: str
    flavor_next: str   # narrative payoff shown at start of next chapter
    ori_boost: dict    # small stat boost for Ori's card


@dataclass
class Chapter:
    number: int
    title: str
    club: str          # club Ori currently plays for
    intro: str         # pre-match narrative text
    objective: str     # one-line challenge shown to player
    home_club: str     # match participants
    away_club: str
    ori_is_home: bool  # which side Ori represents
    post_win: str      # narrative shown on win
    post_loss: str     # narrative shown on loss/draw
    choice: Optional[Choice]
    ori_ovr_gain: int = 1   # OVR increase on win


CHAPTERS: List[Chapter] = [
    Chapter(
        number=1,
        title="The Trial",
        club="Youth Academy",
        intro=(
            "You are Ori Franklin, 19 years old, from Hackney, East London.\n\n"
            "You've dreamed about this moment your entire life — a trial at a top Premier Division club. "
            "The scouts are watching from the stands. Your family drove three hours to be here.\n\n"
            "This is it. Show them who you are."
        ),
        objective="Score at least one goal in the trial match.",
        home_club="Tottenham Hotspur",
        away_club="Arsenal",
        ori_is_home=True,
        post_win=(
            "The final whistle blows. You look up at the bench — the head scout nods.\n\n"
            "An hour later, a contract is placed on the table in front of you. "
            "Ori Franklin: professional footballer.\n\n"
            "You step outside and call your mum."
        ),
        post_loss=(
            "The scouts pack their notepads without making eye contact.\n\n"
            "A letter arrives the following week: 'We'll keep your details on file.'\n\n"
            "You refuse to give up. You train twice as hard. You'll be back."
        ),
        choice=Choice(
            text=(
                "After the match, a journalist from the local paper wants a quote about your debut goal. "
                "What do you say?"
            ),
            flavor_next="You spoke honestly. The fans loved it. The manager took notice.",
            ori_boost={"morale": 5},
        ),
        ori_ovr_gain=2,
    ),
    Chapter(
        number=2,
        title="The Breakthrough",
        club="Tottenham Hotspur",
        intro=(
            "Three months into your professional career, the manager calls you into his office.\n\n"
            "'I'm putting you on the bench tonight,' he says. 'Be ready. I need composure.'\n\n"
            "60th minute. Score: 0-0. The crowd is restless. He looks at you across the touchline.\n\n"
            "'Warm up, Ori.'"
        ),
        objective="Come on as a sub and win the match for Tottenham.",
        home_club="Tottenham Hotspur",
        away_club="Manchester United",
        ori_is_home=True,
        post_win=(
            "Final whistle. Hotspur win and you made the difference.\n\n"
            "Your name trends on social media overnight. Newspapers are asking questions. "
            "Your manager puts a hand on your shoulder in the tunnel.\n\n"
            "'Good lad,' he says. That's all you need."
        ),
        post_loss=(
            "The match ends in defeat. You did everything you could but it wasn't your night.\n\n"
            "The dressing room is quiet. You put your head down and work harder in training.\n\n"
            "The next game is already in your mind."
        ),
        choice=Choice(
            text=(
                "A rival club approaches your agent with a transfer offer. It's serious money. "
                "What do you do?"
            ),
            flavor_next="You stayed loyal. The club rewarded your commitment.",
            ori_boost={"fitness": 3},
        ),
        ori_ovr_gain=1,
    ),
    Chapter(
        number=3,
        title="The Rival",
        club="Manchester City",
        intro=(
            "A shock transfer. The biggest club in the city pays a record fee for a 20-year-old.\n\n"
            "Your first game in City blue? Away at Tottenham. "
            "The fans who used to chant your name now boo it.\n\n"
            "Football is brutal. And beautiful. Stand tall, Ori."
        ),
        objective="Win at your former club. Show them what they missed.",
        home_club="Tottenham Hotspur",
        away_club="Manchester City",
        ori_is_home=False,
        post_win=(
            "You score the winner in the 87th minute. You don't celebrate — you can't.\n\n"
            "But inside, it means everything. In the tunnel afterwards, your former teammates "
            "shake your hand. There's respect. There's history.\n\n"
            "Football moves on. So do you."
        ),
        post_loss=(
            "The Hotspur fans roar as the full-time whistle goes.\n\n"
            "You stare at your boots in the away dressing room. "
            "This result will drive you all season.\n\n"
            "You'll face them again."
        ),
        choice=Choice(
            text=(
                "A journalist asks you to publicly criticise your former manager. "
                "He was hard on you. Do you say what you think?"
            ),
            flavor_next="You kept it professional. Your reputation grew.",
            ori_boost={"morale": 3},
        ),
        ori_ovr_gain=2,
    ),
    Chapter(
        number=4,
        title="The Derby",
        club="Manchester City",
        intro=(
            "The Manchester Derby. 55,000 inside the Etihad. Half a billion watching worldwide.\n\n"
            "Ten minutes in. Your teammate loses his head and gets a straight red card.\n\n"
            "Ten men. Eighty minutes to go. The whole world against you.\n\n"
            "Time to find out what you're made of."
        ),
        objective="Hold on with 10 men. Win or draw against Manchester United.",
        home_club="Manchester City",
        away_club="Manchester United",
        ori_is_home=True,
        post_win=(
            "The final whistle triggers pandemonium in the stands.\n\n"
            "Ten men. A derby. Eighty minutes of pure fight.\n\n"
            "This is what football means. You're the first name on the team sheet from now on. "
            "The captain looks at you and just nods."
        ),
        post_loss=(
            "They score in the 92nd minute. You gave absolutely everything.\n\n"
            "The manager addresses the dressing room: 'I couldn't ask for more from any of you.'\n\n"
            "He means it. And you know this group will come back stronger."
        ),
        choice=Choice(
            text=(
                "The captain pulls you aside before the Champions League final. "
                "'I want you to wear the armband,' he says. Do you take it?"
            ),
            flavor_next="You wore it with pride. The responsibility sharpened you.",
            ori_boost={"morale": 5},
        ),
        ori_ovr_gain=2,
    ),
    Chapter(
        number=5,
        title="The Final",
        club="Real Madrid",
        intro=(
            "One year. Four clubs. An unbelievable journey.\n\n"
            "Real Madrid. The biggest club in the world. They came for you.\n\n"
            "And now you're here — the Champions League Final at the Bernabéu. "
            "Ninety minutes between you and football immortality.\n\n"
            "This is what you were born for."
        ),
        objective="Win the Champions League Final. This is everything.",
        home_club="Real Madrid",
        away_club="Bayern Munich",
        ori_is_home=True,
        post_win=(
            "The final whistle goes.\n\n"
            "You fall to your knees on the pitch, face in your hands.\n\n"
            "The medal goes around your neck. "
            "The trophy is raised above your head.\n\n"
            "Ori Franklin. Champions League winner. Remember the name."
        ),
        post_loss=(
            "Runner-up. Close, but not close enough.\n\n"
            "You stand on the pitch in the falling confetti of the winning team "
            "and stare up at the sky for a long time.\n\n"
            "You'll be back. The best chapters haven't been written yet."
        ),
        choice=None,
        ori_ovr_gain=3,
    ),
]

CHAPTER_BY_NUMBER = {c.number: c for c in CHAPTERS}


def get_chapter(n: int) -> Optional[Chapter]:
    return CHAPTER_BY_NUMBER.get(n)


def chapter_to_dict(c: Chapter) -> dict:
    return {
        "number": c.number,
        "title": c.title,
        "club": c.club,
        "intro": c.intro,
        "objective": c.objective,
        "home_club": c.home_club,
        "away_club": c.away_club,
        "ori_is_home": c.ori_is_home,
        "post_win": c.post_win,
        "post_loss": c.post_loss,
        "ori_ovr_gain": c.ori_ovr_gain,
        "choice": {
            "text": c.choice.text,
            "flavor_next": c.choice.flavor_next,
        } if c.choice else None,
        "is_last": c.number == len(CHAPTERS),
    }
