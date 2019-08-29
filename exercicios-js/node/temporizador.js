const schedule = require("node-schedule");

const tarefa1 = schedule.scheduleJob("*/5 * 12 * * 2", function() {
  console.log("Executando Tarefa 1!", new Date().getSeconds());
});

setTimeout(function() {
  // setTimeout é um temporizador nativo do javascript
  tarefa1.cancel();
}, 20000);

// setImmediate
// setInterval

const regra = new schedule.RecurrenceRule();
regra.dayOfWeek = [new schedule.Range(1, 5)];
regra.hour = 12;
regra.second = 30;

const tarefa2 = schedule.scheduleJob(regra, function() {
  console.log("Executando a Tarefa 2!", new Date().getSeconds());
});
