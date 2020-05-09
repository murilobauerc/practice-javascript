// Create a function that takes two arguments (item, times). The first argument (item) is the item that needs repeating while the second argument (times) is the number of times the item is to be repeated.
//  Return the result in an array.

const repeat = (item, times) => {
  const arrayResult = [];
  for (let i = 0; i < times; i++) {
    arrayResult.push(item);
  }
  return arrayResult;
};

console.log(repeat("edabit", 3));
console.log(repeat(13, 5));
console.log(repeat("7", 2));
console.log(repeat(0, 0));
