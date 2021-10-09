const express = require('express');
const routerRegister = require('./routes/users/register');
const routerLogin = require('./routes/auth/login');
const app = express();
app.use(express.json());

app.use(routerRegister)
app.use(routerLogin)

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (request, response) => {
  response.send();
});
// Não remover esse end-point, ele é necessário para o avaliador


module.exports = app;
