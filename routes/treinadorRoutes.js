const express = require('express');
const router = express.Router();
const treinadorController = require('../controllers/treinadorController');

router.get('/', treinadorController.getAllTreinadores); // Alterado para '/'
router.get('/:id', treinadorController.getTreinador); // Alterado para usar só ':id'
router.get('/cadastrarNovoTreinador', treinadorController.getAdicionarTreinadores);
router.post('/cadastrarNovoTreinador', treinadorController.createTreinadores);

module.exports = router;
