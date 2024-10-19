import './App.css';



const Footer =()=> {

    return(
      <>
        <footer>
       
      <div>
        
      <p>Seif @ {new Date().getFullYear()}.All Rights reserved</p>
    </div>
     <div>    
        <a href="privacy.js"> Privacy </a>
</div>
   <div>
     
            <img class="link-img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-facebook.png" height="2" width="2" alt="Facebook"/>
         
            <img class="link-img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-twitter.png" height="2" width="2" alt="Twitter"/>
          
            <img class="link-img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-instagram.png"  height="2" width="2" alt="instagram"/>
          
          
    
      </div>
      </footer>
      </>
    )
}

export default Footer; 
