const axios = require("axios");
const URL_TURMA_A = "http://files.cod3r.com.br/curso-js/turmaA.json";
const URL_TURMA_B = "http://files.cod3r.com.br/curso-js/turmaB.json";
// https://jsonplaceholder.typicode.com/posts

// const fetchApi = () => {
//   axios
//     .get("https://jsonplaceholder.typicode.com/posts")
//     .then(response => console.log(response.data));
// };

const fetchX = () => {
  axios
    .get(URL_TURMA_A)
    .then(res => console.log(res).catch(err => console.log(err.response)));
};

fetchX();

// const fetchApi4 = async () => {
//   const res = await fetch(URL_TURMA_A);
//   const data = await res.json();
//   return data;
// };

// console.log(fetchApi4());

// fetchApi();

// Promise example
// function getFirstUser() {
//     return getUsers().then(function(users) {
//         return users[0].name;
//     });
// }

// async function getFirstUser() {
//     let users = await getUsers();
//     return users[0].name;
// }
