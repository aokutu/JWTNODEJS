const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Client MEssage :",(message)=>{
    const  msg = message;
    console.log(`${msg}`)
    rl.close();
})
 