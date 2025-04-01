function sumOfNumber(arr){
    let sum = 0;

    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 === 0){
            sum += arr[i];
        }
    }
    return sum;
}

let array1 = [1, 2, 3, 4, 5, 6];
console.log(sumOfNumber(array1));

let array2 = [7, 8, 9, 9];
console.log(sumOfNumber(array2));