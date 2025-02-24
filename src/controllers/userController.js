const User = require('../models/user');

const createUser = async (req, res) => {
    try{
        const user = await User.create(req.body);
        res.status(201).json(user);
        
    }
    catch(error){
        res.status(400).json({error: error.message});
        console.log(`Erro ao tentar criar usuário`);
    }
}

const getUserById = async (req, res) => {
    try{
        const user = await User.findByPk(req.params.id);

        if(!user){
            return res.status(404).json({ error: "Usuário não encontrado"});
        }
        res.status(200).json(user);
    }
    catch(error){
        res.status(500).json({error: error.message});
        console.log("Erro a tentar buscar usuário")
    }
}

const listUsers =  async (req, res) => {
    try{
        const users = await User.findAll();
        return res.status(200).json(users);
    }
    catch(error){
        res.status(500).json({error:error.message});
        console.log("Erro ao tentar listar usuários");
    }
}

const updateUserById =  async (req, res) => {
    try{    
        const user = await User.findByPk(req.params.id);
        if(!user){
            return res.status(404).json({error: "Usuário não existe"});
        }
        res.status(200).json(user);
    }
    catch(error){
        console.log("Erro ao tentar atualizar usuário");
        res.status(500).json({error:error.message});
    }
}

const deleteUserById = async (req, res) => {
    try{
        const user = await User.findByPk(req.params.id);
        if(!user){
            return res.status(404).json({error:"Usuário não existe!"})
        }
        res.status(200).json(user);
    }
    catch(error){
        console.log("Erro ao tentar deletar usuário");
        res.status(500).json({error: error.message});
    }
}

module.exports = {
    createUser,
    getUserById, 
    listUsers,
    updateUserById,
    deleteUserById
}