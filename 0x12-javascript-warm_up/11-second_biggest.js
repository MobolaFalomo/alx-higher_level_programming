#!/usr/bin/node
//  we used progress.argv.slice(2) to get all the arguments starting from index2 and used map(Number) to convert each argument to a number
const args = process.argv.slice(2).map(Number);

//  if there are no arguments, we print 0
if (args.length === 0) {
  console.log(0);
//  if there is only one argument, we print 1
} else if (args.length === 1) {
  console.log(0);
//  otherwise we sort the array of arguments in descending order using args.sort and print the 2nd element of the sorted array args[1] which is the second biggest integer in the list of arguments
} else {
  args.sort((a, b) => b - a);
  console.log(args[1]);
}
