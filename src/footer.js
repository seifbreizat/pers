import './App.css';


const Footer =()=> {

    return(
      <>
        <footer>
      <div class="contain-group">
      <p>Seif @ {new Date().getFullYear()}.All Rights reserved</p>         
   <div>
      <a href="#">
            <img class="link-img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-facebook.png"/>
          </a>
          <a href="#">
            <img class="link-img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-twitter.png"/>
          </a>
          <a href="#">
            <img class="link-img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-instegram.png"/>
          </a>
          
          </div>
    
      </div>
      </footer>
      </>
    )
}

export default Footer; 