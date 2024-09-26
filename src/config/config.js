const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env

// Get the MongoDB URI from the environment variable
const db = process.env.Monogo_DB_URL;

// Function to connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(db);
        console.log('MongoDB connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);  // Exit process with failure
    }
};

module.exports = connectDB;
