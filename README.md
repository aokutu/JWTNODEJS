# Secure JWT Authentication System

A lightweight full-stack authentication pipeline built with Node.js, Express, JSON Web Tokens (JWT), jQuery, and HTML5 Web Storage.

## Architecture
- **Backend (`index.js`):** Express API serving static public assets, handling secure token generation (`/login`), and enforcing route protection via `verifyToken` middleware (`/dashboard`).
- **Frontend (`public/`):** Vanilla HTML and jQuery client script utilizing `localStorage` to persist session tokens and attach `Authorization: Bearer <token>` headers dynamically.
