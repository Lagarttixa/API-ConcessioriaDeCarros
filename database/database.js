const Sequelize = require('sequelize');

const connection = new Sequelize(
    'concessionaria',
    'root',
    'root',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

module.exports = connection;