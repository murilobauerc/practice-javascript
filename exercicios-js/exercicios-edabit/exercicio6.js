// Create a function that takes an argument of any data type and returns 1 if it's truthy and 0 if it's falsy.

const isTruthy = input => (input ? 1 : 0);

console.log(isTruthy(0));
console.log(isTruthy(false));
console.log(isTruthy(""));
console.log(isTruthy("false"));
