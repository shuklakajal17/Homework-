function printKeys(obj) {
    for (let key in obj) {
        console.log(key);
    }
}

printKeys({ name: "john", age: 25});
printKeys({ x: 1, y: 2})