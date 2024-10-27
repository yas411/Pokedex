const pokemons = [
    { id: 1, nome: 'Charmander', tipo: 'Fire' },
    { id: 2, nome: 'Bulbasaur', tipo: 'Grass/Poison' },
    { id: 3, nome: 'Pikachu', tipo: 'Electric' },
    { id: 4, nome: 'Squirtle', tipo: 'Water' },
];

const getPokemons = () => pokemons;
const getPokemonById = (id) => pokemons.find(p => p.id === parseInt(id));

const getAdicionarPokemon = () => pokemons;

const createPokemon = (nome, tipo) => {
    const newPokemon = {
        id: pokemons.length + 1,
        nome: nome,
        tipo: tipo
    };
    pokemons.push(newPokemon);
};

module.exports = {
    getPokemons,
    getPokemonById,
    getAdicionarPokemon,
    createPokemon
};

