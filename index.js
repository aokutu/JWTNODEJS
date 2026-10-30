const express = require('express');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const http = require('http');
const WebSocket = require('ws');
const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
/////// establish connection to  ws server 
wss.on('connection', (socket) => {
    console.log('A client has connected');
    socket.send('Hello client! Welcome to our WebSocket server.');

    socket.on('message',(message)=>{
         const cleanMessage = message.toString();
        console.log("Client ", cleanMessage);
    })
});
 
/////////////
dotenv.config();

app.use(express.json());
app.use(express.static('public'));
const SECRET_KEY = process.env.JWT_SECRET;

const PORT = process.env.PORT || 3000;


server.listen(PORT, () => {
    console.log(`Server is up and running on ${PORT} ...`);
});


const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: "Access denied. No token provided." });
    }

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: "Invalid or expired token." });
        }

        req.user = decoded;
         console.log("verifyToken  middleware");
         next();

    });

   
}; 

app.post('/login',(req, res) => {
    const usernameTyped = req.body.username;
    if (!usernameTyped) {
        return res.status(400).json({ message: "Username is required." });
    }

    const user = {id: Math.floor(Math.random() * 1000),username: usernameTyped, role: "admin" };

    const token = jwt.sign( { userId: user.id, role: user.role }, SECRET_KEY, { expiresIn: '1h' });

    res.json({
        message: "Login successful!",
        token: token
    });
});

app.get('/dashboard', verifyToken, (req, res) => {
    res.json({
        message: "Welcome to the secure dashboard!",
        user: req.user // This comes directly from the verified token payload!
    });
});
