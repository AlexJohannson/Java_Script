const form = document.getElementById('form');

form.addEventListener('submit', function (even) {
    even.preventDefault();
    const number1 = +document.getElementById('number1').value;
    const select = document.getElementById('select').value;
    const number2 = +document.getElementById('number2').value;
    const result = document.getElementById('result');

    let calculation;
    if (select === 'add') {
        calculation = number1 + number2;
    } else if (select === 'subtract') {
        calculation = number1 - number2;
    } else if (select === 'multiply') {
        calculation = number1 * number2;
    } else if (select === 'divide') {
        calculation = number1 / number2;
    }
    result.innerText = calculation;
});