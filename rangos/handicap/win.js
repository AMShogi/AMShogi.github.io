// put all declarations on top
// bug if input 0 then 10-piece
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
        "2": "l",
        "3": "b",
        "4": "r",
        "5": "rl",
        "6,7": "2",
        "8,9": "4",
        "10": "6",
        "11": "8",
        "12": "10",
        "13": "3p",
        "15": "nk",
    }

    let handicap = (document.getElementById('h').value).toLowerCase()

    try {
        if (parseInt(handicap) < 1) {
            throw 'Negativos no son aceptados. Tampoco zero'
        }
    }
    catch (err) {
        alert(err)
    }

    let handicap_key;
    for (const [key, value] of Object.entries(handicap_dict)) {
        if (value.includes(handicap)) {
            handicap_key = parseInt(key)
            break
        }
    }

    // let rank_num = (sensei - rank_key)
    let result = document.getElementById('win');
    let rank_ver = document.getElementById('rank_dif')
    if (handicap.includes('nk')) {
        result.innerHTML = 'Rango para ganar: ' + (Math.abs(sensei - handicap_key - 12)) + '-kyu'
        rank_ver.innerHTML = 'Rango Diferencia: ' + (sensei - (sensei - handicap_key + 3))
    } else if ((sensei - handicap_key) >= 15 || (sensei - handicap_key) == 14) {
        result.innerHTML = 'Rango para ganar: ' + (sensei - handicap_key - 13) + '-dan'
        rank_ver.innerHTML = 'Rango Diferencia: ' + (sensei - (sensei - handicap_key + 1))
    } else if ((sensei - handicap_key) < 15) {
        result.innerHTML = 'Rango para ganar: ' + (Math.abs(sensei - handicap_key - 14)) + '-kyu'
        rank_ver.innerHTML = 'Rango Diferencia: ' + (sensei - (sensei - handicap_key + 1))
    }
}