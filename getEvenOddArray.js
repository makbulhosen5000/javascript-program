function getEvenOddArray(numbers){
    const evenOddNumber = [];
     for(let i = 0; i < numbers.length; i++){
        let index = i;
        let element = numbers[index];
        //if(element % 2 == 1){
        if(element % 2 == 0){
           // console.log(index, element);
            evenOddNumber.push(element);

        }
     }
     return evenOddNumber;
}

const numberList = [10,25,30,80,70,21];
const evenOddNumbers = getEvenOddArray(numberList);
console.log("Even Numbers:"+evenOddNumbers);
