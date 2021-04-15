
import React, { useState, useEffect } from "react";
import "./App.css";
import { API_CODE, BASE_URL, API_KEY  } from "./components/Url";
import axios from "axios";
import Url from "./components/Url"
import Details from "./components/Details"


function App() {
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    const fetchPhoto = () => {
      axios
      .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then((res) => {
          setPhoto(res.data); 
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchPhoto();
   
  }, [photo.id]);
  return (
    <div className="App">
  
     
    </div>
  );
}




export default App;
