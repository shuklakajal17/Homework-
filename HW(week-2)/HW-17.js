// correction task

function myNumber(num){
    let result;
    if (num % 5 === 0){
        result = "divisible";
    }else {
        result = "not divisible";
    }
    return result;
}
console.log(myNumber(55));
console.log(myNumber(23));

