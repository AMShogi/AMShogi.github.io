// https://www.w3schools.com/howto/howto_js_sort_table.asp

function sort_abc(n) {
    let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0
    table = document.getElementById('shogi')
    switching = true
    dir = 'asc'
    
    while (switching) {
        switching = false
        rows = table.rows

        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false
            x = rows[i].getElementsByTagName('td')[n]
            y = rows[i + 1].getElementsByTagName('td')[n]

            if (dir == 'asc') {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    shouldSwitch = true
                    break
                }
            }
        }
        if (shouldSwitch) {
             rows[i].parentNode.insertBefore(rows[i + 1], rows[i])
             switching = true
             switchcount ++
        }
        // else {
        //     if (switchcount == 0 && dir == 'asc') {
        //         dir = 'desc'
        //         switching = true
        //     }
        // }
    }
}

function sortRank(n) {
    let table, rows, switching, i, x, y, shouldSwitch
    table = document.getElementById('shogi')
    switching = true
    
    while (switching) {
        switching = false
        rows = table.rows

        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false
            x = rows[i].getElementsByTagName('td')[n]
            y = rows[i + 1].getElementsByTagName('td')[n]

            if (Number(x.innerHTML) > Number(y.innerHTML)) {
                    shouldSwitch = true
                    break
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i])
            switching = true
        }
    }
}