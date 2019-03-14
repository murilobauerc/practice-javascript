// Create a function that reverses a boolean value and returns the string "boolean expected" if another variable type is given.

const reverse = bool =>
  typeof bool === "boolean" ? !bool : "boolean expected";

console.log(reverse(true)); // false
console.log(reverse(false)); // true
console.log(reverse(0)); // "boolean expected"
console.log(reverse(null)); // "boolean expected"
