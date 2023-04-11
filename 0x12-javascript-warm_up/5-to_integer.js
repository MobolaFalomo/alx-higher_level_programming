#!/usr/bin/node
//A script tha prints 'My number: <first argument converted in integer>'
//process.argv is used to get the first argument passed to script at index2
//parseInt() function is used to attempt to convert the argument to an integer
//the parseInt() function returns 'NaN' (Not a Number) if the argument cannot be converted to a number
const arg1 = process.argv[2];
const num = parseInt(arg1);

//the 'if' statement is used to check if 'num' is not 'NaN'.If 'num' is a number, the template literals is used to print the message
if (!isNaN(num)) {
  console.log(`My number: ${num}`);
//if 'num' cannot be converted to an integer,print 'Not a number'
} else {
  console.log('Not a number');
}
