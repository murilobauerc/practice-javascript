// Create a function that finds all even numbers from 1 to the given number.

const findEvenNums = number => {
  let arrayToBeFiltered = [];
  for (let i = 1; i <= number; i++) {
    arrayToBeFiltered = [...arrayToBeFiltered, i];
  }
  return arrayToBeFiltered.filter(item => item % 2 == 0);
};

console.log(findEvenNums(8));
