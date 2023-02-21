function radianToDegree(radian){
    if(typeof radian !== 'number'){
        return "Please ! type the number";
    }
    const oneRadian = 57.2957795;
    const result = (oneRadian * radian).toFixed(2);
    return result; 
}

const radian = radianToDegree(25);
console.log(radian);