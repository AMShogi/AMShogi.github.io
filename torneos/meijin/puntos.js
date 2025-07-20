async function fetchData() {
    const proxyUrl = 'https://api.allorigins.win/get?url=';
    const targetUrls = [
        'https%3A%2F%2Fsystem.81dojo.com%2Fen%2Ftournaments%2F5171',
        'https%3A%2F%2Fsystem.81dojo.com%2Fen%2Ftournaments%2F5172',
        'https%3A%2F%2Fsystem.81dojo.com%2Fen%2Ftournaments%2F5173'
    ];
    const tableClasses = ['meijinA', 'meijinB', 'meijinC'];
    const paragraphIds = [
        ['a1', 'a2'],
        ['b1', 'b2'],
        ['c1', 'c2']
    ];

    try {
        for (let i = 0; i < targetUrls.length; i++) {
            const response = await fetch(proxyUrl + targetUrls[i]);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            const parser = new DOMParser();
            const doc = parser.parseFromString(data.contents, 'text/html');
            const tableRows = doc.querySelectorAll('table tr');

            // Find the correct column index for points
            let pointsColumnIndex;
            const headerCells = tableRows[0].querySelectorAll('th');
            headerCells.forEach((cell, index) => {
                if (cell.innerText.trim().toLowerCase() === 'pts.') {
                    pointsColumnIndex = index;
                }
            });

            if (typeof pointsColumnIndex === 'undefined') continue;

            const pointsArray = Array.from(tableRows)
                .map(row => {
                    const cells = row.querySelectorAll('td');
                    return cells.length > pointsColumnIndex ? cells[pointsColumnIndex]?.innerText.trim() || '' : '';
                })
                .filter(points => points !== '');

            const myTableRows = document.querySelectorAll(`.${tableClasses[i]} tr`);
            let pointsIndex = 0;
            myTableRows.forEach((row, rowIndex) => {
                const cells = row.querySelectorAll('td');
                if (cells.length > 1 && rowIndex > 1 && pointsIndex < pointsArray.length) {
                    cells[4].innerText = pointsArray[pointsIndex++];
                }
            });

            const matchRows = Array.from(doc.querySelectorAll('table tr'))
                .filter(row => row.innerHTML.includes('Kifu'))
                .slice(0, 2)
                .map(row => {
                    let text = row.innerText.trim();
                    let link = row.querySelector('a[href*="kifu"]')?.getAttribute('href') || '#';
                    text = text.replace(/\b\d{4}-\b/, '').replace('Game', '');
                    text = text.replace(/(\d{2}-\d{2})([^\s])/g, '$1 $2').replace('Kifu', ' Kifu');
                    return text.replace(' Kifu', ` <a href="${link}">Kifu</a>`).replace(/\s{2,}/g, ' ').trim();
                });

            if (matchRows.length > 0) {
                document.getElementById(paragraphIds[i][0]).innerHTML = matchRows[0];
            }
            if (matchRows.length > 1) {
                document.getElementById(paragraphIds[i][1]).innerHTML = matchRows[1];
            }

        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

document.addEventListener('DOMContentLoaded', fetchData);

// Sort
document.addEventListener('DOMContentLoaded', () => {
    const tables = document.querySelectorAll('table');

    tables.forEach(table => {
        const header = table.querySelector('th:nth-child(5)');
        if (header) {
            header.style.cursor = 'pointer';
            header.addEventListener('click', () => sortTableByPuntos(table));
        }
    });
});

function sortTableByPuntos(table) {
    const rows = Array.from(table.querySelectorAll('tr:nth-child(n+3)'));
    const sortedRows = rows.sort((rowA, rowB) => {
        const puntosA = parseInt(rowA.children[4].textContent) || 0;
        const puntosB = parseInt(rowB.children[4].textContent) || 0;
        return puntosB - puntosA;
    });

    sortedRows.forEach(row => table.appendChild(row));
}
