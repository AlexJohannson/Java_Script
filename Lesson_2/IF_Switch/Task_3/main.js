let day = +prompt('Enter the number from 1 to 31');

if (day <= 11) {
    confirm('Your number ' + day + ' is in the first decade of the month');
} else if (day <= 22) {
    confirm('Your number ' + day + ' is in the second decade of the month');
} else if (day <= 31) {
    confirm('Your number ' + day + ' is in the third decade of the month');
} else {
    confirm('You entered an incorrect number ' + day + ' a month has a maximum of 31 days');
}