const Sequelize = require("sequelize")
const databaseUrl = process.env.DATABASE || 'postgres://postgres:secret@localhost:5432/postgres'
const db = new Sequelize(databaseUrl)

const Movie = db.define("movie", {title:Sequelize.STRING})

db
  .sync() 
  .then(() => Movie.create({title: "EarthSong"}))
  .then(() => Movie.findAll())
  .then((result) => {console.log("All messages", result.map(ele =>  ele.dataValues))})
  .catch(console.error)



module.exports = db



// Question
//      1.I dont Understand why the data will not get lost? 
//                  and even get added on top of each other when restarting the server.