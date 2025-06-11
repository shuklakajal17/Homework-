function printValues(obj) {
    for (let key in obj) {
        console.log(obj[key]);
    }
}



printValues({ name: "john", age: 25});
printValues({ x: 10, y: 20});
