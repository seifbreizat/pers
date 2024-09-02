import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./Home";
import About from "./about";
import NavBar from "./NavBar";
import Footer from './footer';
import Consult from './BookConsult';



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
      
      </Routes>
      </div>
  </BrowserRouter>  
  <Footer/>  
  </React.Fragment>     
 
    
  
 
  );
 
};



export default App;
