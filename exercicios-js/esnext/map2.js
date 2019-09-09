const times = new Map();

times.set("Internacional", {
  titulos: [
    {
      id: 1,
      nome: "Libertadores da América",
      ano: [2006, 2010]
    },
    {
      id: 2,
      nome: "Copa do Mundo FIFA",
      ano: [2006]
    },
    {
      id: 3,
      nome: "Copa do Brasil",
      ano: [1992]
    },
    {
      id: 4,
      nome: "Campeonato Gaúcho",
      ano: []
    }
  ]
});

// console.log(times.get("Internacional").titulos);
// times.forEach(time => console.log(time.titulos));

for (let time of times.values()) {
  console.log(time.titulos[0].nome);
}
