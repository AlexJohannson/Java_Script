let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

let i = 0;
while (i < arr.length) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
    i++;
}
console.log('');

let j = arr.length - 1;
while (j >= 0) {
    if (arr[j] % 2 === 0) {
        console.log(arr[j]);
    }
    j--;
}