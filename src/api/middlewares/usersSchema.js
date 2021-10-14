const User = require('../models/users');
const validateModelSchema = require('../services/validateModelSchema');

const usersSchema = async (req, res, next) => {
    const { name, email, password } = req.body;
    let { role } = req.body;
    if (!role) role = 'user';
    const dataUser = { name, email, password, role };
    req.user = dataUser;
    const user = new User(dataUser);
    await validateModelSchema(user, (valid) => {
        if (!valid) {
            const err = new Error('Invalid entries. Try again.');
            err.status = 400;
            next(err);
        } else {
            next();
        }
    });
};

module.exports = usersSchema;