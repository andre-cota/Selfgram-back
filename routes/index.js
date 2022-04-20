const express = require('express');

const routes = express.Router();

// routes.get('/',(req, res) =>{
//     return res.json({ hello: 'World' });
// })

router.use('/horario', require('./horario'));

module.exports = routes;
