function convertString(jsonStr) {
    return JSON.parse(jsonStr);
}

let value1 ='{"name" : "alisce" , "age" : 22}';
let value2 ='{"x" :1, "y" : true}';



console.log(convertString(value1));
console.log(convertString(value2));