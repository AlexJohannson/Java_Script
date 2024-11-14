let nums = [11, 21, 3];
sortNumbers(nums)

function sortNumbers(arrayOfNumbers, direction) {
    if (direction === 'ascending') {
        return arrayOfNumbers.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        return arrayOfNumbers.sort((a, b) => b - a);
    }


}

console.log(sortNumbers(nums, 'ascending') );

