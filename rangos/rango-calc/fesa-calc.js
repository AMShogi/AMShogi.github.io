const K_FACTORS = [
    [720, 40],
    [1040, 36],
    [1280, 32],
    [1560, 28],
    [1920, 24],
    [2240, 20],
    [9999, 16],
];

function getElo(tr, games, results) {
    let k;
    for (const [r, kr] of K_FACTORS) {
        if (tr < r) {
            k = kr;
            break;
        }
    }
    if (k === undefined) {
        throw new Error("Invalid rating");
    }

    let change = 0;
    let iterationCount = 0;
    for (const [or_, res] of results) {
        if (++iterationCount > 10) break;

        const ev = 1 / (1 + Math.pow(10, (or_ - tr) / 400));
        // Correct handling for result: 1 for win, 0 for loss
        change += k * (res - ev);
        if (games < 100) {
            change += Math.max(1800 - tr, 0) / 200;
        }
    }

    return Math.round(tr + change);
}

function updateElo() {
    const myelo = parseInt(prompt("Player Elo: "), 10);
    const mygames = parseInt(prompt("Player games: "), 10);
    const results = [];

    while (true) {
        const oppelo = parseInt(prompt("Opponent Elo: "), 10);
        if (isNaN(oppelo)) break;

        const result = parseInt(prompt("Result (1 for win, 0 for loss): "), 10);
        if (isNaN(result) || (result !== 0 && result !== 1)) {
            alert("Invalid result input. Please enter 0 or 1.");
            continue;
        }

        results.push([oppelo, result]);
    }

    try {
        const newElo = getElo(myelo, mygames, results);
        document.getElementById('rating').textContent = `Nuevo rating: ${newElo}`;
    } catch (error) {
        console.error(error.message);
    }
}

// Initialize the Elo update process
up
    dateElo();
