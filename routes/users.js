const express = require('express');
const router = express.Router();

// Rotas
const userController = require('../controllers/userController');

// Listar todos os usuários
router.get('/', userController.getAllUsers);

// Listar um único usuário pelo ID 
router.get('/:id', userController.getUserById);

// Criar novo usuário
router.post('/', userController.createUser);

// Atualizar dados usuário
router.put('/:id', userController.updateUser);

// Excluir usuário
router.delete('/:id', userController.deleteUser);

module.exports = router;