'use strict'

function handicap_input(text) {
    const rankInput = text.toLowerCase();
    const rank = Number.parseInt(rankInput);    

    let rank_digit = Boolean
    let rank_letter = Boolean
    function hasNum() {
        rank_letter = /^\D/.test(rankInput)
        rank_digit = /\d/.test(rankInput)
    }
    hasNum()
    try {
        if (text == '') {
            throw 'No pusiste nada -_-'
        }
        if (rank < 1) {
            throw 'Negativos no son aceptados. Tampoco zero'
        }
        if ((rank_digit == false || rank_letter == true) && rankInput.includes('b') == false) {
            throw 'El formato es: numero, letra.'
        }
        if (rankInput.includes('d') == false && rankInput.includes('b') == false
            && rankInput.includes('k') == false) {
            throw 'Por favor incluye d, k o b de beginner.'
        }
        if (rankInput.includes('d')) {
            return (rank > 9) ? rank + 14 : null;
        }
        if (rankInput.includes('b')) {
            return rank = -5
        } else if ((rankInput.includes('k') && rank > 15)) {
            if (rank > 30) {
                throw '30k es el rango mas bajo.'
            } else {
                return (rank - 15) * -1
            }
        } else if (rankInput.includes('k')) {
            return Math.abs(rank - 15)
        }
    }
    catch (err) {
        alert(err)
    }
}

function handicap_calc() {
    let p1 = handicap_input(document.getElementById('p1').value)
    let p2 = handicap_input(document.getElementById('p2').value)

    let uwate
    let shitate
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
        "6,7": "2-Piezas",
        "8,9": "4-Piezas",
        "10": "6-Piezas",
        "11": "8-Piezas",
        "12": "10-Piezas",
        "13": "3 Pawns",
        "14,15": "Naked King",
    }

    let rank_dif = uwate - shitate
    let rango = document.getElementById('rank dif')
    let handicap = document.getElementById('handicap')
    for (const [key, value] of Object.entries(handicap_dict)) {
        if (key.includes(rank_dif)) {
            rango.innerHTML = 'Rango diferencia: ' + rank_dif
            handicap.innerHTML = 'Handicap: ' + value
            return
        }
        else if (rank_dif > 15) {
            rango.innerHTML = 'Rango diferencia: ' + rank_dif
            handicap.innerHTML = 'Handicap: ' + handicap_dict["14,15"]
            return
        }
    }
}
