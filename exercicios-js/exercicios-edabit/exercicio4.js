// Create a function that takes two strings as arguments and return either
// true or false depending on whether the total number of characters in the first string is equal
// to the total number of characters in the second string.

const comp = (str1, str2) => str1.length === str2.length;

console.log(comp("AB", "CD")); // true
console.log(comp("ABC", "DE")); // false
console.log(comp("hello", "edabit")); // false
