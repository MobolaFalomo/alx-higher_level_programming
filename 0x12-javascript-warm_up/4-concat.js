#!/usr/bin/node
//A script that prints two arguments passed to it, in the following format:'s'

const arg1 = process.argv[2];
const arg2 = process.argv[3];
//Use template literals to print the arguments
console.log(`${arg1} is ${arg2}`);
