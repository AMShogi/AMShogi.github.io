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
        let ev = 1 / (1 + 10 ** ((or_ - tr) / 400));
        change += k * Math.max(res - ev, (or_ - tr) / 160, res === 1 ? (or_ - tr) / 160 : -ev);
        if (games < 100) {
            change += Math.max(1800 - tr, 0) / 200;
        }
    }
    return Math.round(tr + change);
}

function main() {
    let myElo = parseInt(prompt("Jugador Rating: "));
    let myGames = parseInt(prompt("Partidas jugadas: "));
    let results = [];
    
    try {
        while (true) {
            let oppElo = parseInt(prompt("Oponente Elo: "));
            let result = parseInt(prompt("Victoria 1 y Derrota 0: "));
            results.push([oppElo, result]);
        }
    } catch (e) {
        if (!(e instanceof TypeError)) {
            throw e;
        }
    }

    alert("New Elo: " + getElo(myElo, myGames, results));
}

ma
    in();
