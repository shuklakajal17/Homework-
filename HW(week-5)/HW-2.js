function getObjectKeys(obj) {
    return Object.getOwnPropertyNames(obj);
}

let result1 = getObjectKeys({ name: "john", age: 25});
let result2 = getObjectKeys({ a: 1, b: 2, c: 3});

console.log(result1);
console.log(result2);