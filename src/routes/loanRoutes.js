
const express = require('express');
const LoanController = require('../controllers/loanController');

const router = express.Router();

// Rota para criar empréstimo
router.post('/loans', LoanController.createLoan);

// Rota para buscar um empréstimo pelo id
router.get('/loans/:id', LoanController.getLoanById);

// Rota para buscar uma lista de empréstimos
router.get('/loans', LoanController.listLoans);

// Rota para modificar um empréstimo pelo id
router.patch('/loans/:id', LoanController.updateLoanById);

// Rota para deletar um registro pelo id
router.delete('/loans/:id', LoanController.deleteLoanById);

module.exports = router;

