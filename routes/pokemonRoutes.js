const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');

console.log('pokemonController:', pokemonController); // Para verificar a exportação
console.log('getAllPokemons:', pokemonController.getAllPokemons); // Deve ser uma função
console.log('getPokemon:', pokemonController.getPokemon); // Deve ser uma função

router.get('/', pokemonController.getAllPokemons); // Esta linha pode causar o erro se undefined
router.get('/pokemon/:id', pokemonController.getPokemon); // O mesmo vale para esta linha

module.exports = router;


