// Create a function that returns the number of argument it was called with.

const doSomething = (...args) => args.length;

console.log(doSomething(1, 2, 3, 4, 5, 6));
