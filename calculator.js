const calculatorOne = (num1,num2) => {
          
        const add = num1 + num2;
        const sub = num1 - num2;
        const multiple = num1 * num2;
        const divide = num1 / num2;
        const modulus = num1 % num2;

        return {add, sub,multiple,divide,modulus};
}

console.log(calculatorOne(20,10));


console.log("-----------------");

const calculatorTwo = (num1, num2, operation) =>{
        if(operation === 'add'){
            console.log( num1 + num2);
        }else if(operation === 'subtract'){
            console.log( num1 - num2);
        }else if(operation === 'multiple'){
            console.log( num1 * num2);
        }else if(operation === 'divide'){
            console.log(num1 / num2); 
        }else if(operation === 'subtract'){
            console.log(object); num1 % num2;
        }else{
            console.log("invalid operation");
        }
}

const num1 = 20;
const num2 = 15;
calculatorTwo(20,10,'add'); 
calculatorTwo(20,10,'subtract'); 
calculatorTwo(20,10,'multiple'); 
calculatorTwo(20,10,'divide'); 
calculatorTwo(20,10,'modulus'); 

