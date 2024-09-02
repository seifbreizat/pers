import './App.css';
import { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {axios} from 'react';
import NavBar from './NavBar';

const Consult = () =>{

    

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit= async (e) => {
        e.preventDefault();

        try{


            await axios.post('https://localhost:5000/send-email', {
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
        <>
       <div class="container">
                               <h2>            Contact Us             </h2>
        
        
        <Form>
      <Form.Label htmlFor="name">Name:</Form.Label>
      <input type="text" id="name" name="name" value={name} onChange={(e)=> setName(e.target.value)}/>

      <Form.Label htmlFor="email">Email:</Form.Label>
      <input type="email" id="email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Recepient"/>

      <Form.Label htmlFor="subject">Subject:</Form.Label>
      <input type="text" name="subject" value={subject} onChange={(e)=> setSubject(e.target.value)}/>
         <Form.Label htmlFor="message"> Message:</Form.Label>
      <textarea id="message" name="message" value={message} onChange={(e)=> setMessage(e.target.value)} />

       <Button  variant="primary" type="submit"> Send </Button>
       </Form>
        </div>
        </>

    );
}

export default Consult;