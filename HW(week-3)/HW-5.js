function factorNumber(N) {
    let result = 1;
    let i = 1;
    
    while (i <= N) {
      result = result * i;  
      i++;
    }
    
    return result;
  }
  console.log(factorNumber(5)); 
  console.log(factorNumber(4)); 
  