
const { request } = require('../app');
const util = require("../util/functions");
const User = require('../models/users')

const loginSchema = (req, res, next) => {

    const { email, password } = req.body;
    const validEmail = util.validateEmail(email); 
    if (!email || !password || !validEmail) 
        return res.status(401).json({ message: "All fields must be filled" });
    next();
}

module.exports = loginSchema;