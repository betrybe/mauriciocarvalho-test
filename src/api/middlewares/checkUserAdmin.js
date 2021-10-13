
const User = require('../models/users'); 
const jwt = require('jsonwebtoken'); 

const checkUserAdmin = (req, res, next) => {

    const { authorization } = req.headers;

    return jwt.verify(authorization, "BeTrybe", function (err, decoded) {

        if (err || decoded.role == "user") {
            var err = new Error("Only admins can register new admins");
            err.status = 403;
            return next(err)
        }
        return next()

    });
}

module.exports = checkUserAdmin;