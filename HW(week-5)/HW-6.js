function countStrValue(obj) {
    let count = 0;
    for(let key in obj) {
        if(typeof obj[key] === "string") {
            count++;
        }
    }
    return count
}

console.log(countStrValue({ a: "apple", b: 1, c: "banana"}));
console.log(countStrValue({x: "yes", y: "no", z: true}));
console.log(countStrValue({ x: "yes", y: "no", z: "might be"}));