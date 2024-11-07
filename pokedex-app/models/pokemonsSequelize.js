const { Sequelize, Datatypes, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const User = sequelize.define(
    'User',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tipo: {
            type: DataTypes.STRING,
            allowNull: false, 
        }
    }
);