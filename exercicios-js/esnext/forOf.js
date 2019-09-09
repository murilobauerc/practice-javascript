// for...of você itera sobre os VALORES
// for...in você itera nos INDICES

for (let letra of "Cod3r") {
  console.log(letra);
}

const assuntosEcma = ["Map", "Set", "Promise"];

for (let i in assuntosEcma) {
  // iterando nas posições do array ["Map", "Set", "Promise"]
  console.log(i);
}

for (let assunto of assuntosEcma) {
  // iterando nos valores do array assuntosEcma
  console.log(assunto);
}

const assuntosMap = new Map([
  ["Map", { abordado: true }],
  ["Set", { abordado: true }],
  ["Promise", { abordado: false }]
]);

for (let assunto of assuntosMap) {
  console.log(assunto);
}

for (let chave of assuntosMap.keys()) {
  console.log(chave);
}

for (let valor of assuntosMap.values()) {
  console.log(valor);
}

for (let [ch, vl] of assuntosMap.entries()) {
  console.log(ch, vl);
}

const s = new Set(["a", "b", "c"]);
for (let letra of s) {
  console.log(letra);
}

s.forEach(valor => console.log(valor));
