import React from 'react';
// import { useEffect, useState } from 'react';
import './app.css';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
// import ingredientScrape from '../../ingredients-scrape/ingredients-scrape';




const RecipeCard = ({ recipe }) => {
  // Extract relevant information from the recipe prop
  const { name, url, ingredients } = recipe;
  
  const removeRecipe = async (e) => {
    console.log('e:',e);
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:4000/api/recipes/${recipe._id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const json = await response.json();
        console.error('Error removing recipe:', json.error);
        // Handle error, display a message, or take appropriate action
      } else {
        // Recipe successfully removed
        console.log('Recipe removed successfully');
        window.location.reload()
        // You might want to update the state in your parent component to reflect the changes
      }
    } catch (error) {
      console.error('Error removing recipe:', error.message);
      // Handle error, display a message, or take appropriate action
    }
  };

  // const removeRecipe = async (e) => {
  //   e.preventDefault();

  //   const response = await fetch('http://localhost:4000/api/recipes', {
  //     method: 'DELETE',
  //     body: JSON.stringify(recipe),
  //     headers:{
  //       'Content-Type': 'application/json'
  //     }
  //   });
  //   const json = await response.json();

  //   if (!response.ok){
  //     setError(json.error);
  //     console.log(error);
  //   } else {
  //     setName('');
  //     setUrl('');
  //     setIngredients([]);
  //     setError(null);
  //     console.log('new recipe added!', json);
  //   }
  // }
  
  return (
    <div className="recipe-card">
      <h2>{name}</h2>
      <div className="recipe-url">
        <a href={url}>Recipe Link</a>
      </div>
      <div className="ingredients">
        <h3>Ingredients:</h3>
        <ul>
          {ingredients.map((ingredient, index) => {return (
            <li className="list-item" key={index}>{[ingredient.value, ' : ' , ingredient.quantity, ' ' ,ingredient.unit]}</li>
          );})}
        </ul>
      </div>
      <Button variant="contained" type="submit" value="Submit" onClick={removeRecipe}>Remove</Button>
      {/* <Button variant="contained" onClick={(url) => ingredientScrape(url)}>Ingredients Populate</Button> */}
    </div>
  );
};


export default RecipeCard;
