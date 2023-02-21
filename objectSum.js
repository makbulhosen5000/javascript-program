
const people = [
  {name: "rohim", age: 25},
  {name: "korim", age: 30},
  {name: "toma", age: 15},
  {name: "mirja", age: 20},
];
let sum = 0;
for(let i = 0; i < people.length; i++){
      const item = people[i];
      sum = sum + item.age;
}
console.log(sum);