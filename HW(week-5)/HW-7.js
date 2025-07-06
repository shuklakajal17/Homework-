function checkNumbericvalues(obj) {
    let objLength = 0;
    let count = 0
    for(let key in obj) {
        if(typeof obj[key] === "number") {
            count++;
        }
        objLength++
    }
    return count === objLength
}

console.log(checkNumbericvalues({ a: 10, b: 20, c: 30}));
console.log(checkNumbericvalues({ a: 10, b: "ten"}));
