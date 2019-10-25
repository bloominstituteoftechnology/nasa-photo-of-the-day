// import React, {useState, useEffect} from "react"; 
// import axios from "axios";
// import NasaCard from "./NasaCard"

// export default function CardData(){
//     const [nasaData, setNasaData] = useState({});

// useEffect(() => {
//   axios
//     .get('https://api.nasa.gov/planetary/apod?api_key=9cnUud9XB7N1J7hZzGBaL2ft0rP1AA0DSg1CevXP')
//     .then(response => {
//          console.log(response.data);
//          setNasaData(response.data);
//     })
//     .catch(error => {
//         console.log("the data was not returned", error);
//     });
// }, []);

// console.log("image test" , nasaData.url)
// return(
//     <div class="Card">

//       {<NasaCard key = {nasaData.date} title = {nasaData.title} explanation ={nasaData.explanation} Img = {nasaData.hdurl}/> }

//     </div>
// );

// } 