const jwt = require("jsonwebtoken");


const checkRelativeSession = (req, res, next) => {

    const { authorization } = req.headers;

    if (authorization) {
        return jwt.verify(authorization, "BeTrybe", function (err, decoded) {

            if (err) {
                var err = new Error(err.message);
                err.status = 401;
                return next(err)
            }

            req.userId = decoded._id;

            return next();

        });
    } else {
        return next();
    }
}

module.exports = checkRelativeSession;