// ### Require express ###
const express = require('express');

// ### Require movie model ###
const Movie = require('./../models/movie');

// ### Create movie router ###
const movieRouter = express.Router();

// ### Route handler all movies ###
movieRouter.get('/', (req, res, next) => {
   Movie.find()
      .then(movieList => {
         res.render('movies/index', { movieList });
      })
      .catch(error => {
         next(error);
      });
});

// ### Export movie router ###
module.exports = movieRouter;
