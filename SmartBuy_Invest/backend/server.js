require('dotenv').config();
const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');
const connectDB = require('./config/database');
const authRoutes = require('./routes/auth');
const listingsRoutes = require('./routes/listings');
const comparisonsRoutes = require('./routes/comparisons');
const favoritesRoutes = require('./routes/favorites');
const usersRoutes = require('./routes/users');
const agentsRoutes = require('./routes/agents');
const notificationsRoutes = require('./routes/notifications');
const { startAgentRunner } = require('./agents/agentRunner');
const rateLimit = require('express-rate-limit');

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: process.env.CLIENT_URL || 'http://localhost:3000', methods: ['GET', 'POST'] }
});

// Make io available globally for real-time notifications
global.io = io;

connectDB();

const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 200 });

app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:3000', credentials: true }));
app.use(express.json({ limit: '10mb' }));
app.use('/api', limiter);

app.use('/api/auth', authRoutes);
app.use('/api/listings', listingsRoutes);
app.use('/api/comparisons', comparisonsRoutes);
app.use('/api/favorites', favoritesRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/agents', agentsRoutes);
app.use('/api/notifications', notificationsRoutes);

app.get('/api/health', (req, res) => res.json({ status: 'ok', timestamp: new Date() }));

io.on('connection', (socket) => {
  socket.on('join', (userId) => socket.join(`user_${userId}`));
  socket.on('disconnect', () => {});
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`SmartBuy server running on port ${PORT}`);
  if (process.env.RUN_AGENTS !== 'false') {
    startAgentRunner();
  }
});
