// Armazenando uma funcao em uma variavel

const imprimirSoma = function(a, b) {
  console.log(a + b);
};

imprimirSoma(2, 3);

// Armazenando uma funcao arrow em uma variavel
// Surgiu no ES5
const soma = (a, b) => {
  return a + b;
};
console.log(soma(2, 5));

// retorno implícito
const subtracao = (a, b) => a - b;
console.log(subtracao(2, 1));

const imprimir2 = a => console.log(a);
imprimir2("Legal!!!!");
