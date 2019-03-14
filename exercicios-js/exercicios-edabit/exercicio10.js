// Create a function that takes a number as an argument and returns the amount of digits it has.

const findDigitAmount = number => number.toString().length;

console.log(findDigitAmount(123)); // 3
console.log(findDigitAmount(56)); // 2
console.log(findDigitAmount(61217311514)); // 11
console.log(findDigitAmount(0)); // 1
