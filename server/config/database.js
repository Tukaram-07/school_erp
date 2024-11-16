require('dotenv').config();

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('school_erp', 'root', 'Tuka@111', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
