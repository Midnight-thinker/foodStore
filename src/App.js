import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Checkout from './Components/Checkout';


function App() {
  return (
    <BrowserRouter>
    <div className='row md-3 lg-6'>
      <Navbar />
      <Routes>
      
      <Route exact path="/" element={ <Home /> } />
      <Route exact path="/checkout" element={ <Checkout /> } />
      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
