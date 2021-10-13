const jwt = require('jsonwebtoken');
const User = require('../models/users'); 

const login = async (req, res) => {
    try {

        const {email, password} = req.body;

        const user = await User.find({ email: email, password: password });

        if(user.length > 0){

            const {_id, role} = user[0]; 

            const payload = {
                _id: _id,
                email: email,
                role: role
            }

    
            const token = jwt.sign(payload, "BeTrybe", {
                expiresIn: 30000
            });
            
            res.status(200).json({token: token}); 
        }

        

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {
    login
}