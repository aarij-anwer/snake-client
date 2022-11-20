let connection;

const handleUserInput = function(key) {
  // your code here
  if (key === '\u0003') {
    // console.log("Control c pressed by user!");
    process.exit();
  }

  if (key === 'w') {
    // console.log("Move: up");
    connection.write("Move: up");
  }

  if (key === 'a') {
    // console.log("Move: left");
    connection.write("Move: left");
  }

  if (key === 's') {
    // console.log("Move: down");
    connection.write("Move: down");
  }

  if (key === 'd') {
    // console.log("Move: right");
    connection.write("Move: right");
  }

};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf-8');
  stdin.resume();
  stdin.on("data", (key) => {
    handleUserInput(key);
  });
  return stdin;
};

module.exports = setupInput;