// objeto que possui uma coleção de valores que possui chave e valor

const tecnologias = new Map();
tecnologias.set("react", { framework: false });
tecnologias.set("angular", { framework: true });
tecnologias.set("Internacional", { teste: true });
console.log(tecnologias.get("Internacional").anoTitulo);

console.log(tecnologias.get("react"));
console.log(tecnologias.get("react").framework);

const chavesVariadas = new Map([
  [function() {}, "Função"],
  [{}, "Objeto"],
  [123, "Número"]
]);

chavesVariadas.forEach((vl, ch) => {
  console.log(ch, vl);
});

console.log(chavesVariadas.has(123));
chavesVariadas.delete(123);

console.log(chavesVariadas.has(123));
console.log(chavesVariadas.size);

chavesVariadas.set(123, "a");
chavesVariadas.set(456, "b");
chavesVariadas.set(123, "b");
console.log(chavesVariadas);
