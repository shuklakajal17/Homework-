function findminNumber(arr){

    let min = arr[0];

    for (let i = 1; i < arr.length; i++){
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return min;
}

console.log(findminNumber([3, 7, 1, 9, 4]));
console.log(findminNumber([5, 2, 8, 6]));