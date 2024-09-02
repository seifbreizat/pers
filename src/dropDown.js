import './App.css';
import React from 'react';
import {useState} from 'react';


function Dropdown (){

    const [display, setDisplay] = useState(false);

 const  handleDisplay=()=>{
    setDisplay(!display);

 } 
           return(
            <>
           <div>
            <div onClick={handleDisplay}>
                Clik here for dropdown
            </div>
           {display &&(
            <div>
                <ul>
                <li>throw item one</li>
                <li>throw item two</li>
                <li>throw item three</li>
                </ul>
                </div>
            )}

            </div>          
            </>


  
      
    );
  };
  
  

export default Dropdown;