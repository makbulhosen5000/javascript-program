// way one to reverse string
function stringReverse(friendProva,FriendAkash){
       if(friendProva > FriendAkash){
        return friendProva.split("").reverse().join("");
       }else{
        return FriendAkash.split("").reverse().join("");
       }
}


const reverseString = stringReverse("Prova","mh Akash");
console.log(reverseString);
console.log("...........");

// another way to reverse string 
function reverse(reverseName){
    let reverseSum = "";
    for(let i = reverseName.length-1; i >= 0; i--){
        let item = reverseName[i];
        reverseSum = reverseSum + item
    }
    return reverseSum;
}

const reverseStr = reverse("akash");
console.log(reverseStr);
