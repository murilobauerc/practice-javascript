const axios = require("axios");

const URL_TURMA_A = "http://files.cod3r.com.br/curso-js/turmaA.json";
const URL_TURMA_B = "http://files.cod3r.com.br/curso-js/turmaB.json";

// https://jsonplaceholder.typicode.com/posts

const fetchApi = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then(response => console.log(response.data));
};

fetchApi();

console.log("Tchau"); // 3

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
