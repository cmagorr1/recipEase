import React from 'react';
import '../components/App';
import { useState, useEffect } from 'react';
import IngredientsList from '../components/IngredientsList';

const GroceryList = () => {

  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      console.log('before fetching data------------------');
      const response = await fetch('http://localhost:4000/api/recipes');
      const json = await response.json();
  
        
  
      if (response.ok) {
        console.log('response is ok------------------');
        setRecipes(json);
      } 
    };
  
    fetchRecipes();
  }, []);


  return (
    <p>
      <h3>
        Grocery List:
      </h3>
      <div className="ingredients">
        <table className="ingredient-table" >
          <tr>
            <th className='table-header'>Ingredient</th>
            <th className='table-header'>Quantity</th>
            <th className='table-header'>Measurement</th>
          </tr>
          {recipes && recipes.map((recipe) => (
            <IngredientsList key={recipe._id} recipe={recipe} />
          ))}
        </table>
      </div>
    </p>
  );
};

export default GroceryList;