const testJackpot = arr => {
  var mySet = new Set(arr);
  if (mySet.size === 1) return true;
  return false;
};

console.log(testJackpot(["@", "@", "@", "@"]));
console.log(testJackpot(["@", "!"]));
console.log(testJackpot(["@", "@", "@"]));
