// ### Require express ###
const express = require('express');

// ### Require movie model ###
const Movie = require('./../models/movie');

// ### Create movie router ###
const movieRouter = express.Router();

// ### Route handler create movie form ###
movieRouter.get('/create', (req, res) => {
   res.render('movies/create');
});

// ### Route handler create movie submit ###
movieRouter.post('/', (req, res) => {
   const { title, genre, plot } = req.body;
   const newMovie = new Movie({ title, genre, plot });
   newMovie
      .save()
      .then(() => {
         res.redirect('/movies');
      })
      .catch(error => {
         res.render('movies/create');
      });
});

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

// ### Route handler movie update form ###
movieRouter.get('/:id/edit', (req, res, next) => {
   const editId = req.params.id;
   Movie.findById(editId)
      .then(editMovie => {
         res.render('movies/edit', editMovie);
      })
      .catch(error => {
         next(error);
      });
});

// ### Route handler movie update submit ###
movieRouter.post('/:id', (req, res, next) => {
   const updateId = req.params.id;
   const { title, genre, plot } = req.body;
   Movie.findByIdAndUpdate(updateId, { title, genre, plot })
      .then(() => {
         res.redirect('/movies');
      })
      .catch(error => {
         next(error);
      });
});

// ###################################
// ## Iteration 11: Deleting Movies ##
// ###################################

// ### Route handler movie delete ###
movieRouter.post('/:id/delete', (req, res, next) => {
   const deleteId = req.params.id;
   Movie.findByIdAndRemove(deleteId)
      .then(() => {
         res.redirect('/movies');
      })
      .catch(error => {
         next(error);
      });
});

// ### Export movie router ###
module.exports = movieRouter;
