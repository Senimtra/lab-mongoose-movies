// ##################################
// ## Iteration 7: The Movie Model ##
// ##################################

// ### Require mongoose module ###
const mongoose = require('mongoose');

// ### Create movie schema ###
const movieSchema = new mongoose.Schema(
   {
      title: {
         type: String,
         minlength: 2,
         maxlength: 20,
         required: true
      },
      genre: {
         type: String,
         maxlength: 20,
         default: 'unknown'
      },
      plot: {
         type: String,
         maxlength: 255,
         default: 'unknown'
      }
   }
);

// ### Create movie model ###
const Movie = mongoose.model('Movie', movieSchema);

// ### Export movie model ###
module.exports = Movie;
