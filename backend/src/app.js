const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http');
const socketIo = require('socket.io');
const Book = require('./models/bookModel');

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// Import routes
const bookRoutes = require('./routes/bookRoutes');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const recommendationRoutes = require('./routes/recommendationRoutes');
const { router: chatbotRoutes } = require('./routes/chatBotRoutes');

// Middleware
app.use('/api/books', bookRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api', recommendationRoutes);
app.use('/api', chatbotRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected...');
    const topology = mongoose.connection.db.topology;
    if (topology && topology.isReplicaSet) {
      Book.watch().on('change', (change) => {
        io.emit('books', change);
      });
    } else {
      console.error('Change streams are only supported on replica sets.');
    }
  })
  .catch(err => console.log(err));

module.exports = app;
