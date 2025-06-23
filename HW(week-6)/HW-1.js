let arr1 = [100, 6, 5, 1, 101, 109];
let arr2 = [1, 2, 3, 4, 5];

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}


console.log(sumArray(arr1));
console.log(sumArray(arr2));