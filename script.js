function makeDecision() {
  const optionA = document.getElementById("optionA").value.trim();
  const optionB = document.getElementById("optionB").value.trim();
  const loader = document.getElementById("loader");
  const resultBox = document.getElementById("result");
  const decisionText = document.getElementById("decisionText");
  const reasonText = document.getElementById("reasonText");

  if (!optionA || !optionB || optionA.toLowerCase() === optionB.toLowerCase()) {
    alert("Please enter two different options, you chaotic genius.");
    return;
  }
setTimeout(() => {
    document.getElementById("Soundeffect").play();

    const choices = [optionA, optionB, "neither", "both"];
    const reasons = [
      "was recommended by an emotional goldfish.",
      "resonates with the moon's gravitational mood.",
      "is statistically 74.2% more hilarious.",
      "aligns with your past life as a raccoon.",
      "has deeper meme potential.",
      "was whispered by the wind (we think).",
      "was printed on the last fortune cookie you ignored.",
      "makes your future self cringe less.",
      "was circled in an ancient IKEA manual.",
      "The alignment of your socks today.",
      "Mercury being in Gatorade.",
      "Your third most recent intrusive thought.",
      "A pigeon looked at you weird.",
      "That one dream you barely remember but feel strongly about.",
      "You sneezed twice, which is obviously a sign.",
      "Your phone battery is at 69%. Destiny.",
      "You saw the number 7 too many times today.",
      "Your pet blinked after you asked the question.",
      "You had cereal with water this morning. Nothing can stop you now.",
      "You accidentally liked your ex’s story. Confidence boost!",
      "You stepped on a leaf, and it didn’t crunch. Ominous.",
      "Your Wi-Fi name is inspiring today.",
      "A mosquito spared your life last night.",
      "Someone coughed behind you. Must be fate.",
      "The sky looks slightly greenish.",
      "You’re feeling oddly powerful after brushing your teeth.",
      "The fan made a weird clicking sound.",
      "You saw a cat cross the road. Wasn’t black though. So... neutral omen?",
      "Your plant is wilting — it's clearly trying to warn you.",
      "You dropped your toothbrush. It's a metaphor.",
      "The fridge light turned off just as you opened it.",
      "You took a nap and time-skipped 4 hours.",
      "You spilled tea and it formed a vague ‘no’.",
      "The AC remote won’t work. Universe blocking the wrong choice.",
      "You forgot why you entered the kitchen. That *is* your answer.",
      "Your pillow was unusually cold on both sides.",
      "The mirror just doesn’t feel trustworthy today.",
      "You're wearing mismatched socks = chaotic good.",
      "That itch you can't reach means *yes*.",
      "The smell of rain made you emotional.",
      "Someone texted 'K' — they disapprove.",
      "You whispered your decision and the wind didn’t scream.",
      "You spilled water and it avoided the charger. Divine intervention.",
      "You got goosebumps when you thought about the other option.",
      "A dog barked three times. Morse code for 'Go for it.'",
      "Your crush posted at 3:33. That means message them.",
      "You saw a meme that oddly matches your problem.",
      "Your group chat is suspiciously silent.",
      "Your name autocorrected to something stupid — your phone disagrees.",
      "Your professor smiled weirdly today.",
      "You read a horoscope for the wrong sign but it felt right.",
      "The waiter brought the wrong food, and you liked it. Follow that logic.",
      "If you flip a coin and hope for one side — that’s the real answer.",
      "You imagined both outcomes and one made you sweat.",
      "You tried asking again and the universe blue-screened.",
      "You said 'okay' out loud and your voice cracked.",
      "You wore black socks. Feels decisive.",
      "You forgot what you were deciding — that means don’t.",
      "You asked your friend and they just said 'bro'.",
      "You pulled out a random book and read 'doom'. Hmm.",
      "The lizard on the wall stared at you.",
      "You saw a butterfly today. Might be your dead relative rooting for you.",
      "A crow cawed thrice. Might be a death threat.",
      "Your fish looked disappointed.",
      "A dog sneezed while looking at you.",
      "You almost hit a frog on your scooter. Warning?",
      "A bee landed on your textbook. That’s approval.",
      "Your neighbor's cat hissed. Go back to bed.",
      "Chose based on how cool the word sounds.",
      "You counted letters in both options. Pick the odd one.",
      "The first ad you saw on YouTube had the answer.",
      "You did a blind scroll and picked the first comment.",
      "You flipped a bottle cap — not even a coin.",
      "You used your non-dominant hand to write it out. Read it.",
      "You did rock-paper-scissors with yourself. You lost.",
      "You let autocorrect choose. 'Giraffe' it is.",
      "You opened ThinkLess. That was already a decision.",
      "You closed your eyes and saw... static. That means something.",
      "A ghost said 'YOLO' in Morse code via fridge hums.",
      "Someone said your name on a reel. It’s a sign.",
      "The stars are in maximum reverse retroshade.",
      "You heard a baby cry in the distance right after thinking about it.",
      "Your pen ran out of ink mid-sentence. It’s a metaphor.",
      "You found an old receipt with the number 42 on it. Ultimate answer.",
      "The shampoo bottle fell twice this week. Coincidence? Nope.",
      "You dropped your spoon and it pointed left. So go left?",
      "You saw a car with a number plate that felt weirdly relevant.",
      "You found a sock you haven’t seen in months. The cycle is complete.",
      "A YouTube comment said 'trust the glitch.' You are the glitch.",
      "The ceiling fan blinked once. Must be an ancient sign.",
      "Your favorite mug chipped today. It’s time to let go.",
      "You forgot your password but remembered your trauma. Priorities.",
      "A child in a meme wore the same shirt as you.",
      "You yawned while making the decision — that's boredom-based clarity.",
      "The wind pushed the door open. Welcome the answer.",
      "You misread a word as something prophetic. Run with it.",
      "The lamp flickered once. So... yes?",
    ];

    const decision = randomItem(choices);
    const reason = randomItem(reasons);

    decisionText.innerText = `You should go with: ${decision.toUpperCase()} 🎉`;
    reasonText.innerText = `${decision} ${reason}`;

    document.getElementById("confidence").innerText = Math.floor(Math.random() * 101) + "%";
    document.getElementById("vibeScore").innerText = Math.floor(Math.random() * 10) + "/10";
    document.getElementById("logicLevel").innerText = randomItem(["🧠", "💩", "👽", "🎱", "🔥", "🤯"]);

    resultBox.classList.remove("hidden");
  }, 2000);
}

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
