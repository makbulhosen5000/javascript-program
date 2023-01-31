function odd_even(num){
    if(num % 2 == 0){
        return "event";
    }
    else{
        return "odd"
    }
}
var oddEven = odd_even(2);
console.log(oddEven);