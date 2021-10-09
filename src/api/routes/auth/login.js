//Packages
const express = require('express');
const router = express.Router();

//Controllers
const authController = require('../../controllers/authController');


//Middlewares
//Middleware responsável por retirar espaçoes em branco no cadastro. 
const trim = require('../../middlewares/trim');
//Middleware responsável retornar os erros 
const errors = require('../../middlewares/errors');
//Middleware responsável por verificar o json schema 
const loginSchema = require('../../middlewares/loginSchema');
//Middleware responsável por verificar se o usuario existe
const checkUser = require('../../middlewares/checkUser');


//Cria um sessão
router.post('/login',
    trim,
    loginSchema,
    checkUser,
    authController.login,
    errors
);


module.exports = router;