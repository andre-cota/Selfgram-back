const express = require('express');
// const routes = require('./routes');
const model = require('./database');

const app = express();

app.use(express.json());
// app.use(routes);

app.listen(3333);

const test = async () => {
  // Usado para inserir na tabela
  await model.User.create({
    name: 'Andre',
    email: 'Andre@puc.com',
    password: '123',
  });
  // Usado para select da tabela
  const usuario = await model.Usuario.findAll();
  console.log(usuario);
};
test();
