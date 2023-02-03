function removeDuplicateValue(names){
    const unique = [];
    for(let i = 0; i < names.length; i++){
        let name = names[i];
        if(unique.includes(name) == false){
            unique.push(name);
        }
    }
    return unique;
}

const nameList = ["abul","kabul","abul","rohim","kamla","rohim"];
const removeDuplicateItem = removeDuplicateValue(nameList);
console.log(removeDuplicateItem);