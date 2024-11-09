function arrayMinimum(numbers) {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        let number = numbers[i];
        if (number < min) {
            min = number;
        }
    }
    return min;
}

console.log(arrayMinimum([124, 894, 4, 7, -2, 45, -32]));



/*-------------------------------------------------------------------------------*/


let arr = [12, 45, 990, 2, 54, 8377, 23, -12, 45, -76];
minimumNumber(arr);

function minimumNumber(numbers) {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        let number = numbers[i];
        if (number < min) {
            min = number;
        }
    }
    return min;
}

console.log(minimumNumber(arr));

