function isSimilar(obj1, obj2) {
    let keys1 = Object.keys(obj1)
    let keys2 = Object.keys(obj2)

    if(keys1.length !== keys2.length) return false

    for(let i = 0; i < keys1.length; i++) {
        if(keys1[i] !== keys2[i] || obj1[keys1[i]] !== obj2[keys2[i]]) {
            return false
        }
    }

    return true
}

console.log(isSimilar({ a: 1, b:2}, { a: 1, b: 2}));
console.log(isSimilar({ a: 1}, { a: 2}));
console.log(isSimilar({}, {}));