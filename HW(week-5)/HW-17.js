function findKeys(obj) {
    let result = [];
    let entries = Object.entries(obj);


    for (let i = 0; i < entries.length; i++)  {
        let [key , value] = entries[i];
        if (value > 50) {
            result.push(key);
        }
    }
    return result;
}

console.log(findKeys({a: 30, b: 60, c: 90}));
console.log(findKeys({x: 51, y: 49,}));