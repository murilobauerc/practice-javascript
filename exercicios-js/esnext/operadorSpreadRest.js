// operador ... rest(juntar)/spread(espalhar)
// usar rest com parâmetro de função

// usar spread com objeto
const funcionario = { nome: "Maria", salario: 12348.99 };
const clone = { ativo: true, ...funcionario }; // spread dentro do objeto 'clone'
console.log(clone);

// usar spread com array
const grupoA = ["João", "Pedro", "Gloria"];
const grupoFinal = ["Maria", ...grupoA, "Rafaela"];
console.log(grupoFinal);

const sum = (...args) => [...args].reduce((a, b) => a + b, 0);

console.log(sum(0, 2, 3, 4));
