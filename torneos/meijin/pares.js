// Shuffle array with Fisher-Yates (random order)
function shuffle(array) {
  return array
    .map(value => [Math.random(), value])
    .sort(([a], [b]) => a - b)
    .map(([, value]) => value);
}

// Rotate array elements right, except the first element stays fixed
function rotateRight(array) {
  return [array[0], array[array.length - 1], ...array.slice(1, -1)];
}

// Generate the round-robin pairings for an even number of players
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
    rounds.push(shuffle(round));       // Shuffle matches within each round
    rotation = rotateRight(rotation);  // Rotate players for next round
  }
  return shuffle(rounds).reverse();   // Shuffle rounds, then reverse order (last round first)
}

// Main function: get player names, validate, generate and output pairings as raw HTML text
function generatePairings() {
  const output = document.getElementById("output");
  output.textContent = "";

  const input = document.getElementById("playerList").value;
  const players = input
    .split("\n")
    .map(name => name.trim())
    .filter(name => name !== "");

  const maxPlayers = 32;
  if (players.length > maxPlayers) {
    output.textContent = `Maximum allowed players is ${maxPlayers}. You entered ${players.length}.`;
    return;
  }
  if (players.length < 2 || players.length % 2 !== 0) {
    output.textContent = "Please enter an even number of player names.";
    return;
  }

  const rounds = generateRoundRobin(players);
  let html = "";

  rounds.forEach((round, i) => {
    const roundNumber = rounds.length - i;
    html += `<h3>Ronda ${roundNumber}</h3>\n`;
    round.forEach(([p1, p2]) => {
      html += `<p>${p1} vs ${p2}</p>\n`;
    });
    html += `\n`;
  });
  output.innerText = html;  // Show raw HTML tags as text for easy copy-paste
}
