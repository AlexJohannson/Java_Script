let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];



/*---------------------------   while  ----------------------------*/
let i = -1;
while (i < arr.length){
    i++;
    console.log(arr[i]);
}
console.log('');


/*---------------------   while odd  ------------------------------*/
let i = -1;
while (i < arr.length) {
    if (arr[i] % 2 !== 0) {
        console.log(arr[i]);
    }
}


/*----------------------------  for  -------------------------*/
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
console.log('');


/*---------------------  for odd ------------------------------*/
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
        console.log(arr[i]);
    }
}
console.log('');

/*-----------------------------   for_even-numbers  ----------------------*/
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }

}