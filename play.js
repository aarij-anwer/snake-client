const connect = require('./client');

console.log("Connecting ...");

const conn = connect();

const handleUserInput = function(key) {
  // your code here
  if (key === '\u0003') {
    // console.log("Control c pressed by user!");
    process.exit();
  }
};

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf-8');
  stdin.resume();
  stdin.on("data", (key) => {
    handleUserInput(key);
  });
  return stdin;
};

setupInput();