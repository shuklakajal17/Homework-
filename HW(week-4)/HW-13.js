function capitalizeWords(sentence) {
    let result = "";

    for (let i = 0; i < sentence.length; i++) {
        
        if (i === 0) {
            result += sentence[i].toUpperCase();
        } else if (sentence[i - 1] === " ") {
            result += sentence[i].toUpperCase();
        } else {
            result += sentence[i];
        }
    }

    return result;
}

console.log(capitalizeWords("hello world"));     
console.log(capitalizeWords("i love coding"));   
