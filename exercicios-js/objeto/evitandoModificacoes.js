// Object.preventExtensions

const produto = Object.preventExtensions({
  // preventExtensions consegue deletar
  nome: "Qualquer",
  preco: 1.99,
  tag: "promoção"
});

console.log("Extensível:", Object.isExtensible(produto));

produto.nome = "Borracha";
produto.descricao = "Borracha escolar branca";

delete produto.tag;
console.log(produto);

// Object.seal
const pessoa = { nome: "Juliana", idade: 35 };
Object.seal(pessoa); // NÃO pode excluir nem adicionar
// pode modificar valores
console.log("Selado:", Object.isSealed(pessoa));

pessoa.sobrenome = "Silva";
delete pessoa.nome;
pessoa.idade = 29;
console.log(pessoa);

// Object.seal - Não consegue excluir nem adicionar, somente atualizar
// Object.preventExtensions - Consegue excluir, mas não consegue adicinoar nem atualizar
// Object.freeze - seal + valores constantes
