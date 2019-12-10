// Write a function that takes a credit card number and only displays the last four characters. The rest of the card number must be replaced by ************.

const cardHide = card => {
  return card.replace(/.(?=.{4,}$)/g, "*");
};

console.log(cardHide("8754456321113213"));
