function countPositiveNegative(arr) {
    let positiveCount = 0;
    let negativeCount = 0;
  
    
    for (let i = 0; i < arr.length; i++) {
      let num = Math.floor(arr[i]);
  
      
      if (num > 0) {
        positiveCount++;
      } else if (num < 0) {
        negativeCount++;
      }
    }
  
    
    return { Positive: positiveCount, Negative: negativeCount };
  }
  
  
  let result1 = countPositiveNegative([1, -2, 3, -4, 5]);
  let result2 = countPositiveNegative([-1, -3, 4, 6]);
  
 
  console.log(result1); 
  console.log(result2); 
  