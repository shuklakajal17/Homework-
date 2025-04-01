function countChar(str){
    let count = 0;
    let char = "a";
    for(let i = 0; i < str.length; i++){
        count += (str[i] == char);
    }
    return count;
}
console.log(countChar("krishna"));
console.log(countChar("kajal"));
console.log(countChar("javascript"));
