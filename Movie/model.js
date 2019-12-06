const Sequelize = require("sequelize")
const db = require("../db");

const Movies = db.define(
    "Movies", {
  title: Sequelize.STRING,
  yearOfRealease: Sequelize.INTEGER,
  synopsis: Sequelize.STRING
});

module.exports= Movies
