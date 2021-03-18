import React, { useState, useEffect } from "react";
import "./App.css";
import axios from"axios"
import Photo from"./photo"

function App() {
  const [details, setDetails] = useState([])

  useEffect(()=> {
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=NBcGHZZgey82OChKxtEQgJ6UFP6ps8VeXWXKycec')
    .then(res => {
      setDetails(res.data)
      console.log(res.data.url)
    })
    .catch(error => {
      console.log(error)
    })
  }, [])
  return (
    <div className="App">
      <header> 
        <h1>{details.title}</h1>
      </header>
      <div className="imgPara">
        <Photo help={details}/>
      </div>
      
    </div>
  
  );
}

export default App;



//     .get(`https://api.nasa.gov/planetary/apod?api_key=uptwa3GqYp2nlUdtNa7h2UO3nmQT8pBdgxWiU0Me`)
//       .then(res => {
//         setDetails(res.data)
//       })
//       .catch( err => {
//         console.log(err);
//       })
//   }, [])
