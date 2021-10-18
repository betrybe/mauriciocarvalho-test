const jwt = require('jsonwebtoken'); 

const checkUserAdmin = (req, res, next) => {
    const { authorization } = req.headers;

    return jwt.verify(authorization, 'BeTrybe', (error, decoded) => {
        if (error || decoded.role === 'user') {
            const err = new Error('Only admins can register new admins');
            err.status = 403;
            return next(err);
        }
        return next();
    });
};

module.exports = checkUserAdmin;