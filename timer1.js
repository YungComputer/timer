//pair programming with Eina

const args = process.argv.slice(2);
const timer = (times) => {
  for (const timer of times) {  
    if (timer > 0 && typeof timer !== "number"){
    setTimeout(() => {
      process.stdout.write('\x07');
    }, timer * 1000)  
  };
};
};
timer(args);