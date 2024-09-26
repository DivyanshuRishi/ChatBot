// server.js
const express = require('express');
const cors = require('cors'); // Import CORS
const connectDB = require('./config/config.js'); // Ensure this file exists
require('dotenv').config(); // Load environment variables from .env

const app = express();

// Connect to the database
connectDB();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Enable CORS for your frontend origin
app.use(cors({
  origin: 'http://localhost:5173', // Replace with your frontend's URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify the allowed methods
  credentials: true // If you need to support credentials like cookies
}));

// Sample route
app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api/auth', require('./routes/auth.js')); // Authentication routes
app.use('/api/queries', require('./routes/query.js')); // Ensure this route exists

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Define the port
const PORT = process.env.PORT || 7001;

// Start the server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
