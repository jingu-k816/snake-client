const net = require('net');

const connect = () => {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  });
  
  conn.setEncoding('utf-8');
  conn.on('connect', () => {
    console.log(`Successfully connect to the game server!`);
    conn.write(`Name: JK`);
  });


  conn.on("data", (data) => {
    console.log(data);
  })

  return conn;
}

module.exports = {
  connect
};