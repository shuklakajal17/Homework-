function sumNumbers(num) {
    let sum = 0;

   
    while (num > 0) {
        let digit = num % 10;  
        sum += digit;         
        num = (num / 10);  
    }
    return sum;
}


console.log(sumNumbers(123));   
console.log(sumNumbers(4321)); 


