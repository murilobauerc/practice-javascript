// Create a function that takes a string and returns a string with its letters in alphabetical order.

const alphabetSoup = word =>
  word
    .split("")
    .sort()
    .join("");

console.log(alphabetSoup("hello"));
