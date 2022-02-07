// const message = require('./myscript');

// console.log(message);

const counterObject = require('./myscript.js');

console.log(counterObject.getCounter());//0
counterObject.incrementCounter();
console.log(counterObject.getCounter()); //1

// will be the same counter instance
const newCounter = require('./myscript.js');
console.log(newCounter.getCounter()); //1
