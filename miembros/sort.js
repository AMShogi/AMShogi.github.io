// https://www.w3schools.com/howto/howto_js_sort_table.asp

function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("shogi");
    switching = true;
    dir = "asc";
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            if (dir == "asc") {
                x = x.innerText;
                y = y.innerText;
                if (x.localeCompare(y, 'en', { numeric: true }) > 0) {
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                x = x.innerText;
                y = y.innerText;
                if (x.localeCompare(y, 'en', { numeric: true }) < 0) {
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount++;
        } else {
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}

// function sortRank(n) {
//     const table = document.getElementById("shogi");

//     const sorts = { dan: -1, kyu: 1 };
//     const asorts = Object.keys(sorts);

//     [...table.rows].slice(1).sort((a, b) => (
//         a = a.cells[n].textContent.split('-'), b = b.cells[n].textContent.split('-'),
//         asorts.indexOf(a[n]) - asorts.indexOf(b[n]) || (a[0] - b[0]) * sorts[a[n]]
//     ))
//         .forEach(row => table.appendChild(row));
// }