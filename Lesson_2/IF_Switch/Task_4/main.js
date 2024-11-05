let number = +prompt('Enter the week number from 1 to 7');

switch (number) {
    case 1:
        confirm('Monday, consultation');
        break;
    case 2:
        confirm('Tuesday, working on new lesson');
        break;
    case 3:
        confirm('Wednesday, consultation');
        break;
    case 4:
        confirm('Thursday, working on new lesson');
        break;
    case 5:
        confirm('Friday, consultation');
        break;
    case 6:
        confirm('Saturday, english language lesson');
        break;
    case 7:
        confirm('Sunday, working on new lesson');
        break;
    default:
        confirm('You entered an incorrect number. Enter a number from 1 to 7');
}