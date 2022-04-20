const express = require('express');
const routes = require('./routes');
const model = require('./database');

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);


const test = async() => {
    //Usado para inserir na tabela 
    //await model.Usuario.create({
      //  cpf: 5,
       // nome: 'Andre',
       // login: 'Andre@puc.com',
       // senha: '123',
       // datNasc: '2000-06-13'
    //})
    //Usado para select da tabela
    //const usuario = await model.Usuario.findAll();
    //console.log(usuario)
};
test();
