function inchesToFeet(inch){
    const  inchConvert = inch / 12;
    return inchConvert;
}

const myTotalInch = 144;
const myInch = inchesToFeet(myTotalInch);
console.log("My Inch:"+myInch);
