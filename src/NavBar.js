import './App.css';
import {Link} from "react-router-dom";
import "./tree.svg";
const NavBar = () => {

    return (

       
        <nav>
             <img src="tree.svg" height={100hv} width={100hv} alt= "tree "/>
                <Link to="/"><h1>Home</h1></Link>
                <Link to="/about"><h1>About</h1></Link>
                <Link to="/BookConsult"><h1><span>  Book Consult </span> </h1></Link>

              
        </nav>

    );
    }

export default NavBar;
