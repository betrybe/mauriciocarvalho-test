const chai = require('chai');
const chaiHttp = require('chai-http');
const USERS = require('./schemas.json').users;
const SERVER = require('./schemas.json').server;
const User = require('../api/models/users'); 

chai.use(chaiHttp);
chai.should();

describe(USERS.login.describe.description, () => {
    before(async () => {
        await User.deleteMany({});
        const admin = USERS.admin
        await User.create(admin);
        const users = USERS.user
        await User.create(users);
      })

    it(USERS.login.describe.it1.it, done => {
        chai.request(SERVER)
            .post(USERS.login['end-point'])
            .send(USERS.login.describe.it1.json)
            .end((err, res) => {
                chai.assert.isNull(err);
                chai.assert.isNotEmpty(res.body);
                res.should.have.status(401);           
                res.body.should.have.property('message').equal(USERS.login.describe.it1.response);
                done();
            });
    });
    it(USERS.login.describe.it2.it, done => {
        chai.request(SERVER)
            .post(USERS.login['end-point'])
            .send(USERS.login.describe.it2.json)
            .end((err, res) => {
                chai.assert.isNull(err);
                chai.assert.isNotEmpty(res.body);
                res.should.have.status(401);           
                res.body.should.have.property('message').equal(USERS.login.describe.it2.response);
                done();
            });
    });
    it(USERS.login.describe.it3.it, done => {
        chai.request(SERVER)
            .post(USERS.login['end-point'])
            .send(USERS.login.describe.it3.json)
            .end((err, res) => {
                chai.assert.isNull(err);
                chai.assert.isNotEmpty(res.body);
                res.should.have.status(401);           
                res.body.should.have.property('message').equal(USERS.login.describe.it3.response);
                done();
            });
    });
    it(USERS.login.describe.it4.it, done => {
        chai.request(SERVER)
            .post(USERS.login['end-point'])
            .send(USERS.login.describe.it4.json)
            .end((err, res) => {
                chai.assert.isNull(err);
                chai.assert.isNotEmpty(res.body);
                res.should.have.status(401);           
                res.body.should.have.property('message').equal(USERS.login.describe.it4.response);
                done();
            });
    });
    it(USERS.login.describe.it5.it, done => {
        chai.request(SERVER)
            .post(USERS.login['end-point'])
            .send(USERS.login.describe.it5.json)
            .end((err, res) => {
                chai.assert.isNull(err);
                chai.assert.isNotEmpty(res.body);
                res.should.have.status(200);           
                res.body.should.have.property('token')
                chai.assert.isNotNull(res.body.token);
                done();
            });
    });
});