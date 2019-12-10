var express = require("express");
var graphqlHTTP = require("express-graphql");
var { buildSchema } = require("graphql");
var uniqid = require("uniqid");

var userList = [];

// type "Query" é responsável pela entrada das queries.
// SDL - Schema Definition Language - Core of any GraphQL project.
var schema = buildSchema(`
type User {
    id: String
    name: String
    gender: String
    age: Int
}

type Query { 
    users(gender : String): [User]
    user(id: String): User
}

type Mutation{
    addUser(name: String, gender: String, age: Int): User
}

`);

const getUser = args => {
  console.log(args);
  return userList.find(user => args.id === user.id);
};

const addUsers = args => {
  userList = [
    ...userList,
    { id: uniqid(), name: args.name, age: args.age, gender: args.gender }
  ];
  return userList[userList.length - 1];
};

const getUsers = args => {
  if (args.gender) {
    var gender = args.gender;
    return userList.filter(user => user.gender === gender);
  }
  return userList;
};

const editUser = args => {};

var root = {
  user: getUser,
  users: getUsers,
  add: addUsers,
  edit: editUser
};

var app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);

app.listen(4000);

console.log("Running a GraphQL API server at localhost:4000/graphql");
