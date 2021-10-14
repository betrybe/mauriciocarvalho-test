const userRepository = require('../repositories/userRepository');

const checkUser = async (req, res, next) => {
    const { email, password } = req.body;

    const user = await userRepository.getUserByEmailPassword(email, password);
    if (user.length === 0) {
        res.status(401).json({ message: 'Incorrect username or password' });
    } else {
        next();
    }
};

module.exports = checkUser;