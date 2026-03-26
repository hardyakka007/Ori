"""Chapter 5 — Rio de Janeiro, Brazil."""
from engine.street_story.base import StoryChapter

CHAPTER_5 = StoryChapter(
    number=5,
    city="Rio de Janeiro",
    country="Brazil",
    title="The Favela Court",
    location_detail="Mangueira favela community pitch — near the Maracanã",
    intro=(
        "Rio de Janeiro.\n\n"
        "You start at Copacabana. Everyone does.\n\n"
        "The beach is four kilometres long and the entire length of it is lined with "
        "small football goal mouths — painted white, worn down, always occupied. "
        "You join a game near Rua Santa Clara at 7am when the sand is still cool. "
        "Brazilians play football on sand the way other countries play on turf — "
        "total commitment, no reduction of pace, first touch as clean as anything "
        "you've seen indoors. A teenager pulls off a bicycle kick inches from your "
        "face and apologises in Portuguese that you don't understand. You mime that "
        "it was extraordinary. He shrugs like it was nothing.\n\n"
        "By midday you're on a cable car up to Santa Marta favela. The streets are "
        "steep and narrow and covered in murals — giant portraits climbing the walls "
        "of the hillside houses. Michael Jackson filmed a music video on one of these "
        "streets. Locals point it out with the offhand pride of people who live "
        "somewhere the world has noticed. You drink guaraná from a can and look out "
        "over the city — the green hills, the flat ocean, the white buildings stacked "
        "between them.\n\n"
        "In the afternoon you take the bus to the Maracanã. You don't go inside. "
        "You just stand on the pavement outside and look at it. In 1950, over "
        "173,000 people came here to watch Brazil play Uruguay. Brazil lost. "
        "The city mourned for a year. Then it played again. You understand "
        "something about this city in that story.\n\n"
        "You find Mangueira — the favela that sits directly beside the stadium. "
        "The community pitch is a concrete court with faded lines and a chain-link "
        "backstop. The stadium looms above it. You train here every day for two weeks "
        "under the eye of a 61-year-old man named Zinho who sits on a plastic chair "
        "and says nothing for the first three days.\n\n"
        "Then one morning he walks over, takes the ball off you mid-juggle, and says:\n\n"
        "'You are playing with your feet. You should be playing with your head.'\n\n"
        "He spends two weeks teaching you to read space. To see the pass before "
        "the pass exists. To be two touches ahead.\n\n"
        "Then he points to the favela court up the hill — a rougher pitch, steeper "
        "run-off, smaller cage. 'Now show what you learned.'"
    ),
    objective="Win in Rio. Prove the training was worth it.",
    opponent_club="AC Milan",
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
)
