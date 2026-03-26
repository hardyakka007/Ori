"""Chapter 1 — Modi'in, Israel."""
from engine.street_story.base import StoryChapter

CHAPTER_1 = StoryChapter(
    number=1,
    city="Modi'in",
    country="Israel",
    title="The Court at Emek Zevulun",
    location_detail="Synthetic pitch, Emek Zevulun St — next to the municipal pool",
    intro=(
        "Modi'in, Israel. A planned city built from nothing, designed by an architect "
        "with a vision. Neat parks, wide boulevards, quiet streets named after the "
        "tribes of Israel.\n\n"
        "You don't feel the vision right now.\n\n"
        "You start the morning the way you always do here — at a corner café on the "
        "city centre strip, eating shakshuka with too much bread and a café hafuch "
        "that arrives in a glass too small for the amount of thinking you need to do. "
        "The waiter knows your order. He doesn't ask questions. You appreciate that.\n\n"
        "After breakfast you walk through Anabe Park. The lake sits flat and still "
        "in the morning light. Joggers pass you. A dog chases a ball into the water. "
        "You keep your own ball at your feet — a habit you never broke — nutmegging "
        "the bench legs and juggling between the pergola posts while a woman on the "
        "path watches you with mild alarm.\n\n"
        "By midday you're at the Ha'Ela school pitch in the Moriah neighbourhood. "
        "The gates are open from 17:00, but two kids are already kicking around on "
        "the asphalt outside the fence. You join them. It's not a game — it's just "
        "contact. Ball. Wall. Foot. The sound of it echoing off the stone houses.\n\n"
        "In the late afternoon you stop at the Farmer's Market at Lev Reut. Crates of "
        "Jaffa oranges. Jars of za'atar. A woman frying sambusak behind a folding "
        "table who gives you one for free when she sees the ball under your arm. "
        "'You play?' she asks. 'I used to,' you say. She nods. 'So play again.'\n\n"
        "At 6pm you're sitting on the kerb outside the Sportek complex, watching the "
        "floodlights come on over the synthetic pitch at Emek Zevulun. The same pitch "
        "where you used to train as a kid. The same pitch you walked away from when "
        "the academy let you go.\n\n"
        "They said you were trouble. You weren't. But you couldn't prove it then.\n\n"
        "A guy called Dani taps your shoulder. His crew play here every Friday. "
        "They're a man short. You pull on your boots.\n\n"
        "It starts here. It always starts somewhere."
    ),
    objective="Win the match on your home court. Remind yourself who you are.",
    opponent_club="Tottenham Hotspur",
    opponent_label="Dani's Crew",
    post_win=(
        "The final whistle — actually just Dani shouting 'game over, man' — cuts "
        "through the orange dusk light.\n\n"
        "You won. 5v5 on a forty-metre synthetic pitch in Modi'in. Nobody watched. "
        "Nobody cared.\n\n"
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
)
