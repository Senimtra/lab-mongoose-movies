// ##########################################
// ## Iteration 2: Listing Our Celebrities ##
// ##########################################

// ### Require express ###
const express = require('express');

// ### Require celebrity model ###
const Celebrity = require('./../models/celebrity');

// ### Create celebrity router ###
const celebrityRouter = express.Router();

// ### Route handler all celebrities ###
celebrityRouter.get('/', (req, res, next) => {
   Celebrity.find()
      .then(celebrityList => {
         res.render('celebrities/index', { celebrityList });
      })
      .catch(error => {
         next(error);
      });
});

// ### Export celebrity router
module.exports = celebrityRouter;
