const K_FACTORS = [
    [720, 40],
    [1040, 36],
    [1280, 32],
    [1560, 28],
    [1920, 24],
    [2240, 20],
    [9999, 16]
];

function getElo(tr, games, results) {
    // Determine K-factor based on the player's rating
    const k = K_FACTORS.find(([r]) => tr < r)?.[1];
    if (k === undefined) {
        throw new Error("Invalid rating");
    }

    let change = 0;
    results.forEach(([or_, res]) => {
        const ev = 1 / (1 + Math.pow(10, (or_ - tr) / 400));
        change += k * (res - ev);
        if (games < 100) {
            change += Math.max(1800 - tr, 0) / 200;
        }
    });

    return Math.round(tr + change);
}

function main() {
    const myelo = parseInt(prompt("Player Elo:"), 10);
    const mygames = parseInt(prompt("Player games:"), 10);
    const results = [];

    for (let i = 0; i < 10; i++) {
        const oppelo = parseInt(prompt("Opponent Elo:"), 10);
        const result = parseInt(prompt("Result:"), 10);
        results.push([oppelo, result]);
    }

    try {
        const newElo = getElo(myelo, mygames, results);
        document.getElementById('rating').textContent = `Nuevo rating: ${newElo}`;
    } catch (error) {
        alert(error.message);
    }
}
