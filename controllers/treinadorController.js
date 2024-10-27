const treinadorModel = require('../models/treinadorModel');

const getAllTreinadores = (req, res) => {
    const treinadores = treinadorModel.getTreinadores();
    res.render('treinadores', { treinadores });
};

const getTreinador = (req, res) => {
    const treinador = treinadorModel.getTreinadorById(req.params.id);
    if (treinador) {
        res.render('treinador', { treinador });
    } else {
        res.status(404).send('Treinador não encontrado');
    }
};

const getAdicionarTreinadores = (req, res) => {
    res.render('adicionarTreinador');
}

const createTreinadores = (req, res) => {
    treinadorModel.createTreinador(req.body.nome);
    res.redirect('treinadores');
}

module.exports = {
    getTreinador, 
    getAllTreinadores,
    getAdicionarTreinadores,
    createTreinadores
};
