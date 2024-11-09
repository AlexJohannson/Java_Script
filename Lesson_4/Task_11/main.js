function summa(array) {
    let cashRegister = 0;
    for (const item of array) {
        cashRegister = cashRegister + item;
    }
    return cashRegister;
}

console.log(summa([23, 54, 87, 90, 43]));


console.log('');

/*-----------------------------------------------------------*/

let arr = [12, 75, 3, 90, 736, 43, 78, 1, 32];
sum(arr);

function sum(array) {
    let cashRegister = 0;
    for (const item of array) {
        cashRegister = cashRegister + item;
    }
    return cashRegister;
}
console.log(sum(arr));