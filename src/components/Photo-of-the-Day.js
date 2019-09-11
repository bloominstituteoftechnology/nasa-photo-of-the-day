import React, {useState, useEffect} from 'react';
import imgCard from './image-card';
import axios from 'axios';



export default function PhotoOfTheDay () {
    const [image, setImage] = useState([]);

    useEffect(() =>{
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
            .then(response =>{
                console.log("Nasa API data", response);
            })
            .catch(err =>{
                console.log(`Couldn't get the requested data!`, err);
            })
    }, []);
    
    return (
        <p>Something here!</p>
    )
}

//     return(
//         <div>
//             <p>Hello</p>
//         </div>
//         <div className="container">

//             <div className="displayed-photo">
//                 {image.map(item =>{
//                     return(
//                         <imgCard
//                         key={item.id}
//                         title={item.title}
//                         info={item.explanation}
//                         photographer={item.copyright}
//                       />
//                     )
//                 })}
//             </div>
//         </div>
//     );
// }



// import React, { useState, useEffect } from "react";
// import PetCard from "./PetCard";
// import axios from "axios";

// export default function PetGrid() {
//   const [pets, setPets] = useState([]);
//   const [breed, setBreed] = useState("mix");

//   useEffect(() => {
//     axios
//       .get(`https://dog.ceo/api/breed/${breed}/images/random/15`)
//       .then(response => {
//         const doggos = response.data.message;
//         console.log(doggos);
//         setPets(doggos);
//       })
//       .catch(error => {
//         console.log("Sorry no doggos", error);
//       });
//   }, [breed]);

//   return (
//     <div className="container">
//       <button onClick={() => setBreed("mastiff")}>Mastiff</button>
//       <button onClick={() => setBreed("labrador")}>Labrador</button>
//       <div className="entry">
//         {pets.map(image => {
//           return <PetCard key={image} breed={breed} imgUrl={image} />;
//         })}
//       </div>
//     </div>
//   );
// }
