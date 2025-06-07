function swapKeyValue(obj) {
    let newObj = {}

    for(let key in obj) {
        newObj[obj[key]] = key

    }
    return newObj
}

console.log(swapKeyValue({ a: 1, b: 2}));
console.log(swapKeyValue({ x: 10, y: 20}));