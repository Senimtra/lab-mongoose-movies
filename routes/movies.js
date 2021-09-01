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

// ### Route handler movie details ###
movieRouter.get('/:id', (req, res, next) => {
   const movieId = req.params.id;
   Movie.findById(movieId)
      .then(movieDetails => {
         res.render('movies/show', movieDetails);
      })
      .catch(error => {
         next(error);
      });
});

// ### Export movie router ###
module.exports = movieRouter;
