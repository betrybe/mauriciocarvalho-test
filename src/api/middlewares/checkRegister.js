
const User = require('../models/users')

const checkRegister = (req, res, next) => {
    const { email } = req.body;

    const userExists = User.find({email: email}, (err, user) => {
        if(err || user.length > 0){
            res.status(409).json({message: "Email already registered"}); 
        }else{
            next(); 
        }
    });

}

module.exports = checkRegister;