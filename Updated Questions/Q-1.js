//Question-10

function findMaxVal(obj) {
    let max = [-Infinity, "a"]
    for(let key in obj) {
        if(max[0] < obj[key]) {
            max[0] = obj[key]
            max[1] = key
        }
    }
    return max[1]
}

console.log(findMaxVal({ a: 10, b: 50, c: 30}));
console.log(findMaxVal({ x: 100, y: 200, z: 150}));