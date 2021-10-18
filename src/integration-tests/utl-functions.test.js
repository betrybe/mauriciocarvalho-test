const chai = require('chai');
const util = require('../api/util/functions'); 
const UTIL = require('./schemas.json').util;
chai.should();

describe(UTIL.functions.describe.description, () => {

   
    it(UTIL.functions.describe.it1.it, done => {
        const isValid = util.validateEmail(UTIL.functions.describe.it1.params.email);
        chai.assert.isBoolean(isValid);
        chai.expect(false)
        done()
    });
});