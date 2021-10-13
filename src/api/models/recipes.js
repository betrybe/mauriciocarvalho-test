const database = require('../database/connect');
const util = require('../util/functions'); 

const Recipes = database.model('recipes', {
    name: {
        type: String,
        required: true
    },
    ingredients: {
        type: String,
        required: true
    },
    preparation: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false
    }

})


module.exports = Recipes;