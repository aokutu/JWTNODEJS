const WebSocket = require('ws');
const socket = new WebSocket('ws://localhost:3000');

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
PromptMessage();


function PromptMessage(){
    rl.question('What is your favorite food? ', (answer) => {
  console.log(`Oh, so your favorite food is ${answer}`);
});
}

socket.on('open', () => {
    console.log('Connected to the WebSocket server');
});

socket.on('message', (message) => {
    console.log('Server says:', message.toString());
});

socket.on('error', (error) => {
    console.log('Error:', error.message);
});