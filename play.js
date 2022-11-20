const connect = require('./client');

console.log("Connecting ...");

const conn = connect();

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf-8');
  stdin.resume();
  return stdin;
};

