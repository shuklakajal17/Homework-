function objIsEmpty(obj) {
    return !Object.keys(obj).length
}

console.log(objIsEmpty({}));
console.log(objIsEmpty({ name: "john"}));