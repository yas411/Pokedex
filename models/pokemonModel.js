const pokemons = [
    { id: 1, name: 'Charmander', type: 'Fire' },
    { id: 2, name: 'Bulbasaur', type: 'Grass/Poison' },
    { id: 3, name: 'Pikachu', type: 'Electric' },
    { id: 4, name: 'Squirtle', type: 'Water' },
];

const getPokemons = () => pokemons;
const getPokemonById = (id) => pokemons.find(p => p.id === parseInt(id));

const createPokemon = (nome, tipo) => {
    const newId = pokemons.length + 1;
    pokemons.push({ id: newId, name: nome, type: tipo });
};

module.exports = {
    getPokemons,
    getPokemonById,
    createPokemon
};

