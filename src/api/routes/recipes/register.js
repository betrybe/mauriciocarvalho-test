//Packages
const express = require('express');
const router = express.Router();

//Controllers
const userController = require('../../controllers/userController');

//Middlewares
//Middleware responsável por retirar espaçoes em branco no cadastro. 
const trim = require('../../middlewares/trim');
//Middleware responsável retornar os erros 
const errors = require('../../middlewares/errors');
//Middleware responsável por verificar o json schema 
const usersSchema = require('../../middlewares/recipesSchema');
//Middleware responsável por verificar o json schema 
const checkUserRegister = require('../../middlewares/checkUserRegister');


//1 - Crie um endpoint para o cadastro de usuários
router.post('/users',
    trim,
    usersSchema, 
    checkUserRegister, 
    userController.register, 
    errors);


module.exports = router;