const chai = require('chai');
const userController = require('../api/controllers/userControllers');
const CONTROLLERS = require('./schemas.json').controllers;
const USERS = require('./schemas.json').users;
chai.should();

describe(CONTROLLERS.userController.describe.description, () => {

    it(CONTROLLERS.userController.describe.it1.it, done => {
        const request = CONTROLLERS.userController.describe.it1.json;

        const user = userController.register();
        
    });
});