const Sequelize = require('sequelize')
const DBCONFIG = require("./db.config.js");

function conSeq() {
  return new Sequelize(DBCONFIG.DB, DBCONFIG.USER, DBCONFIG.PASSWORD, {
    dialect: DBCONFIG.dialect,
    host: DBCONFIG.HOST,
  });
}

module.exports = conSeq