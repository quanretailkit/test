import * as counter from './test1';
const counter2 = require('./test3');

console.log(counter.counter); // 1
counter.increment();
console.log(counter2.counter); // 2
