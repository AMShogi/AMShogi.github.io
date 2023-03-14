function handicap_input(text) {
    rank_input = text.toLowerCase()
    rank = Number.parseInt(rank_input)

    if (rank_input.includes('dan')) {
        return rank += 14
    } else if (rank_input.includes('kyu')) {
        return Math.abs(rank - 15)
    } else {
        return alert('Please include kyu or dan')
    }
}

function handicap_calc() {
    p1 = handicap_input(document.getElementById('p1').value)
    p2 = handicap_input(document.getElementById('p2').value)
}

    // rank1 = Number.parseInt(p1)

    // if (p1.includes('dan')) {
    //     rank1 += 14
    //     return document.getElementById('output').innerHTML = rank1
    // } else if (p1.includes('kyu')) {
    //     return rank1
    // }

// const handicap_dict = {
//     "0": "No handicap",
//     "1": "Sente",
//     "2": "Lance",
//     "3": "Bishop",
//     "4": "Rook",
//     "5": "Rook + Lance",
//     "6,7": "2-piece",
//     "8,9": "4-piece",
//     "10": "6-piece",
//     "11": "8-Piece",
//     "12": "10-Piece",
//     "13": "3 Pawns",
//     "14,15": "Naked King",
// }