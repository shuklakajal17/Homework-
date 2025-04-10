function isArmstrong(N){
    let nStr = String(N)
    let result = ""
    for(let i = 0; i < nStr.length; i++) {
        let cubeOfNumber = nStr[i] * nStr[i] * nStr[i]
        result = Number(result) + Number(cubeOfNumber)
    }

    if(result === N) {
        return "Armstrong"
    } else {
        return 'Not Armstrong'
    }
}

console.log(isArmstrong(153))  // Armstrong  
console.log(isArmstrong(123))  // Not Armstrong  
