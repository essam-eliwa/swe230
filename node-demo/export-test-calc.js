// Importing the custom node module with the below statement
// var calculator = require('./export-calc.js');

import * as calculator from './export-calc.js';

let a = 10 , b = 7;

console.log("Addition of " + a + " and " + b + " is " + calculator.add(a, b));

console.log("Subtraction of " + a + " and " + b + " is " + calculator.sub(a, b));

console.log("Multiplication of " + a + " and " + b + " is " + calculator.mul(a, b));

console.log("Division of " + a + " and " + b + " is " + calculator.div(a, b));

console.log(calculator.myDateTime()+'\n');