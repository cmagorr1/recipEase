const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ingredientSchema = new mongoose.Schema({
  value: {
    type: String,
  },
  type: {
    type: String,
  },
});

const recipeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String
  },
  ingredients: {
    type: [ingredientSchema]
  }

}, {timestamps: true});


module.exports = mongoose.model('Recipe', recipeSchema);