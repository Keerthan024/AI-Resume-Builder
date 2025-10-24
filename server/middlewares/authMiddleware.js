import jwt from 'jsonwebtoken';

/**
 * Middleware to protect routes and ensure the user is authenticated.
 */
const protect = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    // Extract token (assuming format: "Bearer <token>")
    const token = authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : authHeader;

    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Attach userId to request object for downstream controllers
        req.userId = decoded.userId;

        next(); // Proceed to the next middleware/controller
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
};

export default protect;
