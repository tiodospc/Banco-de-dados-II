const Sequelize = require('sequelize');

  // Conexão com o banco de dados Mysql
  const sequelize =  new Sequelize('tra1', 'thiago', 'tyko1234',{
    host: 'localhost',
    dialect: 'mysql'
});  

module.exports = {
    Sequelize:  Sequelize,
    sequelize: sequelize
}