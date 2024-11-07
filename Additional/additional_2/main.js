let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];




/*---------------------------   while  ----------------------------*/
let j =  -1;
while (j < arr.length){
    j++;
    console.log(arr[j]);
}
console.log('');


/*-----------------  while_back  ----------------------*/

/*--------------------------  odd number -----------------------*/
let i = -1;
while (i < arr.length){
    if (arr[i] % 2 !== 0){
        console.log(arr[i]);
    }
    i++;
}
console.log('');

/*------------------ even number  ---------------------------------*/

let k = 0;
while (k < arr.length) {
    if (arr[k] % 2 === 0) {
        console.log(arr[k]);
    }
}
console.log('');


