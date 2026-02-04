function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function generateKnockout() {
  const input = document.getElementById("playerList").value.trim();
  const players = input
    .split("\n")
    .map(name => name.trim())
    .filter(Boolean);

  const output = document.getElementById("outputPair");
  output.textContent = "";

  if (players.length < 2 || players.length % 2 !== 0) {
    output.textContent = "Please enter an even number of players.";
    return;
  }

  shuffle(players);

  let result = "Round 1:\n";

  for (let i = 0; i < players.length; i += 2) {
    result += `${players[i]} vs ${players[i + 1]}\n`;
  }

  output.textContent = result.trim();
}
