
//slice will take only value will not remove any item of array
// slice(start index (2), ending index(5)) and well take before 5. thats mean until 4. 
let numbers = [10,25,41,62,23,40];
console.log("slice:"+numbers.slice(2,5));
console.log("Array Items:"+numbers);

//splice will take value and remove value from array
// slice(start index (2), ending index(5), add new value) value will add remove place . 
let numberList = [10,25,41,62,23,40];
console.log("item list:"+numberList)
console.log("splice:"+numberList.splice(2,5,10,50,40,50));
console.log("Items:"+numberList);