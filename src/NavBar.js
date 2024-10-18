import './App.css';
import {Link} from "react-router-dom";
import treeLogo from "./tree.jpg";
const NavBar = () => {

    return (

       
        <nav>
          <img src={treeLogo} className="logo react" alt="React logo" />

                <Link to="/"><h1>Home</h1></Link>
                <Link to="/about"><h1>About</h1></Link>
                <Link to="/BookConsult"><h1> Contact </h1></Link>
        <Link to="/Gallery"><h1>Gallery</h1></Link>

              
        </nav>

    );
    }

export default NavBar;
