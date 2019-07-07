Array.prototype.reduce2 = function(callback) {
  let acumulador = this[0];
  for (let i = 0; i < this.length; i++) {
    acumulador = callback(acumulador, this[i]);
  }
  return acumulador;
};

const soma = (total, valor) => total + valor;
// total: 0, valor: 1

// console.log([0, 1, 2, 3].reduce(soma));

// [0,1,2,3]
// reduce: 0 + 1 = 1 + 2 = 3 + 3 = 6
// output = 6

const soma1 = (a, b) => a + b;

const allSum = (...args) => [...args].reduce(soma1, 0);

console.log(allSum(0, 1, 2, 3, 4, 5, 6));

console.log(allSum(0, 1, 2));
