function isLeapYear(year){
    if(year % 4 == 0){
        return "Leap Year";
    }else if(year % 100 == 0){
        return "leap year";
    }else if(year % 400 == 0){
        return "leap year";
    }
        return "not leap year";
}
const year = 110;
const leapYear = isLeapYear(year);
console.log(leapYear);