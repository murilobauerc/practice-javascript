// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num up to length.

const arrayOfMultiples = (num, length) => {
  let gettingTheMultiples = [];
  for (let index = 1; index <= length; index++) {
    let result = num * index;
    gettingTheMultiples = [...gettingTheMultiples, result];
  }
  return gettingTheMultiples;
};
