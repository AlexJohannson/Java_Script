let a = +prompt('Enter the first number');
let b = +prompt('Enter the second number');

if (a > b) {
    confirm('The number ' + a + ' is greater than the number ' + b);
} else if (a < b) {
    confirm('The number ' + a + ' is less than the number ' + b);
} else {
    confirm(a + ' and ' + b + ' equal numbers');
}