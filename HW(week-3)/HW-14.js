
function calculatePower(a, b) {
    let result = 1;

    
    for (let i = 0; i < b; i++) {
        result *= a;
    }

    return result;
}


console.log(calculatePower(2, 3));
console.log(calculatePower(5, 2)); 