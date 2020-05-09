console.log(typeof Array, typeof new Array(), typeof []);

let aprovados = new Array("Bia", "Carlos", "Ana");
console.log(aprovados);

aprovados = ["Bia", "Carlos", "Ana"];
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]); // NÃO DÁ ERRO! undefined

aprovados[3] = "Pedro";
console.log(aprovados[3]);

aprovados.push("Murilo");
console.log(aprovados.length);
console.log(aprovados);

aprovados[9] = "Rafael";
console.log(aprovados.length);

console.log(aprovados);

console.log(aprovados[8] === null);

console.log(aprovados);
console.log(aprovados.sort());

delete aprovados[1];
console.log(aprovados[1]);

console.log(aprovados[2]);

aprovados.splice(1, 2, "Elemento1", "Elemento2");
console.log(aprovados);
