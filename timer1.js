let args = process.argv.slice(2);

for (const timer of args) {
  let seconds = timer * 1000;
  setTimeout(() => {
    //console.log(timer, seconds);
    process.stdout.write('\x07');
  }, seconds)
};
