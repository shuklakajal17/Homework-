function findSecondLargestNumber(arr) {

    let  Secondlargest = [0];

    for (let i = 1; i < arr.length; i++) {
        if ([i] > Secondlargest) {
            Secondlargest = arr[i];
        }
    }

    return  Secondlargest;
}

console.log(findSecondLargestNumber([3, 7, 1, 9, 4]));
console.log(findSecondLargestNumber([5, 2, 8, 6]));












