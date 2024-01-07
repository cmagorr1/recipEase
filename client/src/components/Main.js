import React from 'react';
import { useEffect, useState } from 'react';
import RecipeForm from './RecipeForm';
import RecipeCard from './RecipeCard'
import './app.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'

const Main = () => {

  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      console.log('before fetching data------------------')
      const response = await fetch('http://localhost:4000/api/recipes');
      const json = await response.json();

      

      if (response.ok) {
        console.log('response is ok------------------')
        setRecipes(json);
      } 
    };

    fetchRecipes();
  }, []);

  return (
    <main className='main'>
      <RecipeForm />
      <div className='recipes'>
        <Link to={'/GroceryList'}>
          <Button variant="contained" className="grocery-button" >Create Grocery List!</Button>
        </Link>
        {recipes && recipes.map((recipe) => (
          <RecipeCard key={recipe._id} recipe={recipe} />
        ))}
      </div>
    </main>
  );
};

export default Main;