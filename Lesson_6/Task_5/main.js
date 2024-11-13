let str = 'Ревуть воли як ясла повні';
stringToArray(str);

function stringToArray(str) {
    if (str) {
        const strSplit = str.split(' ');
        return strSplit;
    }
    return [''];
}
console.log(stringToArray(str));