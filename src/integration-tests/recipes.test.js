const chai = require('chai');
const chaiHttp = require('chai-http');
const RECIPES = require('./schemas.json').recipes;
const USERS = require('./schemas.json').users;
const SERVER = require('./schemas.json').server;
const User = require('../api/models/users');
const Recipe = require('../api/models/recipes');


chai.use(chaiHttp);
chai.should();

describe(RECIPES.register.describe1.description, () => {

    beforeEach(async () => {
        await User.deleteMany({});
        await Recipe.deleteMany({});
        const admin = USERS.admin
        await User.create(admin);
        const user = USERS.user
        await User.create(user);
    })

    it(RECIPES.register.describe1.it1.it, done => {
        chai.request(SERVER)
            .post(USERS.login['end-point'])
            .send(USERS.login.describe.it5.json)
            .end((err, res) => {
                chai.request(SERVER)
                    .post(RECIPES.register['end-point'])
                    .set('Authorization', res.body.token)
                    .send(RECIPES.register.describe1.it1.json)
                    .end((err, res) => {
                        // console.log(res)
                        chai.assert.isNull(err);
                        chai.assert.isNotEmpty(res.body);
                        res.should.have.status(400);
                        res.body.should.have.property('message').equal(RECIPES.register.describe1.it1.response);
                        done();
                    });
            });
    });
    it(RECIPES.register.describe1.it2.it, done => {
        chai.request(SERVER)
            .post(USERS.login['end-point'])
            .send(USERS.login.describe.it5.json)
            .end((err, res) => {
                chai.request(SERVER)
                    .post(RECIPES.register['end-point'])
                    .set('Authorization', res.body.token)
                    .send(RECIPES.register.describe1.it2.json)
                    .end((err, res) => {
                        chai.assert.isNull(err);
                        chai.assert.isNotEmpty(res.body);
                        res.should.have.status(400);
                        res.body.should.have.property('message').equal(RECIPES.register.describe1.it2.response);
                        done();
                    });
            });
    });
    it(RECIPES.register.describe1.it3.it, done => {
        chai.request(SERVER)
            .post(USERS.login['end-point'])
            .send(USERS.login.describe.it5.json)
            .end((err, res) => {
                chai.request(SERVER)
                    .post(RECIPES.register['end-point'])
                    .set('Authorization', res.body.token)
                    .send(RECIPES.register.describe1.it3.json)
                    .end((err, res) => {
                        chai.assert.isNull(err);
                        chai.assert.isNotEmpty(res.body);
                        res.should.have.status(400);
                        res.body.should.have.property('message').equal(RECIPES.register.describe1.it3.response);
                        done();
                    });
            });
    });
    it(RECIPES.register.describe1.it4.it, done => {
        chai.request(SERVER)
            .post(RECIPES.register['end-point'])
            .set('Authorization', RECIPES.register.describe1.it4.token)
            .send(RECIPES.register.describe1.it4.json)
            .end((err, res) => {
                chai.assert.isNull(err);
                chai.assert.isNotEmpty(res.body);
                res.should.have.status(401);
                res.body.should.have.property('message').equal(RECIPES.register.describe1.it4.response);
                done();
            });
    });
    it(RECIPES.register.describe1.it5.it, done => {
        chai.request(SERVER)
            .post(USERS.login['end-point'])
            .send(USERS.login.describe.it5.json)
            .end((err, res) => {
                chai.request(SERVER)
                    .post(RECIPES.register['end-point'])
                    .set('Authorization', res.body.token)
                    .send(RECIPES.register.describe1.it5.json)
                    .end((err, res) => {
                        chai.assert.isNull(err);
                        chai.assert.isNotEmpty(res.body);
                        res.body.recipe.should.have.property('_id')
                        res.body.recipe.should.have.property('name').equal(RECIPES.register.describe1.it5.response.recipe.name);
                        res.body.recipe.should.have.property('ingredients').equal(RECIPES.register.describe1.it5.response.recipe.ingredients);
                        res.body.recipe.should.have.property('preparation').equal(RECIPES.register.describe1.it5.response.recipe.preparation);
                        done();
                    });
            });
    });
});

describe(RECIPES.register.describe2.description, () => {

    beforeEach(async () => {
        await User.deleteMany({});
        await Recipe.deleteMany({});
        const admin = USERS.admin
        await User.create(admin);
        const user = USERS.user
        await User.create(user);
        const recipe = RECIPES.recipe;
        await Recipe.create(recipe);
    })

    it(RECIPES.register.describe2.it1.it, done => {
        chai.request(SERVER)
            .get(RECIPES.register['end-point'])
            .end((err, res) => {
                chai.assert.isNull(err);
                chai.assert.isNotEmpty(res.body);
                res.should.have.status(200);
                res.body[0].should.have.property('name').equal(RECIPES.recipe.name);
                res.body[0].should.have.property('ingredients').equal(RECIPES.recipe.ingredients);
                res.body[0].should.have.property('preparation').equal(RECIPES.recipe.preparation);
                done();
            });
    });
    // it(RECIPES.register.describe1.it2.it, done => {
    //     chai.request(SERVER)
    //         .post(USERS.login['end-point'])
    //         .send(USERS.login.describe1.it5.json)
    //         .end((err, res) => {
    //             chai.request(SERVER)
    //                 .post(RECIPES.register['end-point'])
    //                 .set('Authorization', res.body.token)
    //                 .send(RECIPES.register.describe1.it2.json)
    //                 .end((err, res) => {
    //                     chai.assert.isNull(err);
    //                     chai.assert.isNotEmpty(res.body);
    //                     res.should.have.status(400);
    //                     res.body.should.have.property('message').equal(RECIPES.register.describe1.it2.response);
    //                     done();
    //                 });
    //         });
    // });
    // it(RECIPES.register.describe1.it3.it, done => {
    //     chai.request(SERVER)
    //         .post(USERS.login['end-point'])
    //         .send(USERS.login.describe1.it5.json)
    //         .end((err, res) => {
    //             chai.request(SERVER)
    //                 .post(RECIPES.register['end-point'])
    //                 .set('Authorization', res.body.token)
    //                 .send(RECIPES.register.describe1.it3.json)
    //                 .end((err, res) => {
    //                     chai.assert.isNull(err);
    //                     chai.assert.isNotEmpty(res.body);
    //                     res.should.have.status(400);
    //                     res.body.should.have.property('message').equal(RECIPES.register.describe1.it3.response);
    //                     done();
    //                 });
    //         });
    // });
    // it(RECIPES.register.describe1.it4.it, done => {
    //     chai.request(SERVER)
    //         .post(RECIPES.register['end-point'])
    //         .set('Authorization', RECIPES.register.describe1.it4.token)
    //         .send(RECIPES.register.describe1.it4.json)
    //         .end((err, res) => {
    //             chai.assert.isNull(err);
    //             chai.assert.isNotEmpty(res.body);
    //             res.should.have.status(401);
    //             res.body.should.have.property('message').equal(RECIPES.register.describe1.it4.response);
    //             done();
    //         });
    // });
    // it(RECIPES.register.describe1.it5.it, done => {
    //     chai.request(SERVER)
    //         .post(USERS.login['end-point'])
    //         .send(USERS.login.describe1.it5.json)
    //         .end((err, res) => {
    //             chai.request(SERVER)
    //                 .post(RECIPES.register['end-point'])
    //                 .set('Authorization', res.body.token)
    //                 .send(RECIPES.register.describe1.it5.json)
    //                 .end((err, res) => {
    //                     chai.assert.isNull(err);
    //                     chai.assert.isNotEmpty(res.body);
    //                     res.body.recipe.should.have.property('_id')
    //                     res.body.recipe.should.have.property('name').equal(RECIPES.register.describe1.it5.response.recipe.name);
    //                     res.body.recipe.should.have.property('ingredients').equal(RECIPES.register.describe1.it5.response.recipe.ingredients);
    //                     res.body.recipe.should.have.property('preparation').equal(RECIPES.register.describe1.it5.response.recipe.preparation);
    //                     done();
    //                 });
    //         });
    // });
});