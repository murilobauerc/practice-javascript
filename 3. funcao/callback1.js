const fabricantes = ["Mercedes", "Audi", "BMW"];

// voce passa uma funcao para outra funcao
// e quando determinando evento ocorrer, essa funcao voltará a ser chamada
function imprimir(nome, indice) {
  console.log(`${indice + 1}, ${nome}`);
}

fabricantes.forEach(imprimir);

fabricantes.forEach(fabricante => console.log(fabricante));
