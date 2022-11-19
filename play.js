const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: "192.168.86.109",
    port: 50541
  });
  
  conn.setEncoding("utf8");

  conn.on("connect", () => console.log("Connected!"));

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });
  
  return conn;
};

console.log("Connecting ...");

connect();
