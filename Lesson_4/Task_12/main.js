let array = [1232, 56, 83, 78, 34, 90];
swap(array);

function swap(arr, i1, i2) {
    if (i1 < arr.length && i2 < arr.length) {
        let temp = arr[i1];
        arr[i1] = arr[i2];
        arr[i2] = temp;
        return arr;
    }
    return 'error';
}

console.log(swap((array), 0, 2));