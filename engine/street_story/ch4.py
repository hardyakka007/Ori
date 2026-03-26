"""Chapter 4 — Lagos, Nigeria."""
from engine.street_story.base import StoryChapter

CHAPTER_4 = StoryChapter(
    number=4,
    city="Lagos",
    country="Nigeria",
    title="The Confrontation",
    location_detail="Teslim Balogun cage courts — Victoria Island",
    intro=(
        "Lagos. Heat, noise, a thousand things happening at once.\n\n"
        "The danfo bus from Murtala Muhammed Airport hits traffic immediately — "
        "gridlock on the expressway, horns layered over horns, a man selling cold "
        "water through the window for twenty naira. Lagos doesn't ease you in. "
        "It grabs you by the collar from the second you land.\n\n"
        "Your first stop is Balogun Market on Lagos Island. One of the largest open "
        "markets in West Africa — a dense grid of streets where fabric, shoes, food "
        "and phone cases compete for the same square metre of air. You get lost twice. "
        "You buy a bottle of water and a bag of chin-chin from a stall and eat it "
        "standing on a corner, watching the flow of the crowd with the kind of "
        "attention you usually reserve for watching football.\n\n"
        "In the afternoon, Marcus takes you to Surulere on the mainland. Ojuelegba — "
        "a crossroads so legendary it's been immortalised in songs. You find suya "
        "stalls on the roadside run by Hausa men who've been grilling skewers over "
        "coal since before you were born. You eat standing up. It's the best thing "
        "you've tasted in three months.\n\n"
        "Then you go to Ajegunle. Marcus drives slowly through the streets and "
        "doesn't say much. Narrow roads. Zinc-roofed buildings pressed close together. "
        "And everywhere — football. Scratch games on dirt pitches with car-tyre "
        "goalposts. A three-a-side on a concrete slab between two buildings. "
        "A boy no older than ten doing step-overs at full speed in flip-flops. "
        "This is where Victor Osimhen grew up. Where Jay-Jay Okocha learned to play "
        "without a coach telling him what to do. The football here isn't organised — "
        "it's just happening, constantly, because this is what the city runs on.\n\n"
        "You ask Marcus if you can play. He parks the car.\n\n"
        "You play for forty minutes on a dirt pitch in Ajegunle. No score is kept. "
        "The kids swarm you. One nutmegs you and runs away laughing. You nutmeg him "
        "back and he looks at you like you've broken some rule of nature. "
        "You laugh for the first time in days.\n\n"
        "That evening you arrive at the Teslim Balogun courts and start stretching. "
        "And then you see them.\n\n"
        "Across the cage, warming up on the other side."
    ),
    intro_crew=(
        "Lagos. Heat, noise, a thousand things happening at once.\n\n"
        "The danfo bus from Murtala Muhammed Airport hits traffic immediately — "
        "gridlock on the expressway, horns layered over horns, a man selling cold "
        "water through the window for twenty naira. Lagos doesn't ease you in.\n\n"
        "You go to Ajegunle. You play on a dirt pitch with car-tyre goalposts "
        "in the afternoon — Osimhen country, Okocha country, the place where Lagos "
        "football was born. You feel the freedom of it. No tactics. No system. "
        "Just the ball and your instincts.\n\n"
        "That evening you arrive at the Teslim Balogun courts and start stretching. "
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
        "The danfo bus from Murtala Muhammed Airport hits traffic immediately — "
        "gridlock on the expressway, horns layered over horns. Lagos doesn't ease "
        "you in. It grabs you by the collar.\n\n"
        "You go to Ajegunle. You play on a dirt pitch with car-tyre goalposts — "
        "raw, uncoached, pure. Then suya on Ojuelegba Road. Then the cage.\n\n"
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
    opponent_club="Manchester United",
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
)
