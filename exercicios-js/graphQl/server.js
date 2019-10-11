/* GraphQL is a query language for your API, and a server-side runtime 
for executing queries by using a type system you define for your data.
*/
// import { graphql, buildSchema } from "graphql"; ES6
var { graphql, buildSchema } = require("graphql");

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
    type Query {
        hello: String
    }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: name => {
    return `Hello World ${name}`;
  }
};

// Run the GraphQL query ' { hello } ' and print out the response
graphql(schema, "{hello}", root).then(response => {
  console.log(response);
});

graphql(schema, "{username}", root).then(response => {
  console.log(response);
});
