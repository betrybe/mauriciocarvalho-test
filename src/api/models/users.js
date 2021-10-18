const database = require('../database/connect');
const util = require('../util/functions'); 

const User = database.model('users', {
    _id: {
        type: database.Schema.Types.ObjectId, auto: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        validate: [util.validateEmail, 'Invalid entries. Try again.'],
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: false,
    },
});

module.exports = User;