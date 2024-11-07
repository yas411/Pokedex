const pokemonModel = require('../models/pokemonModel');

const getAllPokemons = (req, res) => {
    const pokemons = pokemonModel.getPokemons();
    res.render('index', { pokemons });
};

const getPokemon = (req, res) => {
    const pokemon = pokemonModel.getPokemonById(req.params.id);
    if (pokemon) {
        res.render('pokemon', { pokemon });
    } else {
        res.status(404).send('Pokémon não encontrado');
    }
};

const getAdicionarPokemons = (req, res) => {
    res.render('adicionarPokemon');
}

const createPokemons = (req, res) => {
    pokemonModel.createPokemon(req.body.nome, req.body.tipo);
    res.redirect('/');
}

module.exports = {
    getAllPokemons,
    getPokemon,
    getAdicionarPokemons,
    createPokemons
};

