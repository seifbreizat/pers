import './App.css';  
       
const Home=()=> {
      
  
  
    return(
        <>
        <div> 

        
            <p> {new Date().toLocaleString()} </p>
       
        </div>
        <div className="card white">
      <div className="card-header" class="title">
        
        <h3>Web Development</h3>
        <img src="illu.jpeg"  height={100} width={100} alt="IMF website first-page"/>
      </div>
      <div className="card-body">
        <p> Develop custom websites that are responsive</p>
      </div>
    </div>
   
    <div>
       

    <h1>"Life is to work where you are fit to embrace peace and calme and mental growth"</h1>

            <br>
            </br>
                                       <p style={ {textAlign:'center'} }>Seif Albreizat</p>
               </div>
<div class="text-main>
       <h2> <strong> Google Cloude Computing</strong> </h2>
       </div>

       <div>
             <p> Google cloud serves Application deployment and hosting with robust security procedures and scalable technology. Technology found on google cloud infrastructure include:
</p>
<ul>
      <li> Application deployment </li>
       <li> Application security</li>
    <li>   Application Infrastructure </li>
    <li>   Google Drive </li>
       </ul>
       </div>
        </>
    );
};



export default Home;
