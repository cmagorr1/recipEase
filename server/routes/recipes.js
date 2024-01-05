const express = require('express');
const {createRecipe, 
  getRecipes, 
  getRecipe,
  deleteRecipe} = require('../controllers/recipeController');

const router = express.Router();


//get all recipes
router.get('/', getRecipes);

//get a single recipe
router.get('/:id', getRecipe);

//POST a new recipe
router.post('/', createRecipe);

//Delete a recipe
router.delete('/:id', deleteRecipe);

module.exports = router;