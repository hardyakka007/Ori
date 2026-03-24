"""Footy Street — Story Mode. 7 chapters across 7 cities."""

from dataclasses import dataclass, field
from typing import Optional


@dataclass
class StoryChapter:
    number: int
    city: str
    country: str
    title: str
    location_detail: str       # Real-world location flavour
    intro: str                 # Pre-match narrative (supports \n\n)
    objective: str
    opponent_club: str         # Must match a key in CLUBS dict
    opponent_label: str        # Display name used in narrative
    post_win: str
    post_loss: str
    is_rival_chapter: bool = False   # Ch 4 & 7 — narrative shifts with rival choice
    intro_crew: str = ""             # Alt intro when rival = The Crew
    intro_rival: str = ""            # Alt intro when rival = The Rival
    post_win_crew: str = ""
    post_win_rival: str = ""


CHAPTERS: list[StoryChapter] = [
    StoryChapter(
        number=1,
        city="Modi'in",
        country="Israel",
        title="The Court at Emek Zevulun",
        location_detail="Synthetic pitch, Emek Zevulun St — next to the municipal pool",
        intro=(
            "Modi'in, Israel. A city built from nothing, designed by an architect with "
            "a vision. Neat parks, wide boulevards, quiet streets named after the tribes "
            "of Israel.\n\n"
            "You don't feel the vision right now.\n\n"
            "You're sitting on the kerb outside the Sportek complex at 6pm, watching "
            "the floodlights come on over the synthetic pitch at Emek Zevulun. "
            "The same pitch where you used to train as a kid. The same pitch you "
            "walked away from when the academy let you go.\n\n"
            "They said you were trouble. You weren't. But you couldn't prove it then.\n\n"
            "A guy called Dani taps your shoulder. His crew play here every Friday. "
            "They're a man short. You pull on your boots.\n\n"
            "It starts here. It always starts somewhere."
        ),
        objective="Win the match on your home court. Remind yourself who you are.",
        opponent_club="Hotspur FC",
        opponent_label="Dani's Crew",
        post_win=(
            "The final whistle — actually just Dani shouting 'game over, man' — cuts through "
            "the orange dusk light.\n\n"
            "You won. 5v5 on a forty-metre pitch in Modi'in. Nobody watched. Nobody cared.\n\n"
            "But something shifted inside you.\n\n"
            "Dani pulls out his phone and films you juggling the ball by the goal post. "
            "'I'm posting this,' he says. 'You move like someone who should be playing "
            "for real.'\n\n"
            "Three days later, a DM arrives from an account called @GlobalStreetCircuit."
        ),
        post_loss=(
            "You lost. On your own court.\n\n"
            "You sit by the goal post for a long time after everyone else goes home. "
            "The floodlights click off automatically at 22:00.\n\n"
            "In the dark, you make a decision: you will not go home until you can win here.\n\n"
            "You come back the next day. And the day after."
        ),
    ),
    StoryChapter(
        number=2,
        city="London",
        country="England",
        title="Under the Arches",
        location_detail="Cage pitch under the railway arches, Peckham",
        intro=(
            "London.\n\n"
            "The DM was from a guy named Marcus — runs the European leg of the "
            "Global Street Circuit. He saw Dani's clip, bought you a one-way ticket, "
            "told you to find the cage under the arches in Peckham by 7pm.\n\n"
            "You find it.\n\n"
            "It's louder than anything you've experienced. Music bouncing off the brick. "
            "Forty people crammed around a concrete cage the size of a tennis court. "
            "The London crew don't smile at you. They don't know you.\n\n"
            "Marcus hands you a bib. 'You're home team. Don't embarrass me.'"
        ),
        objective="Win in London. Put your name on the map.",
        opponent_club="The Blues Chelsea",
        opponent_label="London Street Kings",
        post_win=(
            "You walk out of the cage to a grudging nod from the London boys. "
            "That's as much as you'll get tonight.\n\n"
            "Marcus finds you by the gate. He's on the phone but gives you a thumbs up. "
            "When he hangs up, he says: 'Paris in two weeks. You in?'\n\n"
            "You're in."
        ),
        post_loss=(
            "The London boys are better than you expected. You lose, but you don't fold.\n\n"
            "Marcus watches everything. After the match he pulls you aside. "
            "'You've got something,' he says. 'But you're not ready for Paris yet. "
            "Come back Saturday. Train with us.'\n\n"
            "You train. You get ready."
        ),
    ),
    StoryChapter(
        number=3,
        city="Paris",
        country="France",
        title="Banlieue Code",
        location_detail="Concrete cage, Seine-Saint-Denis — behind the Tour de la Liberté",
        intro=(
            "Paris.\n\n"
            "Not the Paris of the postcards. No Eiffel Tower, no tourists.\n\n"
            "Seine-Saint-Denis. Tower blocks rising above a concrete football cage "
            "with a chain-link fence that rattles when the ball hits it. "
            "A hand-painted 'BANLIEUE FC' in yellow letters on the far wall.\n\n"
            "The locals have been running street football here for fifteen years. "
            "Outsiders don't usually win.\n\n"
            "You're an outsider.\n\n"
            "A kid no older than thirteen walks up to you before kick-off and says, "
            "in accented English: 'You don't win here. But it is good that you try.'\n\n"
            "You smile. 'Watch me.'"
        ),
        objective="Win in Paris. Earn their respect.",
        opponent_club="Parisians FC",
        opponent_label="Banlieue FC",
        post_win=(
            "When the game ends, there's silence for a second. Then the kid who warned "
            "you — he starts clapping. Slow. One pair of hands.\n\n"
            "The others follow.\n\n"
            "The captain of Banlieue FC shakes your hand and says nothing. "
            "In street football, that means everything.\n\n"
            "Marcus ticks your name off a list. 'Lagos next,' he says. "
            "'Different level. Be ready.'"
        ),
        post_loss=(
            "Banlieue FC are everything Marcus warned you about. Relentless, fast, "
            "reading the walls like the ball is on a string.\n\n"
            "You lose with your head up. The kid who warned you gives you a nod "
            "on the way out. 'Next time,' he says.\n\n"
            "You come back. You win the rematch."
        ),
    ),
    StoryChapter(
        number=4,
        city="Lagos",
        country="Nigeria",
        title="The Confrontation",
        location_detail="Teslim Balogun cage courts — Victoria Island",
        intro=(
            "Lagos. Heat, noise, a thousand things happening at once.\n\n"
            "You arrive at the Teslim Balogun courts and start stretching. "
            "And then you see them.\n\n"
            "Across the cage, warming up on the other side."
        ),
        intro_crew=(
            "Lagos. Heat, noise, a thousand things happening at once.\n\n"
            "You arrive at the Teslim Balogun courts and start stretching. "
            "And then you see them.\n\n"
            "The Crew.\n\n"
            "Four of them plus one you don't recognise. The same group that got you "
            "thrown out of the youth academy with a lie they never took back. "
            "They see you. The leader — you still know his face — grins.\n\n"
            "'Didn't think you'd make it this far,' he says.\n\n"
            "You say nothing. You lace your boots tighter."
        ),
        intro_rival=(
            "Lagos. Heat, noise, a thousand things happening at once.\n\n"
            "You arrive at the Teslim Balogun courts and start stretching. "
            "And then you see them.\n\n"
            "Your rival.\n\n"
            "The one player who was always ahead of you. Better stats, better agency, "
            "better opportunities — and a habit of making sure you knew it. "
            "They're warming up twenty metres away, looking right at you.\n\n"
            "'Long way from Modi'in,' they say.\n\n"
            "You say nothing. You lace your boots tighter."
        ),
        objective="Win in Lagos. Make them eat their words.",
        opponent_club="Red Devils United",
        opponent_label="The Rival",
        is_rival_chapter=True,
        post_win=(
            "You win.\n\n"
            "The cage goes quiet. Then loud.\n\n"
            "You walk past them on the way out. You don't say anything. "
            "You don't need to. The scoreboard says everything.\n\n"
            "Marcus is already booking your flights to Rio."
        ),
        post_win_crew=(
            "You win.\n\n"
            "The Crew go quiet. The leader looks at the floor.\n\n"
            "You walk past them on the way out. You stop for a second. "
            "'We're not done,' you say. 'I'll see you in the final.'\n\n"
            "Then you keep walking. Marcus is already booking your flights to Rio."
        ),
        post_win_rival=(
            "You win.\n\n"
            "Your rival stares at the scoreboard for a long time.\n\n"
            "You walk past without a word. They call after you: 'Lagos doesn't mean "
            "anything. Wait for the final.'\n\n"
            "You smile and keep walking. Marcus is already booking your flights to Rio."
        ),
        post_loss=(
            "Lagos beats you down. You lose, but you're still standing.\n\n"
            "After the game, Marcus sits with you on the steps outside the cage. "
            "'You can still make the final,' he says. 'But you need something they can't "
            "take from you. Head to Rio. Someone there can give it to you.'"
        ),
    ),
    StoryChapter(
        number=5,
        city="Rio de Janeiro",
        country="Brazil",
        title="The Favela Court",
        location_detail="Copacabana street courts — near Posto 6",
        intro=(
            "Rio de Janeiro.\n\n"
            "Three weeks on the courts near Copacabana. Six hours a day. "
            "Sand between your toes, salt in the air, the sound of the city "
            "mixing with the thud of the ball.\n\n"
            "A 61-year-old man named Zinho sits on a plastic chair watching you "
            "every day without saying a word. Then one morning he walks over, "
            "takes the ball off you mid-juggle, and says:\n\n"
            "'You are playing with your feet. You should be playing with your head.'\n\n"
            "He spends two weeks teaching you to read space. To see the pass before "
            "the pass exists. To be two touches ahead.\n\n"
            "Then he points to the favela court up the hill. 'Now show what you learned.'"
        ),
        objective="Win in Rio. Prove the training was worth it.",
        opponent_club="Rossoneri FC",
        opponent_label="Rio Favela FC",
        post_win=(
            "You play the best football of your life.\n\n"
            "After the match, Zinho stands up from his chair and claps twice. "
            "That is all. Two claps. You have never felt more certain of anything.\n\n"
            "Marcus calls that evening. 'Barcelona. Semi-final. One week.'"
        ),
        post_loss=(
            "You lose — but it's different from before. You understand things now "
            "you couldn't see.\n\n"
            "Zinho says: 'Losing is not the problem. Not learning is the problem.'\n\n"
            "You train for two more days, then fly to Barcelona."
        ),
    ),
    StoryChapter(
        number=6,
        city="Barcelona",
        country="Spain",
        title="The Semi-Final",
        location_detail="Parc de la Ciutadella outdoor cage — Tournament semi-final",
        intro=(
            "Barcelona.\n\n"
            "The city smells of sea and petrol and frying garlic. "
            "The Parc de la Ciutadella cage is lit up like a concert stage. "
            "Real cameras. A crowd of five hundred people pressed against the fence.\n\n"
            "This is not a friendly. This is not a local game. "
            "This is the Global Street Football Semi-Final.\n\n"
            "The Barcelona crew are the reigning champions of the European circuit. "
            "They haven't lost a semi-final in four years.\n\n"
            "You think about Modi'in. The court at Emek Zevulun. The floodlights "
            "clicking off at 22:00.\n\n"
            "You're not that person anymore."
        ),
        objective="Win the semi-final. One match between you and the Street Crown Final.",
        opponent_club="Catalonia FC",
        opponent_label="Barcelona Street Elite",
        post_win=(
            "Final whistle.\n\n"
            "You drop to your knees on the concrete.\n\n"
            "Five hundred people roar. Cameras flash. Marcus runs onto the pitch "
            "and picks you up.\n\n"
            "'The final is in two weeks,' he says in your ear. 'And you know who's "
            "on the other side of the draw.'\n\n"
            "You already knew."
        ),
        post_loss=(
            "You lose the semi-final by one goal.\n\n"
            "You sit on the concrete for a long time after the crowds go home.\n\n"
            "Then your phone buzzes. Marcus: 'Wildcard spot just opened. One more "
            "qualifier. You want it?'\n\n"
            "You're already standing up."
        ),
    ),
    StoryChapter(
        number=7,
        city="The Final",
        country="",
        title="Street Crowns",
        location_detail="World Street Football Final — the biggest stage",
        intro=(
            "The World Street Football Final.\n\n"
            "It doesn't have a city. It has a stage — a cage inside a converted "
            "warehouse, roof open to the sky, ten thousand people in the stands "
            "built around it.\n\n"
            "You've come from Modi'in to here. From a synthetic pitch on Emek Zevulun "
            "to the biggest street football event on earth.\n\n"
            "And across the cage, warming up, is who you always knew it would be."
        ),
        intro_crew=(
            "The World Street Football Final.\n\n"
            "A converted warehouse, roof open to the sky, ten thousand people.\n\n"
            "You've come from Modi'in to here. Six cities. Seven matches. "
            "And across the cage, warming up: The Crew.\n\n"
            "They made it through the other half of the draw. Of course they did. "
            "The story was always going to end here.\n\n"
            "The leader catches your eye across the pitch. He looks different now. "
            "Less arrogant. More scared.\n\n"
            "He should be."
        ),
        intro_rival=(
            "The World Street Football Final.\n\n"
            "A converted warehouse, roof open to the sky, ten thousand people.\n\n"
            "You've come from Modi'in to here. Six cities. Seven matches. "
            "And across the cage: your rival.\n\n"
            "They made it through the other half of the draw. Of course they did. "
            "Everything in your career has been building to this moment.\n\n"
            "They look across at you. No smirk this time. Just focus.\n\n"
            "Good."
        ),
        objective="Win the Street Crown. This is what you came back for.",
        opponent_club="White Madrid FC",
        opponent_label="Your Rival",
        is_rival_chapter=True,
        post_win=(
            "Full time.\n\n"
            "You win.\n\n"
            "The cage erupts. Someone puts a medal around your neck. "
            "Someone else hands you a trophy the size of your arm.\n\n"
            "You hold it up, and for a second everything goes quiet inside you. "
            "All the noise, the crowds, the cameras — none of it reaches you.\n\n"
            "You think of Emek Zevulun. The floodlights clicking off. "
            "Sitting on the kerb with nothing.\n\n"
            "You think of Zinho. Two claps.\n\n"
            "Then the noise comes back in, all at once, and you are in it, "
            "completely and entirely, and it is everything."
        ),
        post_win_crew=(
            "Full time. You win.\n\n"
            "The Crew are stunned into silence.\n\n"
            "The leader walks over. You expect him to say something sharp. "
            "Instead he extends his hand. 'You were always better than us,' he says. "
            "'We were afraid of it.'\n\n"
            "You shake his hand. You meant every step of this journey. "
            "Now it's done.\n\n"
            "You hold the Street Crown trophy above your head and let the roar take you."
        ),
        post_win_rival=(
            "Full time. You win.\n\n"
            "Your rival stands still for a long moment, staring at the scoreboard.\n\n"
            "Then they walk over. 'You're the best player I've ever played against,' "
            "they say. 'And I've been playing against you my whole life.'\n\n"
            "It is the most honest thing they've ever said to you.\n\n"
            "You shake their hand. Then you lift the trophy.\n\n"
            "Street Crown. Yours."
        ),
        post_loss=(
            "You lose the Street Crown Final.\n\n"
            "Runner-up at the biggest street football event on earth.\n\n"
            "You stand on the concrete as the confetti falls for someone else "
            "and you stare up through the open roof at the night sky.\n\n"
            "One day you'll win it. You know that the way you know your own name.\n\n"
            "The best chapters haven't been written yet."
        ),
    ),
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
