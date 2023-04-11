#!/usr/bin/node

//A script that prints the addition of 2 integers

function add(a, b) {
  return a + b;
}

const arg1 = parseInt(process.argv[2]);
const arg2 = parseInt(process.argv[3]);

if (isNaN(arg1) || isNaN(arg2)) {
  console.log('NaN');
  process.exit(1);
}

const result = add(arg1, arg2);
console.log(result);
