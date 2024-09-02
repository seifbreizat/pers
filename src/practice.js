import "./App.css";
import { Link} from "react";
/*
export function Home(){

    return (
        <div>
        <nav>
               <Link to="/about"><h1>About Us</h1></Link>
                <Link to="/contact"> <h1>Contact Us</h1></Link>
            </nav>
            </div>

    );
    

}

export function About() {

    return(

        <div>
            <nav>
                <Link to="/"><h1>Home</h1></Link>
                <Link to="/about"><h1>About Us</h1></Link>
                <Link to="/contact"> <h1>Contact Us</h1></Link>
            </nav>
            <Outlet/>
            <h1>About Us</h1>
            </div>



    );
}

*/
export function History(){

    return(
        <div>
            <nav>
                <Link to="/"><h1>Home</h1></Link>
                <Link to="/about"><h1>About Us</h1></Link>
                <Link to="/contact"> <h1>Contact Us</h1></Link>
            </nav>
            <h1>Contact Us</h1>
            </div>

    );
}
 /*export function Footer(props){

    return( 
        <footer>

            <p>Copyrights preserved@{props.year}</p>
            </footer>


    );
}
   
*/
    /*function Things(props){
        
            return(
             
                <section>
                <h1>Things are as follow {props.Things.map((thing) => (
             <img height={40}
                width={20} 
                src="C:\Users\Magic Systems\Desktop\restaurant" 
                alt="This is ??? "/>
           
            ))}
            </h1>
        </section>
      
        );
    }

    const  Thinges = ["pin", "eraser","pincel"];

   const  thingsOfStationary = Thinges.map(
       (thinge, i) => ({
   
            id: i,
            name: thinge
        })
    
   );

 /**  const delay=(seconds) =>
 new Promise =((resolver )=>
    setTimeout(resolver, seconds *1000)
);

const countToSix = async () => {

    console.log("zero seconds");
    await delay(1);
    
    console.log("one seconds");
    await delay(2);
    
    console.log("two seconds");
    await delay(3);
    
    console.log("four seconds");
    await delay(4);
}
  countToSix();


/**function App(){

 return (
    <div>
        <StrictMode>
       <React.Fragment>
 <Home/>
 <About/>
 <History/>
 <Things Things={thingsOfStationary}/>
 <Footer year= {new Date().getFullYear()}/>
</React.Fragment>
 </StrictMode>
 </div>
 );

} 
ReactDOM.render(
    <App/>,
    document.getElementById("root")
);
*/
export default History;

//
 /**{props.elemnts.map((elemnt)=>{

    <li key={elemnt.id}>{elemnt.name}</li>
 })}

 const  Elements= ["first element", "second element", "third element"];
 
 const elementOfElements = Elements.map((element, id) => 
   ({
      
            id: i,
            property: element

       


 })
);*/