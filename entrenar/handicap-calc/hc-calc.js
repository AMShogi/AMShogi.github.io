function handicap_input(text) {
    let rank_input = text.toLowerCase()
    let rank = Number.parseInt(rank_input)

    if (rank_input.includes('d')) {
        return rank += 14
    } else if (rank_input.includes('b')) {
        return rank = -5
    } else if ((rank_input.includes('k') && rank > 15)) {
        return (rank - 15) * -1
    } else if (rank_input.includes('k')) {
        return Math.abs(rank - 15)
    } else {
        throw Error(alert('Por favor incluye d, k o b de beginner'))
    }
}

function handicap_calc() {
    let p1 = handicap_input(document.getElementById('p1').value)
    let p2 = handicap_input(document.getElementById('p2').value)

    if (p1 > p2) {
        uwate = p1
    } else {
        uwate = p2
    }

    if (p2 > p1) {
        shitate = p1
    } else {
        shitate = p2
    }

    const handicap_dict = {
        "0": "No handicap",
        "1": "Sente",
        "2": "Lance",
        "3": "Bishop",
        "4": "Rook",
        "5": "Rook + Lance",
        "6,7": "2-piece",
        "8,9": "4-piece",
        "10": "6-piece",
        "11": "8-Piece",
        "12": "10-Piece",
        "13": "3 Pawns",
        "14,15": "Naked King",
    }

    let rank_dif = uwate - shitate
    // let result = document.getElementById('output').innerHTML
    for (const [key, value] of Object.entries(handicap_dict)) {
        if (key.includes(rank_dif)) {
            document.getElementById('rank dif').innerHTML = 'Rango diferencia: ' + rank_dif
            document.getElementById('handicap').innerHTML = 'Handicap: ' + value
            return
        }
        else if (rank_dif > 15) {            
            document.getElementById('rank dif').innerHTML = 'Rango diferencia: ' + rank_dif
            document.getElementById('handicap').innerHTML = 'Handicap: ' + handicap_dict["14,15"]
            return
        }
    }
}
