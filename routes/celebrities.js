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

// ### Route handler create celebrity form ###
celebrityRouter.get('/create', (req, res) => {
   res.render('celebrities/create');
});

// ### Route handler create celebrity submit ###
celebrityRouter.post('/', (req, res) => {
   const { name, occupation, catchPhrase } = req.body;
   const newCelebrity = new Celebrity({ name, occupation, catchPhrase });
   newCelebrity
      .save()
      .then(() => {
         res.redirect('/celebrities');
      })
      .catch(error => {
         res.render('celebrities/create');
      });
});

// ### Route handler celebrity details ###
celebrityRouter.get('/:id', (req, res, next) => {
   const celebrityId = req.params.id;
   Celebrity.findById(celebrityId)
      .then(celebrityDetails => {
         res.render('celebrities/show', celebrityDetails);
      })
      .catch(error => {
         next(error);
      });
});

// ### Route handler celebrity update form ###
celebrityRouter.get('/:id/edit', (req, res, next) => {
   const editId = req.params.id;
   Celebrity.findById(editId)
      .then(editCelebrity => {
         res.render('celebrities/edit', editCelebrity);
      })
      .catch(error => {
         next(error);
      });
});

// ### Route handler celebrity update submit ###
celebrityRouter.post('/:id', (req, res, next) => {
   const updateId = req.params.id;
   const { name, occupation, catchPhrase } = req.body;
   Celebrity.findByIdAndUpdate(updateId, { name, occupation, catchPhrase })
      .then(() => {
         res.redirect('/celebrities');
      })
      .catch(error => {
         next(error);
      });
});

// #######################################
// ## Iteration 5: Deleting Celebrities ##
// #######################################

// ### Route handler celebrity delete ###
celebrityRouter.post('/:id/delete', (req, res, next) => {
   const deleteId = req.params.id;
   Celebrity.findByIdAndRemove(deleteId)
      .then(() => {
         res.redirect('/celebrities');
      })
      .catch(error => {
         next(error);
      });
});

// ### Export celebrity router ###
module.exports = celebrityRouter;
