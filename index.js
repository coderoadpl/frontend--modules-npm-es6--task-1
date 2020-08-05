import add, { add as addNamed, subtract } from './math.js'

console.log(addNamed === add)
console.log(add(1, 2))
console.log(subtract(1, 2))