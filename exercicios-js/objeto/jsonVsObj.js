// JSON é um formato textual
// JSON é um formato de dados

const obj = {
  a: 1,
  b: 2,
  c: 3,
  soma() {
    return a + b + c;
  }
};
// objeto pra json
console.log(JSON.stringify(obj)); // {"a":1,"b":2,"c":3}
console.log(obj); // { a: 1, b: 2, c: 3, soma: [Function: soma] }

// console.log(JSON.parse("{a : 1, b:2, c: 3}"));
// console.log(JSON.parse("{'a':1, 'b':2, 'c':3"));
console.log(JSON.parse('{"a":1, "b":2, "c": 3}'));

// JSON.stringify - objeto para json
// JSON.parse - json para objeto
