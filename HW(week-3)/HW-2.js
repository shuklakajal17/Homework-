function myNumber(N){
    let total = 0;
    for(let i = 1; i <= N ; i++){
        total += i;
    }
    return total;
}
console.log(myNumber(5));
console.log(myNumber(10));