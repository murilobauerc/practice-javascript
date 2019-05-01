const pessoa = {
  nome: "Rebeca",
  idade: 2,
  peso: 13
};

console.log(Object.keys(pessoa)); // exibe apenas chave
console.log(Object.values(pessoa)); // exibe apenas valor
console.log(Object.entries(pessoa)); // todas as entradas do objeto
console.log(pessoa);

Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`);
});

Object.defineProperty(pessoa, "dataNascimento", {
  enumerable: true,
  writable: false,
  value: "01/01/2019"
});

pessoa.dataNascimento = "01/01/2017";
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));

// Object.assign (ECMAScript 2015)
// assign serve para concatenar varios objetos em UM

const dest = { a: 1 };
const o1 = { b: 2 };
const o2 = { c: 3, a: 4 };
const obj = Object.assign(dest, o1, o2);
// dest = { b:2, c: 3, a : 4}
Object.freeze(obj);
obj.c = 1234;
console.log(obj);
