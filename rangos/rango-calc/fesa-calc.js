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
    for (const [or_, res] of results) {
        const ev = 1 / (1 + Math.pow(10, (or_ - tr) / 400));
        change += k * Math.max(res - ev, (or_ - tr) / 160 if res === 1 ? : -ev);
        if (games < 100) {
            change += Math.max(1800 - tr, 0) / 200;
        }
    }
    return Math.round(tr + change);
}

function updateElo() {
    const myElo = parseInt(prompt("Player Elo:"));
    const myGames = parseInt(prompt("Player games:"));
    const results = [];
    let oppElo, result;
    
    while (true) {
        try {
            oppElo = parseInt(prompt("Opponent Elo:"));
            result = parseInt(prompt("Result:"));
            results.push([oppElo, result]);
        } catch {
            break;
        }
    }

    const newElo = getElo(myElo, myGames, results);
    document.getElementById('rating').innerText = `Nuevo rating: ${newElo}`;
}

update
    Elo();
