let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];




/*---------------------------   while  ----------------------------*/
let i = -1;
while (i < arr.length){
    i++;
    console.log(arr[i]);
}
console.log('');


/*---------------------   while odd  ------------------------------*/
let j = -1;
while (j < arr.length) {
    if (arr[j] % 2 !== 0) {
        console.log(arr[j]);
    }
}