const args = process.argv.slice(2);
const timer = (times) => {
  for (const timer of times) {  
    setTimeout(() => {
      // console.log(timer, seconds);
      process.stdout.write('\x07');
    }, timer * 1000)  
  };
}
timer(args);