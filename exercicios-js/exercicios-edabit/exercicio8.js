// Write a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in s.

const isPlural = string => (string.endsWith("s") ? true : false);

console.log(isPlural("change")); // false
console.log(isPlural("changes")); // true
