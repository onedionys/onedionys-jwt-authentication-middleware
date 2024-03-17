// jwtAuthenticationMiddleware.js

/**
 * Middleware to authenticate JSON Web Tokens (JWT) in HTTP headers.
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 * @param {function} next - The next middleware function in the chain.
 */
function jwtAuthenticationMiddleware(req, res, next) {
    // Retrieve JWT token from HTTP headers
    const token = req.headers.authorization;

    // Check if token exists
    if (!token) {
        return res.status(401).json({ message: "Unauthorized: Token missing" });
    }

    try {
        // Verify and decode JWT token
        const decodedToken = verifyToken(token);

        // Attach decoded token to request object for further use
        req.user = decodedToken;

        // Move to the next middleware
        next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
}

/**
 * Dummy function to verify JWT token (Replace with actual implementation).
 * @param {string} token - The JWT token to verify.
 * @returns {object} - The decoded token payload.
 */
function verifyToken(token) {
    // Dummy implementation: Replace with actual JWT verification logic
    // Example: jwt.verify(token, secretKey)
    return { userId: "exampleUserId" };
}

module.exports = jwtAuthenticationMiddleware;
