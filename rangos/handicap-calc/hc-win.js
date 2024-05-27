// ToDo: script that calculates what rank does kawaii need to beat sensei at X-handicap

function rank_need(text) {
    let sensei_input = text.toLowerCase()
    let rank = Number.parseInt(sensei_input)

    if (sensei_input.includes('d')) {
        return rank += 14
    }
}

function handicap_input() {
    let sensei = rank_need(document.getElementById('sensei').value)

    const handicap_dict = {
        "0": "No handicap",
        "1": "Sente",
        "2": "Lance",
        "3": "Bishop",
        "4": "Rook",
        "5": "Rook + Lance",
        "6,7": "2-Piezas",
        "8,9": "4-Piezas",
        "10": "6-Piezas",
        "11": "8-Piezas",
        "12": "10-Piezas",
        "13": "3 Pawns",
        "14,15": "Naked King",
    }

    document.getElementById('demo').innerHTML = sensei
}