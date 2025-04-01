// let arr1 = [1, 2, 3, 4];
// let sum1 = 0;


// for(let i = 0; i < arr1.length; i++){
//     sum1 += arr1[i];
// }
// console.log(sum1);



// let arr2 = [1, 2, 3, 4, 5, 6, 7];
// let sum2 = [0];

// for(let i = 0; i < arr2.length; i++){
//     sum2 += arr2[i];
// }
// console.log(sum2);

let arr1 = [1, 2, 3, 4,];
let arr2 = [1, 2, 3, 4, 5, 6, 7];

function addArray(arr){
    let sum = 0;

    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
console.log(addArray(arr1));
console.log(addArray(arr2));