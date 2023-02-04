function onlyPositiveValue(){
    const myNum = [10, 50, 70, 80, -5, 50, 40];
    let positiveValue =[];
   for(let i = 0; i < myNum.length; i++){
    let item = myNum[i];
    if(item == -5){
        break;
    }
    positiveValue.push(item);
    }
    return positiveValue;
}

const updateArray = onlyPositiveValue();
console.log(updateArray);