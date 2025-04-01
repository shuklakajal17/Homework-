// correction task

function myAlphabet(input) {
 const vowels = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < vowels.length; i++) {
        if(input == vowels[i]) {
            return 'vowels' 
        }
    } 
    return 'Consonant';
    }
    console.log(myAlphabet('a')); 
    console.log(myAlphabet('z')); 
      
