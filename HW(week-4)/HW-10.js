function findElement(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i;
        }
    }
    return -1
}
console.log(findElement([1, 2, 3, 4, 5], 3));
console.log(findElement([10, 20, 30], 20));