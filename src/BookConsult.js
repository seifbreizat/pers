import './App.css';
import axios from "react";
import { useState } from 'react';


const Consult = () =>{

    

    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [subject, setSubject] = useState('');
    const [text, setText] = useState('');

    const handleSubmit= async (e) => {
        e.preventDefault();

        try{


            await fetch('https://localhost:5000/send-email', {
                method:"POST",
                headers:{
                  "content-Type":"Application/json"
                },body:JSON.stringify({

                

                from,
                to,
                subject,
                text
                })
                
        });
        alert ('Email set successfully');
        } catch (error){

            console.error("Error sending email:",
                error);
                alert('Failed to send email', error);
        }
    };




    return(
        <>
      
       <div class="container">
                               <h2>            Contact Us             </h2>
        
        
        <form onSubmit={handleSubmit} action="../BookConsult.js">
      <label htmlFor="from">From:</label>
      <input type="text" id="from" name="from" value={from} onChange={(e)=> setFrom(e.target.value)}/>

      <label htmlFor="to">To:</label>
      <input type="to" id="to" name="to" value={to} onChange={(e)=> setTo(e.target.value)} placeholder="Recepient"/>

      <label htmlFor="subject">Subject:</label>
      <input type="text" name="subject" value={subject} onChange={(e)=> setSubject(e.target.value)}/>
         <label htmlFor="text"> Text:</label>
      <textarea id="text" name="text" value={text} onChange={(e)=> setText(e.target.value)} />

       <button  variant="primary" type="submit"> Send </button>
       </form>
        </div>
        </>

    );
}

export default Consult;
