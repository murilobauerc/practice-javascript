// Arrow function
const soma1 = (a, b) => {
  a + b; // undefined, pois usando "{}" necessita explicitar o "return"
};

const soma = (a, b) => a + b;
console.log(soma(2, 3));

// Arrow Function (this)
const lexico1 = () => console.log(this === exports);
const lexico2 = lexico1.bind({});

lexico1();
lexico2();

// parametro default
function log(texto = "Node") {
  console.log(texto);
}

log(null); // null sobrepõe qualquer valor
log("Sou mais forte"); // sobrepõe o valor default "Node"

// operador REST (agrupar)
function total(...numeros) {
  let total = 0;
  numeros.forEach(n => (total += n));
  return total;
}

console.log(total(2, 3, 4, 5));
