const sequencia = {
  _valor: 1, // underline é convenção
  // (pretendida pra acessar internamente)
  get valor() {
    return this._valor++;
  },
  set valor(valor) {
    if (valor > this._valor) this._valor = valor;
  }
};

console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 1000;

console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 900;
console.log(sequencia.valor, sequencia.valor);
