const jwt = require('jsonwebtoken');

const checkSession = (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        const err = new Error('missing auth token');
        err.status = 401;
        next(err);
    } else {
        return jwt.verify(authorization, 'BeTrybe', (error, decoded) => {
            if (error) {
                const err = new Error(error.message);
                err.status = 401;
                return next(err);
            }

            const { _id } = decoded;
            req.userId = _id;

            return next();
        });
    }
};

module.exports = checkSession;