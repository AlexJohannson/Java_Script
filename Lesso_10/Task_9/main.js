const table = document.getElementById('table');
const constructor = document.getElementById('constructor');

constructor.onsubmit = function (even) {
    even.preventDefault();
    const lines = +document.getElementById('lines').value;
    const cell = +document.getElementById('cell').value;
    const information = document.getElementById('information').value;
    console.log(lines, cell, information);

    table.innerText = ' ';

    for (let i = 0; i < lines; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < cell; j++) {
            const td = document.createElement('td');
            td.innerText = information;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
};
