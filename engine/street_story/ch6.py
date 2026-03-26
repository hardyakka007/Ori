"""Chapter 6 — Barcelona, Spain."""
from engine.street_story.base import StoryChapter

CHAPTER_6 = StoryChapter(
    number=6,
    city="Barcelona",
    country="Spain",
    title="The Semi-Final",
    location_detail="Parc de la Ciutadella tournament cage — Semi-final",
    intro=(
        "Barcelona.\n\n"
        "The city smells of sea and petrol and frying garlic.\n\n"
        "You arrive the morning before the semi-final and Marcus tells you to rest. "
        "You don't rest. You walk.\n\n"
        "La Boqueria market at La Rambla opens at 8am. You go in and don't come out "
        "for an hour. Pyramid stalls of blood oranges. Jamón hanging in curtains from "
        "the ceiling. A juice bar where you drink something made of mango, ginger, "
        "and something unnamed that turns your whole body warm. A fisherman argues "
        "with a vendor about the price of sea bass. Tourists photograph everything. "
        "You eat pan con tomate at a plastic table in the back and feel, briefly, "
        "like a human being rather than a footballer.\n\n"
        "You walk into the Gothic Quarter. The streets are medieval — barely wide "
        "enough for two people to pass — and you keep finding small squares where "
        "the architecture opens out without warning. The cathedral. The plaça. "
        "Street musicians playing guitar under archways. You have your ball with you. "
        "You can't help it. You juggle in the square and a group of tourists film you "
        "and you walk away before they can ask questions.\n\n"
        "In the afternoon you go to Barceloneta. The old fishermen's neighbourhood, "
        "now a beach suburb crammed with seafood restaurants and ice cream vendors. "
        "You find a space on the sand, far from the crowds, and do an hour of touch "
        "work. Controlling balls off the wet sand. Short passes against the stone "
        "sea wall. The city behind you. The Mediterranean in front.\n\n"
        "On the way back you cut through the Parc de la Ciutadella and find the "
        "concrete court just inside the park gates. Worn cement, faded lines, "
        "goalless nets. A group of locals — a mix of Spaniards, Brazilians, and "
        "a Senegalese man who introduces himself only as 'Lamine' — are playing "
        "three-touch. You join. No tactics, no formation. Pure game reading. "
        "This, you think, is what Xavi must have felt when he was twenty-two. "
        "The ball always in the right place, half a second before it needs to be.\n\n"
        "That evening, the semi-final cage is lit up like a concert stage. "
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
    opponent_club="FC Barcelona",
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
)
