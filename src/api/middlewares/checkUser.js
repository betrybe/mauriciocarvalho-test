
const User = require('../models/users')

const checkUser = (req, res, next) => {
    const { email, password } = req.body;

    const userExists = User.find({email: email, password: password}, (err, user) => {
        if(err || user.length === 0){
            res.status(401).json({message: "Incorrect username or password"}); 
        }else{
            next(); 
        }
    });

}

module.exports = checkUser;