#!/usr/bin/node

const arg1 = process.argv[2];
const num = parseInt(arg1);

if (isNaN(num)) {
  console.log('Missing number of occurrences');
} else {
  for (let i = 0; i < num; i++) {
    console.log('C is fun');
  }
}
