const { Model, Datatypes } = require('sequelize');

class Pokemon extends Model {}

Pokemon.init({
    id: {
        type: Datatypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: Datatypes.STRING,
        allowNull: false,
    },
    tipo: {
        type: Datatypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Pokemon',
    tableName: 'pokemons', 
    timestamps: true,
});
module.exports = Pokemon;