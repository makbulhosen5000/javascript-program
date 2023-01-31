//3! 3*2*1
function factorials(number){
    let result = 1;
   for(let i = number; i >= 1; i--){
    result = result * i; 
    console.log(i);
   }
   return result;
}
const factNum = 9;
const factorialNum = factorials(factNum);
console.log("factorial of :"+ factNum,factorialNum);