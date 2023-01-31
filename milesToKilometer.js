function mileToKilometer(miles){
    const km = miles * 1.609344;
    return km;
}

const givenMiles = 2;
let kilometer = mileToKilometer(givenMiles);
console.log(kilometer);
console.log(1.609344*2);