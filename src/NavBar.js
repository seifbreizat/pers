import './App.css';
import {Link} from "react-router-dom";
const NavBar = () => {

    return (

       
        <nav>
             <img src="tree.svg" height={100} width={100} alt= "tree "/>
                <Link to="/"><h1>Home</h1></Link>
                <Link to="/about"><h1>About</h1></Link>
                <Link to="/BookConsult"><h1><span>  Book Consult </span> </h1></Link>

              
        </nav>

    );
    }

export default NavBar;
