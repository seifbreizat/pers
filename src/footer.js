import './App.css';
import {Link} from "react-router-dom";

const Footer =()=> {

    return(
      <>
        <footer>
        <div>    <Link to="/privacy"><h1>Privacy</h1></Link>
</div>
      <div>
        
      <p>Seif @ {new Date().getFullYear()}.All Rights reserved</p>
    </div>
   <div>
     
            <img class="link-img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-facebook.png" alt="Facebook"/>
         
            <img class="link-img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-twitter.png" alt="Twitter"/>
          
            <img class="link-img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-instagram.png" alt="instagram"/>

          
          
    
      </div>
      </footer>
      </>
    )
}

export default Footer; 
