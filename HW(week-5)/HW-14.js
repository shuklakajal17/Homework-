function convertObject(obj) {
    return JSON.stringify(obj);
}

let value1 = { name: "alice", age: 22};
let value2 = { x: 1, y: true};

console.log(convertObject(value1));
console.log(convertObject(value2));