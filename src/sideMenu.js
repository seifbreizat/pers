import './App.css';
import React from 'react';
import {useState} from 'react';


function Sidemenu (){

    const [display, setDisplay] = useState(false);

 const  handleDisplay=()=>{
    setDisplay(!display);

 } 
           return(
            <>
           <div>
            <div onClick={handleDisplay}>
                Menu
            </div>
           {display &&(
            <div>
                <ul>
                <li>About Us</li>
                <li>Contact us</li>
                <li>media</li>
                </ul>
                </div>
            )}

            </div>          
            </>


  
      
    );
  };
  
  

export default Sidemenu;

