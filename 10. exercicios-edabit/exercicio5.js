// Given two strings, firstName and lastName, return a single string in the format "last, first".

const concatName = (firstName, lastName) => lastName.concat(", ", firstName);

console.log(concatName("John", "Doe"));
