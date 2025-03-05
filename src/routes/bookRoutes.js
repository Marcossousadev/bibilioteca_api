const express = require('express');
const BookController = require('../controllers/bookController');

const router = express.Router();

// Criando livro
router.post('/books', BookController.createBook);

// Buscando livro
router.get('/books/:id', BookController.getBookById);

// Buscando livros
router.get('/books', BookController.listBooks);

// Modificando livro
router.patch('/books/:id', BookController.updateBookById);

//Deletando livro
router.delete('/books/:id', BookController.deleteBookById);

module.exports = router;    