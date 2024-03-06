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
    for (const [r, kr] of K_FACTORS) {
        if (tr < r) {
            const k = kr;
            let change = 0;
            for (const [or_, res] of results) {
                const ev = 1 / (1 + 10 ** ((or_ - tr) / 400));
                change += k * Math.max(res - ev, (or_ - tr) / 160 * (res === 1 ? 1 : -ev));
                if (games < 100) {
                    change += Math.max(1800 - tr, 0) / 200;
                }
            }
            return Math.round(tr + change);
        }
    }
    throw new Error("Invalid rating");
}

function fesa_calc() {
    try {
        const myElo = parseInt(prompt("Player rating:"));
        const numOpponents = parseInt(prompt("Number of games:"));
        const results = [];

        for (let i = 0; i < numOpponents; i++) {
            const oppElo = parseInt(prompt("Opponent's rating:"));
            const result = parseInt(prompt("Result (1 for win, 0 for loss):"));
            results.push([oppElo, result]);
        }

        const newElo = getElo(myElo, numOpponents, results);
        document.getElementById('rating').textContent = `Nuevo rating: ${newElo}`;
    } catch (error) {
        alert("Please enter positive integers.");
    }
}

fesa_calc();