const express = require('express');

const router = express.Router();

//const controllers = require('../controllers');
const ordemController = require('../controllers/ordemProducao');

router.get('/', (req, res) => {
  controllers.execute(req, res, ordemController.getOrdemProducao);
});
// get,post(criar),put(atualizar),delete
// index buscar todos
// store salvar dado novo
// update alterar dados
// delete deletar
router.get('/', ordemController.list);


router.store('/insereCadastro', (req, res) => {
  controllers.execute(req, res, ordemController.atualizaOrdemProducao);
});

module.exports = router;
