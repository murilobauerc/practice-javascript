// Create a function that takes an array of numbers and return the first and last elements as a new array.

const firstLast = arr => [arr.shift(arr[0]), arr.pop(arr.length - 1)];

console.log(firstLast([5, 10, 15, 20, 25])); // [5,25]
