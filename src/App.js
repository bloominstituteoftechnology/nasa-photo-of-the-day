import React, {useState, useEffect}from "react";
import axios from "axios";
import Photos from "./components/nasaPhoto";
import "./App.css";

function App() {
  const[photo, setPhoto] = useState([]);
  
  useEffect(() => {
    const fetchPhoto = () => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then((res) => {
        console.log(res.data)
        setPhoto(res.data)
      })
      .catch((err) => {
        debugger;
      })
    }
    fetchPhoto();
  }, [])

  return (
    <div className="App">
      
      <Photos info={photo}/>
    </div>
  );
}

export default App;
