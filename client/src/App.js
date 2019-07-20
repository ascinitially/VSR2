import React from 'react';
import './App.css';
import Deals from './Deals/deals';
import OfferForm from './OfferForm/offerForm';
import NavBar from './NavBar/index';
import Slideshow from './Slideshow/slideshow'
import {BrowserRouter} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter><NavBar /></BrowserRouter>
      <Slideshow />
      <Deals />
      <OfferForm />
    </div>
  );
}

export default App;
