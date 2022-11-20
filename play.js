const connect = require('./client');
const setupInput = require('./input');

console.log("Connecting ...");

//connect to the server
const conn = connect();

//listen to user input, send it to server
const input = setupInput(conn);