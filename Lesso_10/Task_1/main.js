
const buttonPress = document.getElementsByClassName('Press')[0];
const quote = document.getElementById('quote');
const quoteTitle = quote.querySelector('h2');
const quoteText = quote.querySelector('p');

let click = 1;

buttonPress.onclick = function (){
    if (click === 1) {
        quoteTitle.style.display = 'none';
    } else if (click === 2) {
        quoteText.style.display = 'none';
    } else if (click === 3) {
        quote.style.display = 'none';
    }
     click++;
}