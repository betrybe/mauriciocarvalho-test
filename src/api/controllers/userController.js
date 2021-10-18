const userRepository = require('../repositories/userRepository');

const register = async (req, res) => {
    try {
        const { user } = req;

        const createdUser = await userRepository.createUser(user);
        res.status(201).json({ user: createdUser });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const registerUserAdmin = async (req, res) => {
    try {
        const { user } = req;

        user.role = 'admin';

        let createdUser = await userRepository.createUser(user);
        const { name, email, role, _id } = createdUser;

        createdUser = {
            name,
            email,
            role,
            _id,
        };
        res.status(201).json({ user: createdUser });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = {
    register,
    registerUserAdmin,
};