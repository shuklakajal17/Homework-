function convertValues(obj) {
    return Object.values(obj);
}

let value1 = {name: "john", age: 25};
let value2 = {x: 10, y: 20, z: 30};

console.log(convertValues(value1));
console.log(convertValues(value2));