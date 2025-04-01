
function checkPerfectNumber(num) {
    let sum = 0;

    
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;  
        }
    }

    
    if (sum === num) {
        return "Perfect";  
    } else {
        return "Not Perfect";  
    }
}


console.log(checkPerfectNumber(6)); 
console.log(checkPerfectNumber(10));