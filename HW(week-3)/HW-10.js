function findLargestNumber(arr) {
    let largest = arr[0];  
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]; 
        }
    }

    return largest;  
}


console.log(findLargestNumber([3, 7, 1, 9, 4]));  
console.log(findLargestNumber([5, 2, 8, 6]));    
