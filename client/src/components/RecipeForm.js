import React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import './app.css';

const RecipeForm = () => {
  const inputIngredients = [
    {
      type: 'text',
      value: '',
      quantity: 1
    }
  ];
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [ingredients, setIngredients] = useState(inputIngredients);
  const [error, setError] = useState(null);

  const addIngredient = () => {
    setIngredients(s => {
      console.log('addIngredient s:', s);
      
      setIngredients([...s]);

      return [
        ...s,
        {
          type: 'text',
          value: ''
        }
      ];
    });
  };

  const handleChange = e => {
    e.preventDefault();

    console.log('handleChange',e.target);
    const index = e.target.id;
    setIngredients(s => {
      const newArr = s.slice();
      newArr[index].value = e.target.value;

      return newArr;
    });
  };

  const handleQuantity = (e, index) => {
    e.preventDefault();
  
    console.log('handleQuantity', e.target);
    setIngredients((s) => {
      const newArr = s.slice();
      newArr[index].quantity = e.target.value;
  
      return newArr;
    });
  };

  const handleUnit = (e, index) => {
    e.preventDefault();
  
    console.log('handleUnit', e.target);
    setIngredients((s) => {
      const newArr = s.slice();
      newArr[index].unit = e.target.value;
  
      return newArr;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('handleSubmit', e.target);
    const recipe = {name, url, ingredients};

    const response = await fetch('http://localhost:4000/api/recipes', {
      method: 'POST',
      body: JSON.stringify(recipe),
      headers:{
        'Content-Type': 'application/json'
      }
    });
    const json = await response.json();

    if (!response.ok){
      setError(json.error);
      console.log(error);
    } else {
      setName('');
      setUrl('');
      setIngredients([]);
      setError(null);
      console.log('new recipe added!', json);
      window.location.reload()
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="recipeform">
        <label className="formLabel">
                Recipe Name:
          <input type="text" name="name" onChange={(e) => setName(e.target.value)} value={name} />
        </label>
        <label className="formLabel">
                Recipe URL:
          <input type="url" name="name" onChange={(e) => setUrl(e.target.value)} value={url}/>
        </label >
        <label className="ingredients-form">
                Ingredients:
          <div className='ingredients-units'>
            
            {ingredients.map((item, i) => {
              return (
                <>
                  <div className='ingredients-line'>
                    <input
                      className='ingredients-form-list'
                      key={i}
                      onChange={handleChange}
                      value={item.value}
                      id={i}
                      type={item.type}
                      size="30"
                    />
                    <input
                      className='ingredients-form-list'
                      key={i}
                      onChange={(e) => handleQuantity(e, i)}
                      value={item.quantity}
                      type='number'
                      size="10"
                    />
                    <select name="unit" id="unit" onChange={(e) => handleUnit(e, i)}>
                      <optgroup label="units">
                        <option value=""></option>
                        <option value="cups">cups</option>
                        <option value="tbsp">tbsp</option>
                        <option value="tsp">tsp</option>
                        <option value="gallons">gallons</option>
                        <option value="oz">oz</option>
                        <option value="grams">grams</option>
                        <option value="pounds">pounds</option>
                        <option value="units">units</option>
                      </optgroup>
                    </select>
                  </div>
                </>
              );
            })}
          </div>
          <Button className="formLabel" variant="contained" onClick={addIngredient}>Add ingredient</Button>
        </label>
        <Button className="formLabel" variant="contained" type="submit" value="Submit">Submit</Button>
      </form>
    </>
  );
};

export default RecipeForm;