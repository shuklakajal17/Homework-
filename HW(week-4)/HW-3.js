function convertString(str) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        result += str[i].toUpperCase();
    }
    return result;
}

console.log(convertString("hello"));
console.log(convertString("abc"));