const User = require('../models/users');

const checkUser = async (req, res, next) => {
    const { email, password } = req.body;
    await User.find({ email, password }, (err, user) => {
        if (err || user.length === 0) {
            res.status(401).json({ message: 'Incorrect username or password' });
        } else {
            next();
        }
    });
};

module.exports = checkUser;