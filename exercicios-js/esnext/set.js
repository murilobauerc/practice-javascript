// não aceita repetição/não indexada

// objeto que possui uma coleção de valores que não aceita repetição
const times = new Set();
times.add("Vasco");
times
  .add("São Paulo")
  .add("Palmeiras")
  .add("Corinthians");
times.add("Flamengo");
times.add("Vasco");

console.log(times);
console.log(times.size);
console.log(times.has("vasco"));
console.log(times.has("Vasco"));

const nomes = ["Raquel", "Lucas", "Julia", "Lucas"];
const nomesSet = new Set(nomes);
console.log(nomesSet);

const times2 = new Set(["João", "Murilo", "João"]);
console.log(times2);
