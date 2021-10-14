const userRepository = require('../repositories/userRepository');

const checkUserRegister = async (req, res, next) => {
    const { email } = req.body;
    const user = await userRepository.getUserByEmail(email);
    if (user.length > 0) {
        res.status(409).json({ message: 'Email already registered' });
    } else {
        next();
    }
};

module.exports = checkUserRegister;