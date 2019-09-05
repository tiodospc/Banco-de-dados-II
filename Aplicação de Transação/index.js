const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize');
const bodyParser = require('body-parser');
const Val = require('./models/Valores')

// config
    // tamplete engine
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine',  'handlebars')

    //Body Parser 
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())




app.get('/teste', function(req, res){   
    res.render('layouts/formulario')
});

app.post('/add', function(req, res){
    var ValorCarteira = 1000;

    if(ValorCarteira >= req.body.ValorGasto ){
        Val.create({
            ValorGasto: req.body.ValorGasto,
            ValorRestante: ValorCarteira-req.body.ValorGasto
        }).then(function(){
            res.send('Valores Inserido com sucesso!')
        })
    }else{

        res.send('Houve um erro ')
    }
})


     
app.listen(8081, function(){
    console.log('Servidor Rodando')  
})