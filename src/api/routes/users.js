// Packages
const express = require('express');

const router = express.Router();

// Controllers
const userController = require('../controllers/userController');

// Middlewares
// Middleware responsável por retirar espaçoes em branco no cadastro. 
const trim = require('../middlewares/trim');
// Middleware responsável retornar os erros 
const errors = require('../middlewares/errors');
// Middleware responsável por verificar o json schema 
const usersSchema = require('../middlewares/usersSchema');
// Middleware responsável por verificar o json schema 
const checkUserRegister = require('../middlewares/checkUserRegister');
// Middleware responsável por verificar se o usuário é admin 
const checkUserAdmin = require('../middlewares/checkUserAdmin');
// Middleware responsável por verificar a sessão do usuário 
const checkSession = require('../middlewares/checkSession');

// 1 - Crie um endpoint para o cadastro de usuários
router.post('/users',
    trim,
    usersSchema, 
    checkUserRegister, 
    userController.register, 
    errors);

// 12 - Crie um endpoint para cadastro de pessoas administradoras
router.post('/users/admin',
    trim,
    checkSession,
    checkUserAdmin, 
    usersSchema, 
    userController.registerUserAdmin, 
    errors);

module.exports = router;