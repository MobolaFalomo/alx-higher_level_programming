#!/usr/bin/node
const myObject = {
  type: 'object',
  value: 12
};
console.log(myObject);
//  the 'value' property of 'myObject' was updated to 89
myObject.value = 89;

console.log(myObject);
