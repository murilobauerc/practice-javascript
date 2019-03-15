// Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:

const equalSlices = (total, people, each) =>
  people * each <= total ? true : false;

console.log(equalSlices(11, 5, 2));
console.log(equalSlices(11, 5, 3));
console.log(equalSlices(8, 3, 2));
console.log(equalSlices(8, 3, 3));
console.log(equalSlices(24, 12, 2));
