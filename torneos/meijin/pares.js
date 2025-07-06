// Fisher-Yates shuffle
function shuffle(array) {
  return array
    .map(value => [Math.random(), value])
    .sort(([a], [b]) => a - b)
    .map(([, value]) => value);
}

// Helper: rotate array to the right (excluding first item)
function rotateRight(array) {
  return [array[0], array[array.length - 1], ...array.slice(1, -1)];
}

// Generate all round-robin rounds
function generateRoundRobin(players) {
  const numRounds = players.length - 1;
  const half = players.length / 2;
  const rounds = [];

  let rotation = [...players];

  for (let r = 0; r < numRounds; r++) {
    const round = [];
    for (let i = 0; i < half; i++) {
      const p1 = rotation[i];
      const p2 = rotation[rotation.length - 1 - i];
      round.push([p1, p2]);
    }
    rounds.push(shuffle(round)); // Randomize match order in each round
    rotation = rotateRight(rotation);
  }

  return shuffle(rounds); // Randomize round order
}

// DOM interaction
function generatePairings() {
  const num = parseInt(document.getElementById("numPlayers").value);
  const output = document.getElementById("output");
  output.innerHTML = "";

  if (num < 2 || num % 2 !== 0) {
    output.textContent = "Please enter an even number.";
    return;
  }

  const players = Array.from({ length: num }, (_, i) => `Player ${i + 1}`);
  const rounds = generateRoundRobin(players);

  rounds.forEach((round, i) => {
    const div = document.createElement("div");
    div.innerHTML = `Round ${i + 1}:<br>` +
      round.map(([p1, p2]) => `${p1} vs ${p2}`).join("<br>");
    output.appendChild(div);
    output.appendChild(document.createElement("br"));
  });
}
