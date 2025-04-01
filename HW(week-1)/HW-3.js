//  my solution-------------

// let str = "kajal";

// for(let i = 0; i < str.length ; i++){
//     console.log(str[i]+ "-" + (i+1)  + "-" + str[i] + (i + 1))
// }


// correction---------------

function loopLearning(str){
    for(let i = 0; i < str.length; i++){
        let num = i+1;
        console.log(str[i] + "-" + num + "-" + str[i] + num);
    }
} console.log(loopLearning("kajal"));
console.log(loopLearning("tanmay"));
