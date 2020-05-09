const filhas = ['Daleskah', 'Cibalena']
const filhos = ['Uoxiton', 'Uesclei']

const todos = filhas.concat(filhos, 'Fulano') // concat não é tão usado
console.log(`Using concat: ${todos}`);

console.log([].concat([1,2], [3,4], 5, [[6,7]]));




// em vez disso, usar SPREAD operator
const todos1 = [...filhas, ...filhos]
console.log(`Using spread operator: ${todos1}`);


