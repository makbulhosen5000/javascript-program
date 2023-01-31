function foo(){
    console.log("foo");
    bar();
}
function bar(){
    console.log("bar");

}
foo();

function make_avg(a,b,c){
    var sum = a + b + c;
    var avg = sum / 3;
    return avg;
}
var avgNumber = make_avg(15,20,10);

console.log(avgNumber);


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

