function countCharacter(str, varible) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {

        if (str[i] === varible) {
            count++;
        }
    }
    return count;
}
console.log(countCharacter("hello" , "l"));
console.log(countCharacter("banana" , "a"));