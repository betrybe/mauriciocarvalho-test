const chai = require('chai');
const chaiHttp = require('chai-http');
const USERS = require('./schemas.json').users;
const SERVER = require('./schemas.json').server;
const User = require('../api/models/users');


chai.use(chaiHttp);
chai.should();

describe(USERS.register.describe.description, () => {

    beforeEach(async () => {
        await User.deleteMany({})
        const admin = USERS.admin
        await User.create(admin);
    })

    it(USERS.register.describe.it1.it, done => {
        chai.request(SERVER)
            .post(USERS.register['end-point'])
            .send(USERS.register.describe.it1.json)
            .end((err, res) => {
                chai.assert.isNull(err);
                chai.assert.isNotEmpty(res.body);
                res.should.have.status(400);
                res.body.should.have.property('message').equal(USERS.register.describe.it1.response);
                done();
            });
    });
    it(USERS.register.describe.it2.it, done => {
        chai.request(SERVER)
            .post(USERS.register['end-point'])
            .send(USERS.register.describe.it2.json)
            .end((err, res) => {
                chai.assert.isNull(err);
                chai.assert.isNotEmpty(res.body);
                res.should.have.status(400);
                res.body.should.have.property('message').equal(USERS.register.describe.it2.response);
                done();
            });
    });
    it(USERS.register.describe.it3.it, done => {
        chai.request(SERVER)
            .post(USERS.register['end-point'])
            .send(USERS.register.describe.it3.json)
            .end((err, res) => {
                chai.assert.isNull(err);
                chai.assert.isNotEmpty(res.body);
                res.should.have.status(400);
                res.body.should.have.property('message').equal(USERS.register.describe.it3.response);
                done();
            });
    });
    it(USERS.register.describe.it4.it, done => {
        chai.request(SERVER)
            .post(USERS.register['end-point'])
            .send(USERS.register.describe.it4.json)
            .end((err, res) => {
                chai.assert.isNull(err);
                chai.assert.isNotEmpty(res.body);
                res.should.have.status(400);
                res.body.should.have.property('message').equal(USERS.register.describe.it4.response);
                done();
            });
    });
    describe(USERS.register.describe.it5.it, () => {
        beforeEach(async () => {
            const user = USERS.user
            await User.create(user);
        })
        it(USERS.register.describe.it5.it, done => {
            chai.request(SERVER)
                .post(USERS.register['end-point'])
                .send(USERS.register.describe.it5.json)
                .end((err, res) => {
                    chai.assert.isNull(err);
                    chai.assert.isNotEmpty(res.body);
                    res.should.have.status(409);
                    res.body.should.have.property('message').equal(USERS.register.describe.it5.response);
                    done();
                });
        });
    });
    it(USERS.register.describe.it6.it, done => {
        chai.request(SERVER)
            .post(USERS.register['end-point'])
            .send(USERS.register.describe.it6.json)
            .end((err, res) => {
                chai.assert.isNull(err);
                chai.assert.isNotEmpty(res.body);
                res.should.have.status(201);
                res.body.user.should.have.property('name').equal(USERS.register.describe.it6.response.user.name);
                res.body.user.should.have.property('email').equal(USERS.register.describe.it6.response.user.email);
                res.body.should.to.not.have.property('password')
                done();
            });
    });
    it(USERS.register.describe.it7.it, done => {
        chai.request(SERVER)
            .post(USERS.register['end-point'])
            .send(USERS.register.describe.it7.json)
            .end((err, res) => {
                chai.assert.isNull(err);
                chai.assert.isNotEmpty(res.body);
                res.should.have.status(201);
                res.body.user.should.have.property('name').equal(USERS.register.describe.it7.response.user.name);
                res.body.user.should.have.property('email').equal(USERS.register.describe.it7.response.user.email);
                res.body.user.should.have.property('role').equal(USERS.register.describe.it7.response.user.role);
                res.body.should.to.not.have.property('password')
                done();
            });
    });
});