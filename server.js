require('dotenv').config();
const express = require('express');
const app = express();
const DbConnect = require('./database');
const router = require('./routes');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const http = require('http'); // 👈 Required to create a raw HTTP server
const { Server } = require('socket.io'); // 👈 Socket.IO server

const server = http.createServer(app); // 👈 Attach express app to http server

const io = new Server(server, {
    cors: {
        origin: ['http://localhost:3000'], // 👈 Allow frontend
        credentials: true,
    },
});

// 👇 Socket.IO setup
io.on('connection', (socket) => {
    console.log('✅ Socket connected:', socket.id);

    socket.on('disconnect', () => {
        console.log('❌ Socket disconnected:', socket.id);
    });

    // Add your custom socket event handlers here
});

app.use(cookieParser());
const corsOption = {
    credentials: true,
    origin: ['http://localhost:3000'],
};
app.use(cors(corsOption));
app.use('/storage', express.static('storage'));

const PORT = process.env.PORT || 5500;
DbConnect();
app.use(express.json({ limit: '8mb' }));
app.use(router);

app.get('/', (req, res) => {
    res.send('Hello from express Js');
});

// 🔥 Start the server using the http server (not just app.listen)
server.listen(PORT, () => console.log(`🚀 Server + WebSocket listening on port ${PORT}`));
