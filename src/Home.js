import { useState } from 'react';
import './App.css';
import { Link} from 'react-router-dom';
import About from "./about";
import Consult from './BookConsult';




       
       

function Home() {
      
  
  
    return(
        <>
        <div> 

        
            <p> {new Date().toLocaleString()} </p>
       
        </div>
        <div className="card white">
      <div className="card-header" class="title">
        
        <h2>Web Development</h2>
        <img src="illu.jpeg"  height={100} width={100} alt="IMF website first-page"/>
      </div>
      <div className="card-body">
        <p>Card content goes here...</p>
      </div>
    </div>
   
    <div>

    <h1>"Life is to work where you are fit to embrace peace and calme and mental growth"</h1>

            <br>
            </br>
                                       <p style={ {textAlign:'center'} }>Seif Albreizat</p>
               </div>
               
        </>
    );
}



export default Home;