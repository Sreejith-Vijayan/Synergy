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

  loader.style.display = "block";
  resultBox.classList.add("hidden");

  setTimeout(() => {
    loader.style.display = "none";

    const choices = [optionA, optionB, "neither", "both", "something entirely unexpected"];
    const reasons = [
      "was recommended by an emotional goldfish.",
      "resonates with the moon's gravitational mood.",
      "is statistically 74.2% more hilarious.",
      "aligns with your past life as a raccoon.",
      "has deeper meme potential.",
      "was whispered by the wind (we think).",
      "was printed on the last fortune cookie you ignored.",
      "makes your future self cringe less.",
      "was circled in an ancient IKEA manual."
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
