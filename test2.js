const counter2 = require('./test1');
import * as counter from './test3';

console.log(counter.counter); // 1
counter.increment();
console.log(counter2.counter); // 2