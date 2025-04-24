function joinElement(arr) {
    let result = "";

    for (let i = 0; i <arr. length; i++) {
        if (i === arr.length -1) {
            result += arr[i];
        } else {
            result +=arr[i] + "";
        }
    }

    return result;
}

console.log(joinElement(["I", "am", "learning"]));
console.log(joinElement(["Javascript", "is", "fun"]));