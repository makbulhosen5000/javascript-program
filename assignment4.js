//1. mindGame function for multiplication,addition,division,subtraction by any positive value.

function mindGame(positiveNumber){
    if(typeof positiveNumber !== 'number'){
        return "Please Provide a  valid number!";
    }

    let multiplication = positiveNumber * 3;
    let addition = multiplication + 10;
    let division = addition / 2;
    let subtraction = division - 5;
    return subtraction; 
}  

const positiveNumber = 5;
const positiveValueResult =mindGame(positiveNumber);
console.log(positiveValueResult);


//2. evenOdd function will return even and odd number of string. first of all will check validation and secondly will check even or odd and thirdly will check if else condition.

function evenOdd(character){
    if(typeof character !== 'string'){
        return "Please Provide a  valid string !";
    }
    let evenCount = 0;
    let oddCount = 0;
    for(let i = 0; i < character.length; i++){
       if(i % 2 == 0){
        evenCount ++;
       }else{
        oddCount++;
       }

    }
    if(evenCount > oddCount){
        return "Odd";
    }else{
        return "Even";
    }

}
const character = "chatgpt";
const eventOddResult =evenOdd(character);
console.log(eventOddResult);


//3. mindGame function firstly, done datatype validation secondly, done subtraction by 7 thirdly, done  multiplication.
function isLGSeven(number){
    if(typeof number !== 'number'){
        return "Please Provide a valid number !";
    }

    const subtractionValue = number - 7;
    const multiplicationValue = number * 2;
    if(subtractionValue < 7){
        return subtractionValue;
    }
    return multiplicationValue;

   
}


const number =  15;
console.log(isLGSeven(number));





//4. findingBadData function for finding negative value of array and return the negative value.

function findingBadData(number){
    if(typeof number =='string' || number == 'number'){
        return "Enter any array value";
    }
    let count = 0;
   for(let i = 0; i < number.length; i++){
     let element = number[i];
     if(element < 0 ){
         count++
     }
   }
   return count;
}


const numberList = [-4, -9, -5, -33, -55];
console.log(findingBadData(numberList));






//5. findingBadData function for finding negative value of array and return the negative value.

function gemsToDiamond(firstParameter,secondParameter,thirdParameter){
    if(typeof firstParameter !== 'number' && secondParameter !== 'number' && thirdParameter !== 'number'){
      return  "Please provide a valid number";
    }
    const firstDiamond = firstParameter * 21;
    const secondDiamond = secondParameter * 32 ;
    const thirdDiamond = thirdParameter * 43;
    const sumOfDiamond = firstDiamond + secondDiamond + thirdDiamond;
    const totalDiamond = sumOfDiamond - 2000;
    
    if(sumOfDiamond < 2000){
        return sumOfDiamond;
    }
    return totalDiamond;
}


console.log(gemsToDiamond( 20, 200, 50));
