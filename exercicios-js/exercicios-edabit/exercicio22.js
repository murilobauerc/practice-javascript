// Create a function that takes an array of strings. Return all words in the array that are exactly four letters.

const isFourLetters = arr => arr.filter(word => word.length === 4);

console.log(isFourLetters(["Ryan", "Kieran", "Jason", "Matt"]));
console.log(isFourLetters(["Tomato", "Potato", "Pair"]));
console.log(isFourLetters(["Kangaroo", "Bear", "Fox"]));
