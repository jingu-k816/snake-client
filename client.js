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

  conn.on('connect', () => {
    
    // setInterval(()=> conn.write('Move: up'), 50)
    // setInterval(()=> conn.write('Move: up'), 100)
    // setInterval(()=> conn.write('Move: up'), 150)
    // setInterval(()=> conn.write('Move: up'), 200)

  });


  conn.on("data", (data) => {
    console.log(data);
  })

  return conn;
}

module.exports = {
  connect
};