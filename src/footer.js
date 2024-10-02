import './App.css';


const Footer =()=> {

    return(
      <>
        <footer>
      <div>
      <p>Seif @ {new Date().getFullYear()}.All Rights reserved</p>
    </div>
   <div>
      <a href="#">
            <img class="link-img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-facebook.png" alt="instegram"/>
          </a>
          <a href="#">
            <img class="link-img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-twitter.png" alt="instegram"/>
          </a>
          <a href="#">
            <img class="link-img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-instegram.png" alt="instegram"/>
          </a>
          
          </div>
    
      </div>
      </footer>
      </>
    )
}

export default Footer; 
