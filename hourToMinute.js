function hourToMinutes (hour){
    const setMinutes = hour * 60;
    return setMinutes;
}
const hour = 2;
const hours = hourToMinutes(hour);
console.log(hours +"minutes");