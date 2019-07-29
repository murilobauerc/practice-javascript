console.log(module.exports === this);
console.log(module.exports === exports);

this.a = 1; // ficara fora do modulo
exports.b = 2; // ficara fora do modulo
module.exports.c = 3;

exports = null; // nao funciona do mesmo jeito
console.log(module.exports);

module.exports = { publico: true };
