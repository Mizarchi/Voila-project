const { Sequelize } = require('sequelize');

const database = "voila";
const username = "postgres";
const password = "passwd";
const host = "localhost";

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: 'postgre',
});

module.exports = {
  sequelize
}
//CREATE USER voila WITH ENCRYPTED PASSWORD 'v01l4p4ss';
//GRANT ALL PRIVILEGES ON DATABASE voila TO voila;