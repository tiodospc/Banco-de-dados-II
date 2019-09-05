const db = require('./db');

const Val = db.sequelize.define('valores',{
    
    ValorGasto:{
        type: db.Sequelize.INTEGER
    },
    
    ValorRestante: {
        type: db.Sequelize.INTEGER
    }
});

Val.sync({force: true});

module.exports = Val

//criar a tabela no banco   
