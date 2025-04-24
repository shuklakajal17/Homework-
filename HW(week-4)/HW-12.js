function countWords(sentence) {
    let count = 1;  

    
    for (let i = 0; i < sentence.length; i++) {
        
        if (sentence[i] === " ") {
            count++;  
        }
    }

    return count;  
}


console.log(countWords("I am learning JS"));    
console.log(countWords("Practice makes perfect")); 