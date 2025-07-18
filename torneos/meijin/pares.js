function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

Array.prototype.rotateRight = function () {
  return [this[this.length - 1]].concat(this.slice(0, this.length - 1));
};

function generateRoundRobin(players) {
  const rounds = [];
  const numRounds = players.length - 1;
  const half = players.length / 2;
  let rotation = players.slice();

  for (let r = 0; r < numRounds; r++) {
    const round = [];
    for (let i = 0; i < half; i++) {
      const p1 = rotation[i];
      const p2 = rotation[rotation.length - 1 - i];
      round.push([p1, p2]);
    }
    rounds.push(shuffle(round));
    rotation = [rotation[0]].concat(rotation.slice(1).rotateRight());
  }

  return shuffle(rounds);
}

function generatePairings() {
  const input = document.getElementById("playerList").value.trim();
  const players = input.split("\n").map(name => name.trim()).filter(Boolean);
  const output = document.getElementById("outputPair");
  output.textContent = "";

  if (players.length < 2 || players.length % 2 !== 0) {
    output.textContent = "Please enter an even number of player.";
    return;
  }

  const rounds = generateRoundRobin(players);
  let result = "";

  for (let i = 0; i < rounds.length; i++) {
    result += `Round ${i + 1}:\n`;
    rounds[i].forEach(match => {
      result += `${match[0]} vs ${match[1]}\n`;
    });
    result += `\n`;
  }

  output.textContent = result.trim();
}
