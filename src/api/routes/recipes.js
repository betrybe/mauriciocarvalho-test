// Packages
const express = require('express');

const router = express.Router();

// Controllers
const recipesController = require('../controllers/recipesController');

// Services
// Função responsável por salvar imagens
const saveImage = require('../services/saveImage');

// Middlewares
// Middleware responsável por retirar espaçoes em branco no cadastro. 
const trim = require('../middlewares/trim');

// Middleware responsável retornar os erros 
const errors = require('../middlewares/errors');

// Middleware responsável por verificar o json schema 
const recipesSchema = require('../middlewares/recipesSchema');

// Middleware responsável por verificar o json schema 
// const checkRecipesRegister = require('../../middlewares/checkRecipesRegister');

// Middleware responsável por verificar a sessão do usuário 
const checkSession = require('../middlewares/checkSession');

// Middleware responsável por verificar a sessão do usuário caso tiver logado
const checkRelativeSession = require('../middlewares/checkRelativeSession');

// 3 - Crie um endpoint para o cadastro de receitas
router.post('/recipes',
    trim,
    checkSession,
    recipesSchema,
    recipesController.create,
    errors);

// 4 - Crie um endpoint para a listagem de receitas
router.get('/recipes',
    checkRelativeSession,
    recipesController.listAll,
    errors);

// 5 - Crie um endpoint para visualizar uma receita específica
router.get('/recipes/:id',
    checkRelativeSession,
    recipesController.listById,
    errors);

// 7 - Crie um endpoint para a edição de uma receita
router.put('/recipes/:id',
    checkSession,
    recipesController.updateById,
    errors);

// 8 - Crie um endpoint para a exclusão de uma receita
router.delete('/recipes/:id',
    checkSession,
    recipesController.deleteById,
    errors);

// 9 - Crie um endpoint para a adição de uma imagem a uma receita 
router.put('/recipes/:id/image',
    checkSession,
    saveImage.single('image'),
    recipesController.uploadImage,
    errors);

// 10 - Crie um endpoint para acessar a imagem de uma receita
router.get('/images/:recipeId',
    recipesController.listImages,
    errors);

module.exports = router;