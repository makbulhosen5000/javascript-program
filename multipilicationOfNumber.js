function multiplicationOfNumber(){
    let sum = 1;
    for(let i = 1; i<= 7; i++){
       sum = sum * i;
    }
    return sum;
}
const multiplicationResult = multiplicationOfNumber();
console.log(multiplicationResult);