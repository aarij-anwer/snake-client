const net = require("net");

const conn = net.createConnection({
  host: "192.168.86.109",
  port: 50541
});

conn.setEncoding("utf8");