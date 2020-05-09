const totalDeDiasEmMes = mesDeNasc => mesDeNasc * 30;
const totalDeDiasEmAnos = anoDeNasc =>
  (new Date().getFullYear() - anoDeNasc) * 365;

const totalEmDias = (dia, mes, ano) =>
  dia + totalDeDiasEmMes(mes) + totalDeDiasEmAnos(ano);

console.log("30/01/1998", totalEmDias(30, 01, 1998));
console.log("1998 ", totalDeDiasEmAnos(1998));
console.log("27/07/1967: ", totalEmDias(27, 07, 1967));
