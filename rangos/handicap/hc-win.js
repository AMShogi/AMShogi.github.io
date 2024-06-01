// ToDo: script that calculates what rank does kawaii need to beat sensei at X-handicap
// put all declarations on top
function rank_need(text) {
    let sensei_input = text.toLowerCase()
    let rank = Number.parseInt(sensei_input)

    if (sensei_input.includes('d')) {
        return rank += 14
    }

    if (sensei_input.includes('k') && rank > 15) {
        return (rank - 15) * -1
    } else if (sensei_input.includes('k')) {
        return Math.abs(rank - 15)
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
        "6,7": "2 Piezas",
        "8,9": "4 Piezas",
        "10": "6 Piezas",
        "11": "8 Piezas",
        "12": "10 Piezas",
        "13": "3 Pawns",
        "14,15": "Naked King",
    }

    let handicap = document.getElementById('h').value
    // if input 0 then 10-piece

    function toTitleCase(str) {
        if (!str) return str; // Handle empty string
        return str.split(/\s+/).map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join(' ');
    }
    hc_titlecase = toTitleCase(handicap)

    let handicap_key;
    for (const [key, value] of Object.entries(handicap_dict)) {
        if (value.includes(hc_titlecase)) {
            handicap_key = parseInt(key)
            break
        }
    }

    // let rank_num = (sensei - rank_key)
    let result = document.getElementById('win');
    let rank_ver = document.getElementById('rank_dif')
    if ((sensei - handicap_key) < 15) {
        result.innerHTML = 'Rango para ganar: ' + (Math.abs(sensei - handicap_key - 14)) + '-kyu'
        rank_ver.innerHTML = 'Rango Diferencia: ' + (sensei - (sensei - handicap_key + 1))
    } else if ((sensei - handicap_key) >= 15) {
        result.innerHTML = 'Rango para ganar: ' + (sensei - handicap_key - 13) + '-dan'
        rank_ver.innerHTML = 'Rango Diferencia: ' + (sensei - (sensei - handicap_key + 1))
    }
}