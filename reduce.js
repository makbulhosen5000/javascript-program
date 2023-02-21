// Create an object with properties that have numerical values
const myObject = {
  property1: 10,
  property2: 20,
  property3: 30
};

// Use a forEach loop to iterate over the object's properties and sum their values
let sum = 0;
Object.values(myObject).forEach(value => {
  sum += value;
});

// Output the sum to the console
console.log(sum); // Output: 60