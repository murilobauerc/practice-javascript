// Write a function that checks if two numbers are either:

// Smaller than 0
// Greater than 0
// Exactly 0

const both = (n1, n2) =>
  (Math.sign(n1) > 0 && Math.sign(n2) > 0) ||
  (Math.sign(n1) === 0 && Math.sign(n2) === 0) ||
    (Math.sign(n1) === -1 && Math.sign(n2) === -1)
    ? true
    : false;

console.log(both(6, 2));
console.log(both(0, 0));
console.log(both(-1, 2));
console.log(both(-6, -9));

// Math.sign(x) || x > 0 = 1
// Math.sign(x) || x < 0 = -1
// Math.sign(x) || x === 0 = 0
