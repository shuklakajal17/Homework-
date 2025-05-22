function createObjects(keys, values) {
    let obj = {};

    for (let i = 0; i < keys.length; i++) {
        obj[keys[i]] = values[i];
    }
    return obj;
}

console.log(createObjects(["a" , "b"], [1, 2]));
console.log(createObjects(["x" , "y"], [5, 10]));