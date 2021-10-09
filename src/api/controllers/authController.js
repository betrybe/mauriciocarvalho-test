
const User = require('../models/users'); 

const login = async (req, res) => {
    try {
        
        res.status(201).json({token: "laksdlasnflasnfchladnvclsda"}); 

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {
    login
}