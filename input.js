let connection;

//`key` is the user input
const handleUserInput = function(key) {
  //escape key - control c
  if (key === '\u0003') {
    process.exit();
  }

  //navigation
  // w - up
  // a - left
  // s - down
  // d - right
  if (key === 'w') {
    connection.write("Move: up");
  }

  if (key === 'a') {
    connection.write("Move: left");
  }

  if (key === 's') {
    connection.write("Move: down");
  }

  if (key === 'd') {
    connection.write("Move: right");
  }

  //canned messages
  //l - "Let's go!"
  //b - "Booyah!"
  if (key === 'l') {
    connection.write("Say: Let's go!");
  }

  if (key === 'b') {
    connection.write("Say: Booyah!");
  }
};

//input event handler that sends keys pressed by user to the Socket object `conn`
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