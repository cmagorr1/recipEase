require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const recipeRoutes = require('./routes/recipes');


//express app
const app = express();

//CORS configuration
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  // Additional headers can be set as needed
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});


// listen for requests
app.use(express.json());


app.get('/GroceryList', (req, res) => {
  // Your route handling logic
  res.send('Hello from the GroceryList route!');
});

// app.use((req, res, next)=>{
//   console.log(req.path, req.method, req.body);
//   next();
// });

app.use('/api/recipes', recipeRoutes);

//connect to DB
mongoose.connect('mongodb+srv://cmagorr1:Tdm691000@cluster0.1i0embu.mongodb.net/?retryWrites=true&w=majority')
  .then(()=>{
    app.listen(4000, ()=>{
      console.log('connected to db & listening on port 4000');
    });
  })
  .catch((error)=>{
    console.log(error);
  });

