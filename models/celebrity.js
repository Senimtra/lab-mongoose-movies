// ######################################
// ## Iteration 1: The Celebrity Model ##
// ######################################

// ### Require mongoose module ###
const mongoose = require('mongoose');

// ### Create celebrity schema ###
const celebritySchema = new mongoose.Schema(
   {
      name: {
         type: String,
         minlength: 3,
         maxlength: 20,
         required: true
      },
      occupation: {
         type: String,
         maxlength: 20,
         default: 'unknown'
      },
      catchPhrase: {
         type: String,
         maxlength: 100,
         default: 'unknown'
      }
   }
);

// ### Create celebrity model ###
const Celebrity = mongoose.model('Celebrity', celebritySchema);

// ### Export celebrity model ###
module.exports = Celebrity;
