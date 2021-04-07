const setupInput = (data) => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf-8');
  stdin.resume();
  
  const handleUserInput = (key) => {
    stdin.on('data', (key) => {
      if(key === '\u0003'){
        process.exit();
      }
    })
  }

  handleUserInput();
  
  return stdin;
}

module.exports = {
  setupInput
}