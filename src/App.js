import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./Home";
import About from "./about";
import NavBar from "./NavBar";
import Footer from './footer';
import Consult from './BookConsult';
import Gallery from "./Gallery";



 function App() {

   
  return (
   <div>
  <React.Fragment>
   <BrowserRouter>  
    <div className='App'>
    <NavBar/> 
    <Routes>
      <Route exact path="/" element={<Home/>}/> 
      <Route path="/about" element={<About/>}/> 
        <Route path="/Gallery" element={<Gallery/>}/> 
      <Route path="/BookConsult" element={<Consult/>}/>
      </Routes>
      </div>
  </BrowserRouter>
  </React.Fragment>
  <Footer/>
  </div>
      
    
  );
 
};



export default App;
