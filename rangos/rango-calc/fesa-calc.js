const K_FACTORS = [
    { threshold: 720, factor: 40 },
    { threshold: 1040, factor: 36 },
    { threshold: 1280, factor: 32 },
    { threshold: 1560, factor: 28 },
    { threshold: 1920, factor: 24 },
    { threshold: 2240, factor: 20 },
    { threshold: 9999, factor: 16 }
];

function getElo(playerRating, numGames, results) {
    for (const { threshold, factor } of K_FACTORS) {
        if (playerRating < threshold) {
            let k = factor;
            let ratingChange = 0;
            for (const [opponentRating, result] of results) {
                const expectedValue = 1 / (1 + 10 ** ((opponentRating - playerRating) / 400));
                ratingChange += k * Math.max(result - expectedValue, (opponentRating - playerRating) / 160 * (result === 1 ? 1 : -expectedValue));
                if (numGames < 100) {
                    ratingChange += Math.max(1800 - playerRating, 0) / 200;
                }
            }
            return Math.round(playerRating + ratingChange);
        }
    }
    throw new Error("Invalid rating");
}

function calcRating() {
    try {
        const playerRating = parseInt(prompt("Jugador rating:"));
        const numOpponents = parseInt(prompt("Partidas jugadas:"));
        const results = [];

        for (let i = 0; i < numOpponents; i++) {
            const opponentRating = parseInt(prompt("Oponente rating:"));
            const result = parseInt(prompt("Resultado (1 para victoria y 0 para derrota):"));
            results.push([opponentRating, result]);
        }

        const newRating = getElo(playerRating, numOpponents, results);
        document.getElementById('rating').textContent = `Nuevo rating: ${newRating}`;
    } catch (error) {
        alert("Solo numeros son aceptados.");
    }
}

calcRating();