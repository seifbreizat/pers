function Things(props){

    return (
      <section>
       <img
          height={200}
          src="./restaurant.jpeg"
          alt="?"
        />
 

<ul>Things are as follow {props.Thinges.map((thinge) => (
<li key={thinge.id}>
{thinge.title}
</li>
))}  
</ul>
</section>

    );
  }


const  Thinges = ["pin", "eraser","pincel"];

const  thingsOfStationary = Thinges.map(
(thinge, i) => ({

id: i,
title: thinge
})

);