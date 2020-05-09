// Create a function that takes a number (from 1 - 60) and returns a corresponding string of hyphens.

const Go = number => {
  let stringOfHyphens = "";
  for (let i = 0; i < number; i++) stringOfHyphens += "-";
  return stringOfHyphens;
};

console.log(Go(1));
console.log(Go(5));
console.log(Go(3));
