const express = require('express');
const UserController = require('../controllers/userController');

const router = express.Router();

// Criando usuário
router.post('/users', UserController.createUser);

// Buscando usuário
router.get('/users/:id', UserController.getUserById);

// Buscando usuários
router.get('/users', UserController.listUsers);

// Atualizando dados do usuário
router.patch('/users/:id', UserController.updateUserById);

// Deletando usuário
router.delete('/users/:id', UserController.deleteUserById);

module.exports = router;