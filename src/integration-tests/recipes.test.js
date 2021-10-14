const chai = require('chai');
const chaiHttp = require('chai-http');
const RECIPES = require('./schemas.json').recipes;
const USERS = require('./schemas.json').users;
const SERVER = require('./schemas.json').server;
const User = require('../api/models/users');
const Recipe = require('../api/models/recipes');


chai.use(chaiHttp);
chai.should();

describe(RECIPES.register.describe.description, () => {

    beforeEach(async () => {
        await User.deleteMany({});
        await Recipe.deleteMany({});
        const admin = USERS.admin
        await User.create(admin);
        const user = USERS.user
        await User.create(user);
    })

    it(RECIPES.register.describe.it1.it, done => {
        chai.request(SERVER)
            .post(USERS.login['end-point'])
            .send(USERS.login.describe.it5.json)
            .end((err, res) => {
                chai.request(SERVER)
                    .post(RECIPES.register['end-point'])
                    .set('Authorization', res.body.token)
                    .send(RECIPES.register.describe.it1.json)
                    .end((err, res) => {
                        // console.log(res)
                        chai.assert.isNull(err);
                        chai.assert.isNotEmpty(res.body);
                        res.should.have.status(400);
                        res.body.should.have.property('message').equal(RECIPES.register.describe.it1.response);
                        done();
                    });
            });
    });
    it(RECIPES.register.describe.it2.it, done => {
        chai.request(SERVER)
            .post(USERS.login['end-point'])
            .send(USERS.login.describe.it5.json)
            .end((err, res) => {
                chai.request(SERVER)
                    .post(RECIPES.register['end-point'])
                    .set('Authorization', res.body.token)
                    .send(RECIPES.register.describe.it2.json)
                    .end((err, res) => {
                        chai.assert.isNull(err);
                        chai.assert.isNotEmpty(res.body);
                        res.should.have.status(400);
                        res.body.should.have.property('message').equal(RECIPES.register.describe.it2.response);
                        done();
                    });
            });
    });
    it(RECIPES.register.describe.it3.it, done => {
        chai.request(SERVER)
            .post(USERS.login['end-point'])
            .send(USERS.login.describe.it5.json)
            .end((err, res) => {
                chai.request(SERVER)
                    .post(RECIPES.register['end-point'])
                    .set('Authorization', res.body.token)
                    .send(RECIPES.register.describe.it3.json)
                    .end((err, res) => {
                        chai.assert.isNull(err);
                        chai.assert.isNotEmpty(res.body);
                        res.should.have.status(400);
                        res.body.should.have.property('message').equal(RECIPES.register.describe.it3.response);
                        done();
                    });
            });
    });
    // it(RECIPES.register.describe.it2.it, done => {
    //     chai.request(SERVER)
    //         .post(RECIPES.register['end-point'])
    //         .send(RECIPES.register.describe.it2.json)
    //         .end((err, res) => {
    //             chai.assert.isNull(err);
    //             chai.assert.isNotEmpty(res.body);
    //             res.should.have.status(400);
    //             res.body.should.have.property('message').equal(RECIPES.register.describe.it2.response);
    //             done();
    //         });
    // });
    // it(RECIPES.register.describe.it3.it, done => {
    //     chai.request(SERVER)
    //         .post(RECIPES.register['end-point'])
    //         .send(RECIPES.register.describe.it3.json)
    //         .end((err, res) => {
    //             chai.assert.isNull(err);
    //             chai.assert.isNotEmpty(res.body);
    //             res.should.have.status(400);
    //             res.body.should.have.property('message').equal(RECIPES.register.describe.it3.response);
    //             done();
    //         });
    // });
    // it(RECIPES.register.describe.it4.it, done => {
    //     chai.request(SERVER)
    //         .post(RECIPES.register['end-point'])
    //         .send(RECIPES.register.describe.it4.json)
    //         .end((err, res) => {
    //             chai.assert.isNull(err);
    //             chai.assert.isNotEmpty(res.body);
    //             res.should.have.status(400);
    //             res.body.should.have.property('message').equal(RECIPES.register.describe.it4.response);
    //             done();
    //         });
    // });
    // describe(RECIPES.register.describe.it5.it, () => {
    //     beforeEach(async () => {
    //         const user = RECIPES.user
    //         await User.create(user);
    //     })
    //     it(RECIPES.register.describe.it5.it, done => {
    //         chai.request(SERVER)
    //             .post(RECIPES.register['end-point'])
    //             .send(RECIPES.register.describe.it5.json)
    //             .end((err, res) => {
    //                 chai.assert.isNull(err);
    //                 chai.assert.isNotEmpty(res.body);
    //                 res.should.have.status(409);
    //                 res.body.should.have.property('message').equal(RECIPES.register.describe.it5.response);
    //                 done();
    //             });
    //     });
    // });
    // it(RECIPES.register.describe.it6.it, done => {
    //     chai.request(SERVER)
    //         .post(RECIPES.register['end-point'])
    //         .send(RECIPES.register.describe.it6.json)
    //         .end((err, res) => {
    //             chai.assert.isNull(err);
    //             chai.assert.isNotEmpty(res.body);
    //             res.should.have.status(201);
    //             res.body.user.should.have.property('name').equal(RECIPES.register.describe.it6.response.user.name);
    //             res.body.user.should.have.property('email').equal(RECIPES.register.describe.it6.response.user.email);
    //             res.body.should.to.not.have.property('password')
    //             done();
    //         });
    // });
    // it(RECIPES.register.describe.it7.it, done => {
    //     chai.request(SERVER)
    //         .post(RECIPES.register['end-point'])
    //         .send(RECIPES.register.describe.it7.json)
    //         .end((err, res) => {
    //             chai.assert.isNull(err);
    //             chai.assert.isNotEmpty(res.body);
    //             res.should.have.status(201);
    //             res.body.user.should.have.property('name').equal(RECIPES.register.describe.it7.response.user.name);
    //             res.body.user.should.have.property('email').equal(RECIPES.register.describe.it7.response.user.email);
    //             res.body.user.should.have.property('role').equal(RECIPES.register.describe.it7.response.user.role);
    //             res.body.should.to.not.have.property('password')
    //             done();
    //         });
    // });
});