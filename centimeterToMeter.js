function centimeterToMeter(meter){
       const weKnow1Meter = 100;
       const result = meter * weKnow1Meter;
       return result;
}
const meter = 2;
const totalMeter = centimeterToMeter(meter);
console.log(totalMeter);