import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./Home";
import About from "./about";
import NavBar from "./NavBar";
import Footer from './footer';
import Consult from './BookConsult';
import Privacy from "./privacy";



 function App() {

   
  return (
  <React.Fragment>
   <BrowserRouter>  
    <div className='App'>
    <NavBar/> 
    <Routes>
      <Route exact path="/" element={<Home/>}/> 
      <Route path="/about" element={<About/>}/> 
      <Route path="/BookConsult" element={<Consult/>}/> 
      <Route path="/privacy" element={<Privacy/>}/> 
      
      </Routes>
      </div>
  </BrowserRouter>  
  <Footer/>  
  </React.Fragment>     
 
    
  
 
  );
 
};



export default App;
