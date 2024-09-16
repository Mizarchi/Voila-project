const { Sequelize } = require('sequelize');

const database = "voila";
const username = "root";
const password = "";
const host = "localhost";

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: 'mysql',
  dialectModule: require('mysql2'), // Especifica el módulo de dialecto
});

module.exports = {
  sequelize
}
//CREATE USER voila WITH ENCRYPTED PASSWORD 'v01l4p4ss';
//GRANT ALL PRIVILEGES ON DATABASE voila TO voila;