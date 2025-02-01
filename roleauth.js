const roleAuth = (requiredRole) => {
    return async (req, res, next) => {
        try {
            // Check if the user is attached to the request (from jwtAuthMiddleware)
            const user = req.user;

            if (!user) {
                return res.status(401).json({ error: 'User not authenticated' });
            }

            // Check if the user's role matches the required role
            if (user.role !== requiredRole) {
                return res.status(403).json({ error: 'Forbidden: You do not have the necessary permissions' });
            }

            // If role matches, proceed to the next middleware or route
            next();
        } catch (err) {
            console.error('Error in roleAuth middleware:', err);
            res.status(500).json({ error: 'Internal server error' });
        }
    };
};

module.exports = roleAuth;
