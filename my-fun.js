function add(a,b){
    var result = a + b;
    return result;
}
var result1 = add(20,30);
var result2 = add(30,30);
console.log(result1,result2);




function buyTshirt(money){
      var price = 250;
      var dividingPrice = money * price;
      return dividingPrice;
}
var myPis = 4;
var totalMoney = buyTshirt(myPis);
console.log(totalMoney);

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

// var allCard = Object.keys(shoppingCard);
// console.log(allCard);
// var values = Object.values(shoppingCard);
// console.log(values);