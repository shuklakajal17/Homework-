function reverseArray(arr){
    let reverseArr = [];

    for (let i = arr.length - 1; i >= 0; i--){
        reverseArr.push(arr[i]);
    }

    return reverseArr;
}


let array1 = [1, 2, 3, 4];
console.log(reverseArray(array1));  

let array2 = [7, 8, 9];
console.log(reverseArray(array2)); 