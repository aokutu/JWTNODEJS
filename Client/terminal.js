const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function PromptMessage(onMessageReceived) {
  rl.question('Enter ur Message: ', (answer) => {
    
    if (onMessageReceived) {
      onMessageReceived(answer);
    }
    
    PromptMessage(onMessageReceived);
  });
}

module.exports = { PromptMessage };
