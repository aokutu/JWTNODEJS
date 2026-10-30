const WebSocket = require('ws');
const socket = new WebSocket('ws://localhost:3000');

// Import from terminal.js
const { PromptMessage } = require('./terminal'); 

socket.on('open', () => {
    console.log('Connected to the WebSocket server');
    
    PromptMessage((msg) => {
        if (socket.readyState === WebSocket.OPEN) {
            socket.send(msg); 
        }
    });
});

socket.on('message', (message) => {
    console.log('Server says:', message.toString());
});

socket.on('error', (error) => {
    console.log('Error:', error.message);
});
