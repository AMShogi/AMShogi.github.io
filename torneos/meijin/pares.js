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
    rounds.push(round);
    rotation = [rotation[0]].concat(rotation.slice(1).rotateRight());
  }

  return shuffle(rounds).map(shuffle);
}

function generatePairings() {
  const num = parseInt(document.getElementById("numPlayers").value);
  const output = document.getElementById("output");
  output.innerHTML = "";

  if (num < 2 || num % 2 !== 0) {
    output.textContent = "Please enter an even number of players (2 or more).";
    return;
  }

  const players = Array.from({ length: num }, (_, i) => `Player ${i + 1}`);
  const rounds = generateRoundRobin(players);

  rounds.forEach((round, i) => {
    const div = document.createElement("div");
    div.innerHTML = `Round ${i + 1}:<br>`;
    round.forEach(match => {
      div.innerHTML += `${match[0]} vs ${match[1]}<br>`;
    });
    output.appendChild(div);
    output.appendChild(document.createElement("br"));
  });
}
