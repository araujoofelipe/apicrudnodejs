const express = require('express');
const requireDir =require('require-dir')
const mongoose = require('mongoose');
//Iniciando o App
const app = express();

//Conectando com o MongoDB

mongoose.connect("mongodb://localhost:27017/nodeapi",{useNewUrlParser: true});

requireDir('./src/models');

//importando rotas

 app.use(express.json());

app.use('/',require('./src/routes'));



app.listen(8000);

