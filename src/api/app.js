const express = require('express');

const userRouters = require('./routes/users');

const authRouter = require('./routes/auth');

const recipeRouter = require('./routes/recipes');

const app = express();
app.use(express.json());

app.use(userRouters);
app.use(authRouter);
app.use(recipeRouter);

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (request, response) => {
  response.send();
});
// Não remover esse end-point, ele é necessário para o avaliador

module.exports = app;
