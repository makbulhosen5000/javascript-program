function getSumInArray(numbers){
      var sum = 0;
      for(let i = 0; i < numbers.length; i++){
        let index = i;
        let element = numbers[i];
        sum = sum + element;
        console.log(index,element,sum);
      }
}

const numberList = [10,50,90,30,40,12];
getSumInArray(numberList);