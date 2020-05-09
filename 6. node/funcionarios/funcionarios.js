const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";
const axios = require("axios"); // client http

const employeeCountry = emp => emp.pais === "China";
const employeeIsWoman = emp => emp.genero === "F";
const employeeLowerSalary = (anterior, proximo) => {
  return anterior.salario < proximo.salario ? anterior : proximo;
};

axios.get(url).then(res => {
  const employees = res.data;

  const func = employees
    .filter(employeeCountry)
    .filter(employeeIsWoman)
    .reduce(employeeLowerSalary);

  console.log(func);
});
