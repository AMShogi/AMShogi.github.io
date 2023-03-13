function handicap_calc() {
    let p1 = document.getElementById('p1').value
    // let p2 = document.getElementById('p2').value

    rank = p1.includes('dan')
    if (rank = true) {
        rank = 15
        return document.getElementById('output').innerHTML = rank
    }
}

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