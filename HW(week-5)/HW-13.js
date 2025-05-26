function copyObject(obj) {
    return Object.assign({}, obj);
}

let value1 = { x: 10, y: 20};
let value2 = { a: 1, b: 2};

console.log(copyObject(value1));
console.log(copyObject(value2));