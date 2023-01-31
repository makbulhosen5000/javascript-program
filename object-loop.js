var shoppingCard = {
    bag:"2",
    book: 5,
    pen:5,
    pencil:4,
}

var keys = Object.keys(shoppingCard);
console.log(keys);
var values = Object.values(shoppingCard);
console.log(values);

for(var i = 0; i < keys.length; i+=1 ){
    var propertyKey = keys[i];
    var propertyValue = shoppingCard[propertyKey];
    console.log(propertyKey,propertyValue);
}
