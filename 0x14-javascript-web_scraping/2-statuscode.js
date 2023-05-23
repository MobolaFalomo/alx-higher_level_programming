#!/usr/bin/node
// A script that display the status code of a GET request

const request = require('request');

const url = process.argv[2];

request.get(url, (error, response) => {
  if (response) {
    console.log(`code: ${response.statusCode}`);
  } else {
    console.log(error);
  }
});
