const treinadores = [
    { id: 1, nome: 'Eu'}
];

const getTreinadores = () => treinadores;
const getTreinadorById = (id) => treinadores.find(p => p.id === parseInt(id));

const getAdicionarTreinador = () => treinadores;

const createTreinador = (nome) => {
    const newTreinador = {
        id: treinadores.length + 1,
        nome: nome,
    };
    treinadores.push(newTreinador);
};

module.exports = {
    getTreinadores,
    getTreinadorById,
    getAdicionarTreinador,
    createTreinador
};