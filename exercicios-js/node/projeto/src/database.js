const sequence = {
  id: 1,
  get id() {
    return this.id++;
  }
};

const produtos = {};

const salvarProduto = produto => {
  if (!produto.id) produto.id = sequence.id;
  produtos[produto.id] = produto;
  return produto;
};

const updateProduto = produto => {
  if (!produto.id) produto.id = sequence.id;
};

const getProduto = id => {
  return produtos[id] || {};
};

const getProdutos = () => {
  return Object.values(produtos);
};

module.exports = {
  salvarProduto,
  getProduto,
  getProdutos
};
