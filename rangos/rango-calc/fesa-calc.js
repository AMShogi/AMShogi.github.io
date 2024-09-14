const K_FACTORS = [
    [720, 40],
    [1040, 36],
    [1280, 32],
    [1560, 28],
    [1920, 24],
    [2240, 20],
    [9999, 16]
];

function getKFactor(rating) {
    return K_FACTORS.find(([limit]) => rating < limit)[1];
}

function calculateElo(currentElo, gamesPlayed, results) {
    const k = getKFactor(currentElo);
    return Math.round(
        results.reduce((elo, [opponentElo, result]) => {
            const expectedOutcome = 1 / (1 + Math.pow(10, (opponentElo - elo) / 400));
            const adjustment = k * (result - expectedOutcome);
            const gameAdjustment = gamesPlayed < 100 ? Math.max(1800 - elo, 0) / 200 : 0;
            return elo + adjustment + gameAdjustment;
        }, currentElo)
    );
}

function main() {
    const playerElo = parseInt(prompt("Player Elo: "), 10);
    const playerGames = parseInt(prompt("Player games: "), 10);
    const results = [];

    for (let i = 0; i < 10; i++) {
        const opponentEloInput = prompt("Opponent Elo: ");
        if (opponentEloInput === null || opponentEloInput.trim() === "") break;

        const resultInput = prompt("Result (1 for win, 0 for loss): ");
        if (resultInput === null || resultInput.trim() === "") break;

        const opponentElo = parseInt(opponentEloInput, 10);
        const result = parseInt(resultInput, 10);

        if (isNaN(opponentElo) || isNaN(result)) break;

        results.push([opponentElo, result]);
    }

    const newElo = calculateElo(playerElo, playerGames, results);
    document.getElementById('rating').textContent = `New Elo: ${newElo}`;
}

main();
