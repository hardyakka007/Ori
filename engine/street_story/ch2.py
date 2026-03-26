"""Chapter 2 — London, England."""
from engine.street_story.base import StoryChapter

CHAPTER_2 = StoryChapter(
    number=2,
    city="London",
    country="England",
    title="Under the Arches",
    location_detail="Cage pitch under the railway arches, Peckham",
    intro=(
        "London.\n\n"
        "The DM was from a guy named Marcus — runs the European leg of the Global "
        "Street Circuit. He saw Dani's clip, bought you a one-way ticket, told you "
        "to find the cage under the arches in Peckham by 7pm.\n\n"
        "You arrive at Peckham Rye station mid-afternoon with a holdall and no plan. "
        "Rye Lane is immediately everything — a wall of sound, jerk chicken smoke "
        "drifting from a hatch in the wall, a barber playing Afrobeats loud enough "
        "to be heard from the bus stop. You walk the length of it twice just to feel "
        "the pulse of the place.\n\n"
        "You take the stairs up to Peckham Levels — a former multi-storey car park "
        "turned into studios and a rooftop food hall. Six floors up, with the whole "
        "of South London spread out behind you, you eat suya from a paper tray and "
        "watch the city. From up here you can see three parks, two church spires, "
        "and the glint of the Thames in the distance.\n\n"
        "Then you walk to Hackney Marshes. It takes an hour on the bus and two stops "
        "on the Overground. You need to see it — everyone who knows football in this "
        "city knows the Marshes. Eighty grass pitches stretching out across the Lea "
        "Valley like a green parliament of the game. Sunday League men warming up, "
        "coaches shouting in four languages at once. You play a half on a random "
        "pitch where a team is a man short. Nobody asks your name. You score twice. "
        "A man in a yellow bib nods at you on the way off. That's it. That's the "
        "highest compliment the Marshes gives.\n\n"
        "On the way back south you cut through Stockwell. You find one of the estate "
        "cages — a metal-fenced concrete box on the corner of a housing block. "
        "The fence rattles when the ball hits it. Three teenagers are running "
        "two-touch drills with a precision that makes you slow down and watch. "
        "This is where Jadon Sancho learned to think faster than defenders. You can "
        "feel it in the walls.\n\n"
        "You join in. Half an hour. No score. Just sharpening.\n\n"
        "At 6:45pm you find the cage under the railway arches in Peckham. "
        "It's louder than anything you've experienced. Music bouncing off the brick. "
        "Forty people crammed around a concrete cage the size of a tennis court. "
        "The London crew don't smile at you. They don't know you.\n\n"
        "Marcus hands you a bib. 'You're home team. Don't embarrass me.'"
    ),
    objective="Win in London. Put your name on the map.",
    opponent_club="Chelsea",
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
)
