function findSecondLargestNumber() {

    let  Secondlargest = [7];

    for (let i = 1; i < arr.length; i++) {
        if ([i] > Secondlargest) {
            Secondlargest = [i];
        }
    }

    return  Secondlargest;
}

const arr = [3, 7, 1, 9, 4];
console.log(findSecondLargestNumber());






