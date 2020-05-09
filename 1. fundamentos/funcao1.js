// Funcao sem retorno
function imprimirSoma(a, b) {
  console.log(a + b);
}

imprimirSoma(2, 3);
imprimirSoma(2, 10, 4, 5, 6, 7, 8);
imprimirSoma(2); // 2 + b = NaN
imprimirSoma(); // a + b = NaN

// Funcao com retorno
function soma(a, b = 0) {
  return a + b;
}

console.log(soma(2, 3));
console.log(soma(2)); // return 2 + 0  = 2
console.log(soma()); // NaN
