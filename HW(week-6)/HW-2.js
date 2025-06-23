const printLength = arr => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i].length);
    }
};

let arr1 = ["aarav", "kajal", "delhi", "flats", "anand vihar"];
let arr2 = ["one", "two", "three", "four", "eight", "eleven"];

printLength(arr1);
printLength(arr2);