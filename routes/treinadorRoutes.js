const express = require('express');
const router = express.Router();
const treinadorController = require('../controllers/treinadorController');

router.get('/', treinadorController.getAllTreinadores); 
router.get('/:id', treinadorController.getTreinador); 
router.get('/cadastrarNovoTreinador', treinadorController.getAdicionarTreinadores);
router.post('/cadastrarNovoTreinador', treinadorController.createTreinadores);


