function leapYearInArray(year){
     let result = [];
    for(let i = 0; i < year.length; i++){
        let index = i;
        let element = year[index];
        if(element % 4 == 0){
            result.push(element);
        }
    }
    return result;

}

const leapYears = [2023, 2024, 2025,2028, 2030];
const leapYear = leapYearInArray(leapYears);
console.log("leap year are "+leapYear);