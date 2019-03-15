// Zip codes consist of 5 consecutive digits. Given a string, write a function to determine whether the input is a valid zip code.

const isValidCode = str => isNaN(str) === false;

console.log(isValidCode("59001"));
console.log(isValidCode("853a7"));
console.log(isValidCode("732 32"));
