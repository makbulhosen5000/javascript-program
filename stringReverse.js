
function myStr(text){
    let result = []
    let splitStr = text.split(' ');
    for(let i = splitStr.length-1; i >= 0; i--){
        let element = splitStr[i];
        result.push(element);
    }
    let reverse = result.join(' ');
    return reverse;
    

}

const myText = "Hello I am akash";
const stringText = myStr(myText);
console.log(stringText);