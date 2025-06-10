function countStrValues(obj) {
    let cnt = 0;
    for(let key in obj) {
        if(typeof obj[key] === "string"){
            cnt++
        }
    }
    return cnt
}

console.log(countStrValues({ a: "hi", b: 2, c: "bye"}));
console.log(countStrValues({ x: "hello", y: "world", z: 3}));