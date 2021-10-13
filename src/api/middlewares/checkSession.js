const jwt = require("jsonwebtoken");


const checkSession = (req, res, next) => {

    const { authorization } = req.headers;

    console.log(authorization)

    if (!authorization) {
        var err = new Error("missing auth token");
        err.status = 401;
         next(err)
    } else {
        return jwt.verify(authorization, "BeTrybe", function (err, decoded) {

            if (err) {
                var err = new Error(err.message);
                err.status = 401;
                return next(err)
            }

            req.userId = decoded._id;

            return next();

        });

    }



}

module.exports = checkSession;