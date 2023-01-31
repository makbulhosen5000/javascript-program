// first
function make_avg(a,b,c){
    var sum = a + b + c;
    var avg = sum / 3;
    return avg;
}
var avgNumber = make_avg(15,20,10);

console.log(avgNumber);

// second
function myAssign(assignment1, assignment2, assignment3 ){
    var totalAssignment = assignment1 + assignment2 + assignment3;
    var averageAssignment = totalAssignment / 3;
    return averageAssignment;
}
var assignment10 = 50;
var assignment20 = 60;
var assignment30 = 60;

var averageResult = myAssign(assignment10,assignment20,assignment30);
console.log(averageResult);
