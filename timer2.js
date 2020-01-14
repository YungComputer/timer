//pair programming with Eina & Claire
const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', key => {
  // process.stdout.write(key);  
  if(key >= 1 && key <= 9) {
    process.stdout.write(`Setting timer for ${key} seconds...\n`);
    setTimeout(() => {
      process.stdout.write('\x07');
    }, key * 1000) 
  }
  // when you press b
  if(key === '\u0062') {    
    process.stdout.write('\x07');
  }
  // when you press ctrl + c
  if(key === '\u0003') {
    process.stdout.write(`Thanks for using me, ciao!\n`);
    process.exit();
  }
})