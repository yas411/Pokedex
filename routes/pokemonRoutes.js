const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');

router.get('/', pokemonController.getAllPokemons); 
router.get('/pokemon/:id', pokemonController.getPokemon);
router.get('/adicionarPokemon', pokemonController.getAdicionarPokemons);
router.post('/adicionarPokemon', pokemonController.createPokemons);

module.exports = router;


