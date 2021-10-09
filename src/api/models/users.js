const database = require('../database/connect');
const util = require('../util/functions'); 

const User = database.model('users', {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate: [util.validateEmail, 'Invalid entries. Try again.']
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: false
    }
})


module.exports = User;