import React, { useState, useEffect } from "react";
import "./App.css";
import axios from"axios"
import Photo from"./photo"
import Para from"./para"
import Title from"./title"
import Footer from"./Footer"

function App() {
  const [details, setDetails] = useState([])

  useEffect(()=> {
    axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=uptwa3GqYp2nlUdtNa7h2UO3nmQT8pBdgxWiU0Me`)
      .then(res => {
        setDetails(res.data)
      })
      .catch( err => {
        console.log(err);
      })
  }, [])

  return (
    <div className="App">
      <header> 
        <Title data={details}/>
      </header>
      <div className="imgPara">
        <Photo help={details}/>
        <Para data={details}/>
      </div>
      <footer>
        <Footer data={details}/>
      </footer>
      
    </div>
  
  );
}

export default App;
