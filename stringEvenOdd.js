function evenOdd(character){
    if(typeof character !== 'string'){
        return "Please Provide a  valid string !";
    }

    let even = 0;
    let odd = 0;
    for(let i = 0; i < character.length; i++){
        if(i % 2 === 0){
            even++;
        } else {
            odd++;
        }
    }

    return (even > odd) ? "Even" : "Odd";
}

const eventOddCharacter = "Batch7";
const eventOddResult =evenOdd(eventOddCharacter);
console.log(eventOddResult);