const {DataTypes} = require('sequelize');
const sequelize = require("../database/connectionToDatabase");

const Emprestimo = sequelize.define('Emprestimo', {
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    id_usuario:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    id_livro:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    data_emprestimo:{
        type:DataTypes.DATE,
        allowNull:false,
        defaultValue:DataTypes.NOW
    },
    data_devolucao_prevista:{
        type:DataTypes.DATE,
        allowNull:false,
    },
    data_devolucao_realizada:{
        type:DataTypes.DATE,
    },
    status:{
        type:DataTypes.ENUM('ativo', 'concluido', 'atrasado'),
        allowNull:false,
    }
    
},{
    tableName:"emprestimos"
});
module.exports = Emprestimo;