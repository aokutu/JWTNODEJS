const WebSocket = require('ws');
const socket = new WebSocket('ws://localhost:3000');

socket.on('open', () => {
    console.log('Connected to the WebSocket server');
});

socket.on('message', (message) => {
    console.log('Server says:', message.toString());
});

socket.on('error', (error) => {
    console.log('Error:', error.message);
});