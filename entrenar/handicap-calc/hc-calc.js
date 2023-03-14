function handicap_input(text) {
    let rank_input = text.toLowerCase()
    let rank = Number.parseInt(rank_input)

    if (rank_input.includes('dan')) {
        return rank += 14
    } else if (rank_input.includes('kyu')) {
        return Math.abs(rank - 15)
    } else {
        return alert('Please include kyu or dan')
    }
}

function handicap_calc() {
    let p1 = handicap_input(document.getElementById('p1').value)
    let p2 = handicap_input(document.getElementById('p2').value)

    let uwate = p1
    let shitate = p2

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
        if (rank_dif == key) {
            document.getElementById('rank dif').innerHTML = 'Rank difference: ' + key
            document.getElementById('handicap').innerHTML = 'Handicap: ' + value
        }
    }
}