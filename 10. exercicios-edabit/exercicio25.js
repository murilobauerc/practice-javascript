// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

const minMax = arr => [Math.min(...arr), Math.max(...arr)];

console.log(minMax([1, 2, 3, 4, 5]));
