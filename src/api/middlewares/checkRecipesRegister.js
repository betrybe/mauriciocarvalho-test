const User = require('../models/users');

const checkUserRegister = async (req, res, next) => {
    const { email } = req.body;

    await User.find({ email }, (err, user) => {
        if (err || user.length > 0) {
            res.status(409).json({ message: 'Email already registered' });
        } else {
            next();
        }
    });
};

module.exports = checkUserRegister;