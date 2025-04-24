function findMaxMin(arr) {
    let max = arr[0];
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        } else if (arr[i] < min) {
            min = arr[i];
        }
    }

    return "Max = " + max + ", Min = " + min;
}


console.log(findMaxMin([2, 5, 1, 8, 3]));     
console.log(findMaxMin([10, -2, 0, 9]));      