
import React,{useState,useEffect} from "react";
import axios from "axios";
import styed from "styled-components"




 const Title = styed.h1`
 color: #fab700;
`;
const Image=styed.img`
border-radius: 5px;
width: 80%;
`;


function PhotoList(){
const [photo,setPhoto]= useState([])
useEffect(()=>{
axios
.get(
    "https://api.nasa.gov/planetary/apod?api_key=Ba7YRupoHytlDnPKT1SkgKOeoACy14aPx0Ks2iCs&date=2020-03-25"
).then(response=>{
    console.log(response)
    setPhoto(response.data)
})

},[])

    return (
        <div>
            <Title>{photo.title}</Title>
    <h3>{photo.date}</h3>
    <Image src={photo.hdurl}/>
    <h4 style ={{color:"#fab700", padding:"20px"}}>{photo.explanation}</h4>

        </div>
    )

}
export default PhotoList;



















// import React, { useEffect, useState } from "react";
// import Styled from "styled-components";

// import axios from "axios";

// const Img = Styled.img`
//     color: green;
//     border: 1px solid red;
//     border-radius: 10px;
//     width: 70%;
// `;

// function PhotoList() {
//   const [photo, setPhoto] = useState([]);

//   useEffect(() => {
//     axios
//       .get(
//         "https://api.nasa.gov/planetary/apod?api_key=Ba7YRupoHytlDnPKT1SkgKOeoACy14aPx0Ks2iCs&date=2020-03-25"
//       )
//       .then(response => {
//         console.log(response);

//         setPhoto(response.data);
//       });
//   }, []);
//   return (
//     <div className="card" style={{ backgroundColor: "red" }}>
//       <div className="title-style" style={{ backgroundColor: "green" }}>
//         <h1>{photo.title}</h1>
//       </div>
//       <p>{photo.date}</p>
//       <Img alt={photo.hdurl} src={photo.hdurl} />
//       <p>{photo.explanation}</p>
//     </div>
//   );
// }

// export default PhotoList;
