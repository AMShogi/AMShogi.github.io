function sortRank(n) {
    const table = document.getElementById("shogi");

    const sorts = { dan: -1, kyu: 1 };
    const asorts = Object.keys(sorts);

    [...table.rows].slice(n).sort((a, b) => (
        a = a.cells[n].textContent.split('-'), b = b.cells[n].textContent.split('-'),
        asorts.indexOf(a[n]) - asorts.indexOf(b[n]) || (a[n] - b[n]) * sorts[a[n]]
    ))
        .forEach(row => table.appendChild(row));
}