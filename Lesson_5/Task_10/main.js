let arr = [12, 45, 990, 2, 54, 8377, 23, -12, 45, -76];

let minimumNumber = (numbers) => {
    let min = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        if (number < min) {
            min = number;
        }
    }
    return min;
}
minimumNumber(arr);
console.log(minimumNumber(arr));