const {DataTypes} = require("sequelize");
const sequelize = require('../database/connectionToDatabase');


const Livro = sequelize.define('Livro', {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    titulo:{
        type:DataTypes.STRING,
        allowNull:false
    },
    autor:{
        type:DataTypes.STRING,
        allowNull:false,   
    },
    ano:{
        type:DataTypes.INTEGER,
        allowNull:false,
        defaultValue: 1,
    },
    editora:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    status:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            isIn:[['disponível', 'emprestado']]
        }
    }
}, {
    tableName:"livros"
});

module.exports = Livro;