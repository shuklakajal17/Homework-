function findKey(obj) {
    let keys = Object.keys(obj);
    let maxKey = keys[0];

    for (let i = 1; i < keys.length; i++){
        if (obj[keys[i]] > obj[maxKey]) {
            maxKey = keys[i];
        }
    }

    return maxKey;
}

console.log(findKey({a: 10, b: 50, c: 30}));
console.log(findKey({x: 100, y: 200, z: 150}));