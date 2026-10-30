# Secure JWT Authentication & WebSocket Messaging System

A lightweight full-stack authentication pipeline and real-time messaging system built with **Node.js**, **Express**, **JSON Web Tokens (JWT)**, **WebSockets (ws)**, **jQuery**, and **HTML5 Web Storage**.

## 🛠 Tech Stack & Overview
- **Backend:** Node.js, Express.js, `jsonwebtoken`, `ws`, `dotenv`
- **Frontend:** HTML5, jQuery (v3.7.1), CSS, `localStorage`
- **Architecture:** Decoupled terminal client and Express/WebSocket server.

## 📂 Project Directory Structure
```text
JWTNODEJS/
├── Client/
│   ├── client.js         # WebSocket network client
│   └── terminal.js       # Isolated terminal interface
├── public/
│   ├── login.html        # jQuery login interface
│   └── dashboard.html    # Secure dashboard
├── .env                  # Environment configuration
├── index.js              # Express backend server
├── package.json          # Project dependencies
└── README.md             # Project documentation
```

## 🏗 System Architecture
1. **Web & Authentication Pipeline:** Express API handling secure login tokens (`/login`) and route protection (`/dashboard`), with frontend jQuery managing session tokens in `localStorage`.
2. **Real-Time Terminal Messaging Pipeline:** Separates input handling (`Client/terminal.js` using `readline` and callbacks) from network communication (`Client/client.js` managing WebSocket connections).

## 🚀 Getting Started & Testing
1. **Clone & Install:**
   ```bash
   git clone https://github.com
   cd JWTNODEJS
   npm install
   ```
2. **Environment Configuration:** Create a `.env` file (`PORT=3000`, `JWT_SECRET=your_super_secret_jwt_key`).
3. **Run the Server:** `node index.js`
4. **Test JWT Authentication:** Open `http://localhost:3000/login.html` and navigate to the dashboard.
5. **Test Real-Time Messaging:** Run `node client.js` in the `Client/` directory.
