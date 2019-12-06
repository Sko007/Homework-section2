const express = require("express")
const app = express()
const port = process.env.PORT || 4000
const Moviemodel = require("./Movie/model")
const movieRouter = require("./Movie/router")
const bodyParser = require("body-parser")
const bodyParse = bodyParser.json()


app.use(bodyParse)
app.use(movieRouter)




app.listen(port, () => console.log(`App is listen on port ${port}`))