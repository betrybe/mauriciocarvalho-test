
const User = require('../models/users')
const register = async (req, res) => {
    try {
        const {user} = req; 
        let createdUser = await User.create(user); 
        const {name, email, role, _id} = createdUser; 
        createdUser = {
            name,
            email,
            role,
            _id
        }
        res.status(201).json({user: createdUser}); 

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {
    register
}