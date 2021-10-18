const User = require('../models/users');

// const database = require('../database/connect');

const createUser = async (user) => {
    let createdUser = await User.create(user);
    const { name, email, role, _id } = createdUser;
    createdUser = {
        name,
        email,
        role,
        _id,
    };

    return createdUser;
};

const getUserByEmail = async (email) => {
    const user = await User.find({ email });

    return user;
};

const getUserByEmailPassword = async (email, password) => {
    const user = await User.find({ email, password });

    return user;
};

module.exports = {
    createUser,
    getUserByEmail,
    getUserByEmailPassword,
};