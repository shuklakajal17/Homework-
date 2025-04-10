function myNumber(num) {
   
    let reverse = 0;

    
    while (num > 0) {
        let digit = num % 10;       
        reverse = reverse * 10 + digit;  
        num = (num - digit) / 10;    
    }

    return reverse;
}


console.log(myNumber(1234));  
console.log(myNumber(500));   