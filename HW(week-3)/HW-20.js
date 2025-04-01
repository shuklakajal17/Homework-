function checkNumber(num){
    if (num % 3 === 0 && num % 5 === 0){
        return "yes";
    } else {
        return "no";
    }
}

let number1 = 15;
console.log(checkNumber(number1));

let number2 = 9;
console.log(checkNumber(number2));