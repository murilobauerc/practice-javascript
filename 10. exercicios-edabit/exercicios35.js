// Write a function redundant that takes in a string str and returns a function that returns str.
// const f1 = redundant("apple")
// f1() ➞ "apple"

// Murilo notes: with "closures" concept, it is possible, by combining a bundle of functions (a function inside of a function)
function redundant(str) {
  return function() {
    return str;
  };
}

const f1 = redundant("banana");

console.log(f1());
