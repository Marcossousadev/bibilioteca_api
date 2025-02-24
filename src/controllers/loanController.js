const Emprestimo = require('../models/emprestimo');

const createLoan = async (req, res) => {
    try{
        const loan = await Emprestimo.create(req.body);
        res.status(201).json(loan);
    }
    catch(error){
        res.status(400).json({error: error.message});
        console.log("Erro ao tentar criar empréstimo");
    }
}

const getLoanById = async (req, res) => {
    try{
        const loan = await Emprestimo.findByPk(req.params.id);
        if(!loan){
           return res.status(404).json({error:"Empréstimo não encontrado"});
        }
        return res.status(200).json(loan);
    }
    catch(error){
        res.status(500).json({error: error.message});
        console.log("Erro ao tentar buscar empréstimo");
    }
}

const listLoans = async (req, res) => {
    try{
        const loans = await Emprestimo.findAll();

        res.status(200).json(loans);
    }
    catch(error){
        res.status(500).json({error: error.message});
        console.log("Erro ao buscar empréstimos");
    }
}

const updateLoanById = async (req, res) => {
    try{
        const loan = await Emprestimo.findByPk(req.params.id);

        if(!loan){
           return res.status(404).json({error: "Empréstimo não encontrado"});
        }
        res.status(200).json(loan);
    }
    catch(error){
        res.status(500).json({error: error.message});
        console.log("Erro ao tentar atualizar Empréstimo");
    }
}

const deleteLoanById = async (req, res) => {
    try{
        const loan = await Emprestimo.findByPk(req.params.id);

        if(loan){
           return res.status(404).json({error: "Empréstimo não encontrado"});
        }

        res.status(200).json(loan);
    }
    catch(error){
        res.status(500).json({ error: error.message });
        console.log("Erro ao tentar deletar Empréstimo");
    }
}

module.exports = {
    createLoan,
    getLoanById,
    listLoans,
    updateLoanById,
    deleteLoanById
}