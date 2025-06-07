function countOccurence(obj) {
    let count = 0
    for(let key in obj) {
        count++
    }
    return count
}

console.log(countOccurence({ name: "john", age: 25, grade:"A"}));
console.log(countOccurence({ x: 1, y: 2, z: 3, w:4}));