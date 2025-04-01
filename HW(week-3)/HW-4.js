function checkNumber(num) {
    if (num <= 1) {
        return "Not Prime";
    }

    let i = 2;
    while (i <= (num)) {
        if (num % i === 0) {
            return "Not Prime";
        }
        i++;
    }

    return "Prime";
}


console.log(checkNumber(7)); 
console.log(checkNumber(8));
