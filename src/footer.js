import './App.css';



const Footer =()=> {

    return(
      <>
        <footer>
       
      <div>
        
      <p style={padding-right:20px;}>Seif @ {new Date().getFullYear()}.All Rights reserved</p>
    </div>
     <div>    
        <a href="privacy.js" style={padding-right:20px;}> Privacy </a>
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
