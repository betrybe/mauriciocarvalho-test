//Packages
const express = require('express');
const router = express.Router();

//controllers


//Middlewares


//Cria um sessão com base em coockies e jwt
router.post('/auth/login',verifyLogin, login);

//Deleta a sessão
router.post('/auth/logout', auth, logout);

export default router;  