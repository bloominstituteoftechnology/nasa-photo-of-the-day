import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [apiData, setApiData] = useState([])



  useEffect(() => {
   axios.get(`https://api.nasa.gov/planetary/apod?api_key=7YnANaDwNEdTS4uqUbwoDkDAcAHvtMIxYmL33f68`)
   .then(resp => {
     console.log(resp.data);
     setApiData(resp.data);
   }).catch(err => {
     console.error(err)
   })
  }, [])


  





  return (
    <div className="App">
      <h1>{apiData.title}</h1>
      <h2> {apiData.copyright}</h2>
      <p>
      <img src={`${apiData.url}`} alt="image of nasa" />
      </p>
      <h3>
      {apiData.date}
      </h3>
      <p>
        {apiData.explanation}
      </p>
      
    </div>
  );
}

export default App;
