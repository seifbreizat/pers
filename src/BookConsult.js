import './App.css';
import { useState } from 'react';


const Consult = () =>{

    

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit= async (e) => {
        e.preventDefault();

        try{


            await fetch('https://localhost:5000/send-email', {
                method:"POST",
                headers:{
                  "content-Type":"Application/json"
                },body:JSON.stringify({

                

                name,
                email,
                subject,
                message
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
    
      
       <div class="container">
                               <h2>            Contact Us             </h2>
        
        
        <form onSubmit={handleSubmit} action="BookConsult.js" method="POST">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={name} onChange={(e)=> setFrom(e.target.value)}/>

      <label htmlFor="to">To:</label>
      <input type="to" id="to" name="to" value={to} onChange={(e)=> setTo(e.target.value)} placeholder="Recepient"/>

      <label htmlFor="subject">Subject:</label>
      <input type="text" name="subject" value={subject} onChange={(e)=> setSubject(e.target.value)}/>
         <label htmlFor="message"> Message:</label>
      <textarea id="message" name="message" value={message} onChange={(e)=> setMessage(e.target.value)} />

       <button  variant="primary" type="submit"> Send </button>
       </form>
        </div>
        

    );
}

export default Consult;
