const jwt = require('jsonwebtoken');

const checkRelativeSession = (req, res, next) => {
    const { authorization } = req.headers;

    if (authorization) {
        return jwt.verify(authorization, 'BeTrybe', (error, decoded) => {
            if (error) {
                const err = new Error(error.message);
                err.status = 401;
                return next(err);
            }

            const { _id } = decoded;
            req.userId = _id;
            next();
        });
    }
    return next();
};

module.exports = checkRelativeSession;