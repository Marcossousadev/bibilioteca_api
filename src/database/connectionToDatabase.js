const {Sequelize} = require('sequelize');

const dotenv = require('dotenv');

dotenv.config();

  const sequelize = new Sequelize({
    database:process.env.NAME_DATABASE,
    username:process.env.USER_NAME,
    password:process.env.DB_PASSWORD,
    dialect:process.env.DIALECT,
    port:process.env.PORT,
    define:{
      timestamps:true
    }
  });
    
    const testConnection = async () => {
      try{
          await sequelize.authenticate();
          console.log("Conectado com sucesso ao banco!")
      }
      catch(error){
          console.log("Erro ao se conectar com o banco de dados", error);
      }
    }
    
    testConnection();
  module.exports = sequelize;