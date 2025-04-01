let arr1 = ["krishna", "kajal", "javascript", "lovely"];
let output1 = getlengths(arr1);

let arr2 = ["sun", "moon", "stars", "planets"];
let output2 = getlengths(arr2);


function getlengths(arr){
    let lengths = [];
    for (let i = 0; i < arr.length; i++){
        lengths.push(arr[i].length);
    }
    return lengths;
}



console.log(output1);
console.log(output2);