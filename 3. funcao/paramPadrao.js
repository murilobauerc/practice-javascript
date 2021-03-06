// estrategia 1 para gerar valor padrão

function soma1(a, b, c) {
  a = a || 1;
  b = b || 1;
  c = c || 1;
  return a + b + c;
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0));

// estrategia 2,3 e 4 para gerar valor padrão

function soma2(a, b, c) {
  //   a = a !== undefined ? a : 1;
  //   b = 1 in arguments ? b : 1;
  [a, b, c] = isNaN(a, b, c) ? [1, 1, 1] : [a, b, c]; // mais segura
  return a + b + c;
}

function soma3(a = 1, b = 1, c = 1) {
  // ES5
  return a + b + c;
}

console.log(soma2(3, 3, 3));

console.log(soma3(3));
