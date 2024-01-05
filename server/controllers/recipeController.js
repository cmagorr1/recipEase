const Recipe = require('../models/recipeModel');
const mongoose = require('mongoose')

//get all recipes
const getRecipes = async (req, res) => {
  const recipes = await Recipe.find({}).sort({createdAt: -1});

  res.status(200).json(recipes);
};

//get a single recipe
const getRecipe = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: 'no such recipe'});
  }

  const recipe = await Recipe.findById(id);
  
  if (!recipe){
    return res.status(404).json({error: 'no such recipe'});
  }
  res.status(200).json(recipe);
};

//create a new recipe
const createRecipe =  async (req, res) => {
  const { name, url, ingredients } = req.body;
  
  try{
    const recipe = await Recipe.create({name,url,ingredients});
    res.status(200).json(recipe);
  } catch(error){
    res.status(400).json({error: error.message});
  }
};


//Delete a recipe
const deleteRecipe = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: 'no such recipe'});
  }

  const recipe = await Recipe.findByIdAndDelete(id);
    
  if (!recipe){
    return res.status(404).json({error: 'no such recipe'});
  }
  res.status(200).json({mssg: 'recipe deleted'});
};

module.exports = {
  createRecipe,
  getRecipes,
  getRecipe,
  deleteRecipe
};