const User = require('../models/users');

const usersSchema = (req, res, next) => {
    const { name, email, password } = req.body;
    let { role } = req.body;

    if (!role) role = 'user';

    const dataUser = {
        name,
        email,
        password,
        role,
    };
    req.user = dataUser;
    const user = new User(dataUser);

    return user.validate((err) => {
        if (err) {
            const allErrors = [];
            let valid = true;
            const { errors } = err;
            if (!errors) next();
            if (errors.name) allErrors.push(errors.name);
            if (errors.email) allErrors.push(errors.email);
            if (errors.password) allErrors.push(errors.password);

            allErrors.forEach((error) => {
                const { properties } = error;
                if (properties.type === 'required' || properties.type === 'user defined') {
                    valid = false;
                }
            });

            if (!valid) return res.status(400).json({ message: 'Invalid entries. Try again.' });
        }
        return next();
    });
};

module.exports = usersSchema;