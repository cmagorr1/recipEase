import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './app.css';

const Home = () => {
  return (
    <>
    <div className='header'>
              <Header />  
    </div>
    <Main />
    <Footer />
    </>
  );
};

export default Home;