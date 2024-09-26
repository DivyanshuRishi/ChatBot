const express = require('express');
const Query = require('../models/query.model.js');
const auth = require('../middleware/auth.js');
const router = express.Router();

// User submits a query
router.post('/add', auth, async (req, res) => {
    const { title, description } = req.body;

    try {
        const newQuery = new Query({
            user: req.user.id,
            title,
            description
        });

        const query = await newQuery.save();
        res.json(query);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// Admin retrieves all queries
router.get('/all', auth, async (req, res) => {
    try {
        if (req.user.role !== 'admin') {
            return res.status(401).json({ msg: 'Authorization denied' });
        }
        const queries = await Query.find().populate('user', ['name']);
        res.json(queries);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

module.exports = router;
