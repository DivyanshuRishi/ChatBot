const jwt = require('jsonwebtoken');

// Middleware function to verify token
module.exports = function (req, res, next) {
    // Get token from header
    const token = req.header('Authorization');

    // Check if token is not provided
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Add user from payload
        req.user = decoded.user;
        next(); // Proceed to the next middleware/route handler
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
};
