const net = require('net');
const { IP, PORT } = require('./constants');

const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  
  conn.setEncoding('utf-8');
  conn.on('connect', () => {
    console.log(`Successfully connect to the game server!`);
    conn.write(`Name: JK`);
    conn.write(`Say: Hi I am Jingu`);
    
  });

  conn.on("data", (data) => {
    console.log(data);
  })

  return conn;
}

module.exports = {
  connect
};