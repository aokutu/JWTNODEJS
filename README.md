# Secure JWT Authentication System

A lightweight, full-stack authentication system built with **Node.js**, **Express**, **JSON Web Tokens (JWT)**, **jQuery**, and **HTML5 Web Storage**. This project demonstrates an end-to-end token-based authentication workflow from a secure backend API to a dynamic browser-based frontend.

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js, `jsonwebtoken`, `dotenv`
- **Frontend:** HTML5, jQuery (v3.7.1), CSS
- **Storage:** Browser `localStorage` for client-side JWT persistence
- **Security:** Bearer token authorization headers & middleware verification

---

## 📂 Project Directory Structure

```text
JWTNODEJS/
├── node_modules/
├── public/
│   ├── login.html        # jQuery login interface & localStorage token setter
│   └── dashboard.html    # Secure dashboard with API authorization injection
├── .env                  # Environment configuration (PORT & JWT Secret)
├── index.js              # Express backend server, routes, and verifyToken middleware
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation# Secure JWT Authentication System

A lightweight full-stack authentication pipeline built with Node.js, Express, JSON Web Tokens (JWT), jQuery, and HTML5 Web Storage.

## Architecture
- **Backend (`index.js`):** Express API serving static public assets, handling secure token generation (`/login`), and enforcing route protection via `verifyToken` middleware (`/dashboard`).
- **Frontend (`public/`):** Vanilla HTML and jQuery client script utilizing `localStorage` to persist session tokens and attach `Authorization: Bearer <token>` headers dynamically.
