const {DataTypes} = require('sequelize');
const sequelize = require('../database/connectionToDatabase');
const bcrypt = require('bcrypt');

const User = sequelize.define('User', {
    id:{
        type:DataTypes.INTEGER, 
        autoIncrement:true, 
        primaryKey:true, 
        
    },
    nome:{
        type:DataTypes.STRING, 
        allowNull:false, 
    },
    email:{
        type:DataTypes.STRING, 
        allowNull:false, 
        unique:true, 
    },
    telefone:{
        type:DataTypes.STRING,
        defaultValue:"(00) 0000-0000",
        allowNull:true
    },
    senha:{
        type:DataTypes.STRING,
        allowNull:false  
    }, 
    tipo_usuario:{
        type:DataTypes.ENUM('aluno', 'professor'), 
        defaultValue:'outro',
        allowNull:false,    
    }
},{
    tableName:"usuarios",
    hooks:{
        beforeCreate: async (user) => {
            const salt = await bcrypt.genSalt(10);
            user.senha = await bcrypt.hash(user.senha, salt);
        }
    }
  });

module.exports = User;