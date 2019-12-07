const { Router } = require("express");
const movie = require("./model");

const router = new Router();

router.post("/movie", (req, res, next) =>
  movie
    .create(req.body)
    .then(result => {
      res.json(result);
    })
    .catch(error => res.status(500).json({ error }))
);

router.get("/movies", (req, res, next) => {


    const limit = req.query.limit || 5
    const offset = req.query.offset || 0

    movie.findAndCountAll({ limit, offset })
    .then(result => res.send({ events: result.rows, total: result.count }))
    .catch(error => next(error))
    

})
//   movie
//     .findAll()
//     .then(result => {
//       res.json(result);
//     })
//     .catch(error => res.status(500).json({ error }))






router.put("/movie/:id", (req, res, next) =>
  movie
    .findByPk(req.params.id)
    .then(event => event.update(req.body))
    .then(event => res.send(event))
    .catch(next)
);

router.delete("/movie/:id", (request, response, next) =>
  movie
    .destroy({ where: { id: request.params.id } })
    .then(number => response.send({ number }))
    .catch(next)
);

module.exports = router;
