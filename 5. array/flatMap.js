const escola = [
  {
    nome: "Turma M1",
    alunos: [
      {
        nome: "Gustavo",
        nota: 8.1
      },
      {
        nome: "Ana",
        nota: 9.3
      }
    ]
  },
  {
    nome: "Turma M2",
    alunos: [
      {
        nome: "Rebeca",
        nota: 8.9
      },
      {
        nome: "Roberto",
        nota: 7.3
      }
    ]
  }
];

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1); // output


// Flatmap é um concat associado ao map
Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

// Flatmap = Achatar uma matriz e reduzir em somente um array

const notas2 = escola.flatMap(getNotasDaTurma)