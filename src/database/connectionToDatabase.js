const {Sequelize} =  require("sequelize");


const sequelize = new Sequelize({
    host:process.env.HOST,
    dialect:process.env.DIALECT,
    username:process.env.USER_NAME,
    password:process.env.DB_PASSWORD,
    database:process.env.NAME_DATABASE
})

module.exports = sequelize;