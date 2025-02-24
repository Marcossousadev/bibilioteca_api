const Livro = require('../models/livro');


const createBook = async (req, res) => {
    try{
        const book = await Livro.create(req.body);
        res.status(201).json(book);
    }
    catch(error){
        res.status(400).json({error: error.message});
        console.log("Erro ao tentar criar livro");
    }
}

const getBookById = async (req, res) => {
    try{
        const book = await Livro.findByPk(req.params.id);
        if(!book){
            return res.status(404).json({message:"Livro não encontrado"});
        }
        return res.status(200).json(book);
    }
    catch(error){
        res.status(500).json({error:error.message});
        console.log("Erro ao tentar buscar livro");
    }
}

const listBooks = async (req, res) => {
    try{
        const books = await Livro.findAll();
        return res.status(200).json(books);
    }
    catch(error){
        res.status(500).json({error:error.message});
        console.log("Erro ao tentar listar livros");
    }
}

const updateBookById = async (req, res) => {
    try{
        const book = await Livro.findByPk(req.params.id);

        if(!book){
            return res.status(404).json({message:"Livro não encontrado"})
        }
            res.status(200).json(book);
    }
    catch(error){
        res.status(500).json({error: error.message});
        console.log("Erro ao tentar atualizar livro");
    }
}

const deleteBookById = async (req, res) => {
    try{
        const book = await Livro.findByPk(req.params.id);

        if(!book){
            return res.status(404).json({error:"Livro não encontrado"});
        }
        res.status(200).json(book);
    }
    catch(error){
        res.status(500).json({error: error.message});
        console.log("Erro ao tentar deletar livro");
    }
}

module.exports = {
    createBook,
    getBookById,
    listBooks,
    updateBookById,
    deleteBookById
}