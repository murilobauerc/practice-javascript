const http = require("http");

const getTurma = letra => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
  return new Promise((resolve, reject) => {
    http.get(url, res => {
      let resultado = "";
      res.on("data", dados => {
        resultado += dados; // stream de dados
      });
      res.on("end", () => {
        try {
          JSON.parse(resultado); // no final do recebimento de dados, faz o parser para JSON desse resultado
        } catch (e) {
          reject(e);
        }
      });
    });
  });
};

// Recurso do ES8
// Objetivo de simplificar o uso de promises...
let obterAlunos = async () => {
  const ta = await getTurma("A");
  const tb = await getTurma("B");
  const tc = await getTurma("C");
  return [].concat(ta, tb, tc);
}; // retorna um objeto AsyncFunction

obterAlunos()
  .then(alunos => alunos.map(a => a.nome))
  .then(nomes => console.log(nomes));
