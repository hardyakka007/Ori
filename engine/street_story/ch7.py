"""Chapter 7 — The Final, Mexico City."""
from engine.street_story.base import StoryChapter

CHAPTER_7 = StoryChapter(
    number=7,
    city="Mexico City",
    country="Mexico",
    title="Street Crowns",
    location_detail="World Street Football Final — Zócalo Arena, Mexico City",
    intro=(
        "Mexico City.\n\n"
        "You land at dawn. The city is already awake — a megalopolis of twenty-two "
        "million people that never fully sleeps. The altitude hits you first: 2,240 "
        "metres above sea level, and the air feels thin in your lungs in a way that "
        "reminds you to breathe consciously.\n\n"
        "Marcus gives you a day before the final. 'Walk,' he says. 'The city will "
        "tell you what you need to know.'\n\n"
        "You go to the Zócalo — the vast main square at the heart of the old city, "
        "one of the largest public plazas on earth. Ancient Aztec ruins sit just "
        "below the pavement. The Metropolitan Cathedral looms on one side. Children "
        "fly kites in the open space. A group of boys are playing football at the "
        "far edge of the square using a crushed plastic bottle as a ball. You watch "
        "them for twenty minutes. They play with complete seriousness. One of them, "
        "about nine years old, does a stepover so sharp it makes two grown men nearby "
        "stop and applaud.\n\n"
        "You walk south along Avenida Insurgentes — the longest urban avenue in the "
        "world, stretching the entire length of the city. Street art covers the "
        "underpasses and flyovers. Portraits. Murals. Slogans in Spanish you half-"
        "understand. The city is loud but the art is quiet, patient, watching.\n\n"
        "In the afternoon you find a small futsal court in the Colonia Roma "
        "neighbourhood — a fenced concrete pitch between apartment buildings where "
        "a regular game has been running every day for fifteen years. You don't ask "
        "to play. You just sit and watch. The ball moves at a different speed here — "
        "quick, purposeful, economical. Futsal thinking: three touches maximum, "
        "always an angle, never hold the ball when you can move it.\n\n"
        "By evening, the tournament arena is ready. It's a converted warehouse on "
        "the edge of the city centre, roof open to the sky. Ten thousand people "
        "in purpose-built stands around the cage. Floodlights blazing. Cameras on "
        "every corner. This is the World Street Football Final — the same event "
        "that has been staged in Oslo, in Tokyo, in Lagos, now here, in the city "
        "that in 2026 sits at the centre of the football world.\n\n"
        "You've come from Modi'in to here. From a synthetic pitch on Emek Zevulun "
        "to the biggest street football event on earth.\n\n"
        "And across the cage, warming up, is who you always knew it would be."
    ),
    intro_crew=(
        "Mexico City. Altitude 2,240 metres. The World Street Football Final.\n\n"
        "You walked the Zócalo this morning — the ancient plaza at the city's heart, "
        "where children play football with a crushed plastic bottle on the same stones "
        "that Aztec emperors once stood on. You found a futsal court in Colonia Roma "
        "and watched the locals play their precise, economic game. You ate tacos al "
        "pastor from a street cart on Insurgentes and thought about Modi'in.\n\n"
        "Now you're here. A converted warehouse. Ten thousand people. The cage.\n\n"
        "And across the pitch: The Crew.\n\n"
        "They made it through the other half of the draw. Of course they did. "
        "The story was always going to end here.\n\n"
        "The leader catches your eye across the pitch. He looks different now. "
        "Less arrogant. More scared.\n\n"
        "He should be."
    ),
    intro_rival=(
        "Mexico City. Altitude 2,240 metres. The World Street Football Final.\n\n"
        "You walked the Zócalo this morning — the vast ancient plaza where children "
        "play football with crushed plastic bottles on the same stones that have "
        "held civilisations. You watched futsal in Colonia Roma. You ate street tacos "
        "and thought about every pitch you've stood on since this began.\n\n"
        "Now you're here. A converted warehouse. Ten thousand people. The cage.\n\n"
        "And across the pitch: your rival.\n\n"
        "They made it through the other half of the draw. Of course they did. "
        "Everything in your career has been building to this moment.\n\n"
        "They look across at you. No smirk this time. Just focus.\n\n"
        "Good."
    ),
    objective="Win the Street Crown. This is what you came back for.",
    opponent_club="Real Madrid",
    opponent_label="Your Rival",
    is_rival_chapter=True,
    post_win=(
        "Full time.\n\n"
        "You win.\n\n"
        "The cage erupts. Someone puts a medal around your neck. "
        "Someone else hands you a trophy the size of your arm.\n\n"
        "You hold it up, and for a second everything goes quiet inside you. "
        "All the noise, the crowds, the cameras — none of it reaches you.\n\n"
        "You think of Emek Zevulun. The floodlights clicking off at 22:00. "
        "Sitting on the kerb with nothing.\n\n"
        "You think of Hackney Marshes. The man in the yellow bib who nodded. "
        "The cage in Peckham. The Stade de France on the horizon.\n\n"
        "You think of the dirt pitch in Ajegunle. The boy who nutmegged you "
        "and ran away laughing. The sand at Copacabana. Zinho. Two claps.\n\n"
        "You think of the concrete court in Barceloneta. The Gothic Quarter at dusk. "
        "And this morning — the children at the Zócalo, playing football with "
        "a crushed plastic bottle, completely serious, completely free.\n\n"
        "Then the noise comes back in, all at once, and you are in it, "
        "completely and entirely, and it is everything."
    ),
    post_win_crew=(
        "Full time. You win.\n\n"
        "The Crew are stunned into silence.\n\n"
        "The leader walks over. You expect something sharp. "
        "Instead he extends his hand. 'You were always better than us,' he says. "
        "'We were afraid of it.'\n\n"
        "You shake his hand. You meant every step of this journey. "
        "Every city. Every pitch. Every early morning and empty court.\n\n"
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
        "and you stare up through the open roof at the Mexico City sky — "
        "hazy with altitude and light pollution and ten thousand people.\n\n"
        "One day you'll win it. You know that the way you know your own name.\n\n"
        "The best chapters haven't been written yet."
    ),
)
