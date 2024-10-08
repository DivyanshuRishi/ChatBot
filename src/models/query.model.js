const mongoose = require('mongoose');

const QuerySchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    title: { type: String, required: true },
    description: { type: String, required: true }
}, { timestamps: true });

const Query = mongoose.model('Query', QuerySchema);
module.exports = Query;
