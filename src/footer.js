import './App.css';
import Privacy from "privacy.js";

const Footer =()=> {

    return(
      <>
        <footer>
      <div>
      <p>Seif @ {new Date().getFullYear()}.All Rights reserved</p>
    <Link to="/privacy">Privacy</Link>
    </div>
   <div>
     
            <img class="link-img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-facebook.png" alt="instegram"/>
         
            <img class="link-img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-twitter.png" alt="instegram"/>
          
            <img class="link-img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-instegram.png" alt="instegram"/>

          
          
    
      </div>
      </footer>
      </>
    )
}

export default Footer; 
