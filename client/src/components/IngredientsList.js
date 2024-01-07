import React from 'react';
// import { useEffect, useState } from 'react';
import './app.css';
import Button from '@mui/material/Button';


const IngredientsList = ({ recipe }) => {
  // Extract relevant information from the recipe prop
  const { name, url, ingredients } = recipe;
    
  const removeRecipe = (e) => {
    console.log(e.target);
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
    <>
      {ingredients.map((ingredient, index) => {return (
        <>
          <tr key={index}>
            <td>{ingredient.value}</td>
            <td>{ingredient.quantity}</td>
            <td>{ingredient.unit}</td>
          </tr>
          {/* <li className="list-item" key={index}>{[ingredient.value, ' ---- Quantity: ', ingredient.quantity, ' ' , ingredient.unit]}</li> */}
        </>
      );})}
    </>
  );
};
  
  
export default IngredientsList;