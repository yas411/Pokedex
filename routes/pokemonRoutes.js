const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');

console.log('pokemonController:', pokemonController);
console.log('getAllPokemons:', pokemonController.getAllPokemons);
console.log('getPokemon:', pokemonController.getPokemon);

router.get('/', pokemonController.getAllPokemons); 
router.get('/pokemon/:id', pokemonController.getPokemon);

module.exports = router;


