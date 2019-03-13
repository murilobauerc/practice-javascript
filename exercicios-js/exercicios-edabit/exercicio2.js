// Create a function that takes in 3 parameters (probability of winning, prize value, and cost of playing)
// and returns whether or not the gamble is profitable.

// how is calculated the profitable gamble:
// net_outcome = probability_of_winning * prize - cost_of_playing
// net_outcome needs to be greater than 1

const profitableGamble = (prob, prize, pay) =>
  prob * prize - pay > 0 ? true : false;

console.log(profitableGamble(0.2, 50, 9));
console.log(profitableGamble(0.9, 1, 2));
console.log(profitableGamble(0.9, 3, 2));
