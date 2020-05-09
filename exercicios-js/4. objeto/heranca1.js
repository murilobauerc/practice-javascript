/* Herança em JS:
Principio da OO com objetivo de receber
atributos e comportamentos do seu 'pai'
para evitar duplicação de código
(Só pode existir um único PAI em JS)
*/

const ferrari = {
  modelo: "F40",
  velMax: 324
};

const volvo = {
  modelo: "V40",
  velMax: 200
};

console.log(ferrari.__proto__);
console.log(ferrari.__proto__ === Object.prototype);
console.log(ferrari.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null); // true

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto); // Object é uma função
console.log(Object.prototype, MeuObjeto.prototype);
