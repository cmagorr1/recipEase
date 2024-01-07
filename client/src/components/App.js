// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Home from './Home';
import './app.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, Route, Routes } from 'react-router-dom'
import GroceryList from '../pages/GroceryList';


// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#1976D2', // Change the primary color
//     },
//     secondary: {
//       main: '#F44336', // Change the secondary color
//     },
//   },
//   typography: {
//     fontFamily: 'Roboto, sans-serif', // Change the default font family
//     fontSize: 16, // Change the base font size
//   },
//   spacing: 8, // Change the base spacing unit
// });


class App extends Component {

  render(){
    return (
      <div className='app'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/GroceryList' element={<GroceryList />} />
        </Routes>
      </div>
    );
  }
}

export default App;