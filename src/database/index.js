const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');

const config = require('../config/database');
const sequelize = new Sequelize( 
    config.database,
    config.username,
    config.password,
    config
);

const db = {};

// Carrega arquivos de modelos das tabelas (Verifica todas as models)
const modelFiles = fs
  .readdirSync(path.resolve(__dirname, '..', 'app', 'models'))
  .filter(
    file =>
      file.indexOf('.') !== 0 && file.slice(-3) === '.js'
  )
  .map(file => path.join(__dirname, '..', 'app', 'models', file));

modelFiles.forEach(file => {
  const model = require(file)(sequelize, Sequelize.DataTypes);
  db[model.name] = model;
});

Object.keys(db).forEach(modelName => {
  if ('associate' in db[modelName]) db[modelName].associate(db);
});

db.db = sequelize;
db.Op = Sequelize.Op;

module.exports = db;
