const Sequelize = require('sequelize');
const sequelize =  new Sequelize('tra1', 'thiago', 'tyko1234',{
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(function(){
    console.log('Conectado com sucesso')
}).catch(function(erro){
    console.log('Falha ao conectar ao banco: '+erro)
});


//Saldo
var Saldo = sequelize.define('valores',{
    ValorAtual: {
        type: Sequelize.INTEGER
    },

    ValorGasto:{
        type: Sequelize.INTEGER
    },

    ValorRestante: {
        type: Sequelize.INTEGER
    }
});


//Saldo.sync({force: true});

Saldo.create({
    ValorAtual: 70,
    ValorGasto: 30,
    ValorRestante: 40, 
});
