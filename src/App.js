import React, { useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import NasaPhoto from "./Components/NasaPhoto";


function App() {
  const [data, setData] = useState();
  
  useEffect(() => {
    console.log("use-effect");
    axios.get('https://api.nasa.gov/planetary/apod?api_key=RvdnAQWTacbtu2fV51dufeaYSGWpDFaaw6E8jAgK')
    .then(res => {
      
      setData(res.data);
    })
    .catch(err => {
      console.error(err)
    });
}, [])

 return (
    <div className="App">
     { data && <NasaPhoto photo={data} /> }
    </div>
  );
}

export default App;

