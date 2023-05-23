#!/usr/bin/node
// A script that writes a string to a file
const fs = require('fs');

const file = process.argv[2];

fs.writeFile(file, process.argv[3], { flag: 'w' }, (err) => {
  if (err) {
    console.log(err);
  }
});
