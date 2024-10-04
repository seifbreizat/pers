import './App.css';
import { useState } from 'react';


const Consult = () =>{

    

    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [Message, setMessage] = useState('');

    const handleSubmit= async (e) => {
        e.preventDefault();

        try{


            await fetch('https://localhost:5000/send-email', {
                method:"POST",
                headers:{
                  "content-Type":"Application/json"
                },body:JSON.stringify({

                

                Name,
                Email,
                subject,
                Message
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
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={name} onChange={(e)=> setFrom(e.target.value)}/>

      <label htmlFor="to">To:</label>
      <input type="to" id="name" name="name" value={name} onChange={(e)=> setTo(e.target.value)} placeholder="Recepient"/>

      <label htmlFor="subject">Subject:</label>
      <input type="text" name="subject" value={subject} onChange={(e)=> setSubject(e.target.value)}/>
         <label htmlFor="message"> Message:</label>
      <textarea id="text" name="message" value={message} onChange={(e)=> setText(e.target.value)} />

       <button  variant="primary" type="submit"> Send </button>
       </form>
        </div>
        </>

    );
}

export default Consult;
