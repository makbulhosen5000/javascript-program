function getEvenOddNumberArray(numbers){
     let sum = 0;
      for(let i = 0; i < numbers.length; i+=1){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        console.log(index, element,sum);
      }
      return sum;
}

const numberList = [10,25,60,24,25,13,50];
getEvenOddNumberArray(numberList);
