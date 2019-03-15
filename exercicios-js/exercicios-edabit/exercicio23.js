// Create a function that takes two strings and returns true if the first argument ends with the second argument; otherewise return false .

const checkEnding = (str1, str2) => str1.endsWith(str2);

console.log(checkEnding("abc", "bc"));
console.log(checkEnding("abc", "d"));
console.log(checkEnding("samurai", "zi"));
console.log(checkEnding("feminine", "nine"));
