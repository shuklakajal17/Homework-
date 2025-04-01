// let num1 = 3;
// let num2 = 12;


// for (let i = 0; i <= 11; i++){
//     console.log(i * num1);
//     console.log(i * num2);
// }

let num1 = 3;
getTable(num1);

let num2 = 12; 
getTable(num2);

function getTable(num){
    for(let i = 0; i <= 10; i++){
        console.log(num * i)
    }
}

