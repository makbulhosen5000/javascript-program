let lyrics = "Tomi Bondo Kala pakhi Ami Jeno Ki";
let searchPakhi = "Pakhi";

let covertToLowerCase = lyrics.toLowerCase();
let convertSearchPakhi = searchPakhi.toLowerCase();
let existLyrics = covertToLowerCase.includes(convertSearchPakhi);
console.log(existLyrics);
