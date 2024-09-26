const mongoose = require('mongoose');

const ChatHistorySchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    message: { type: String, required: true },
    response: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }
});

const ChatHistory = mongoose.model('ChatHistory', ChatHistorySchema);
module.exports = ChatHistory;
