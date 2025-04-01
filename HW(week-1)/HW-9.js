function countChar(str, char){
    let count = 0;
    for(let i = 0; i < str.length; i++){
        count += (str[i] == char);

    }
    return count;
}
console.log(countChar("krishna" , "i"));
console.log(countChar("kajal", "a"));    
console.log(countChar("a javascript", 'a'));