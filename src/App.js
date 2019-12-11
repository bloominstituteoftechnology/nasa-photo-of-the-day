import React, {useEffect, useState} from "react";
import axios from "axios";
import "./App.css";

function App() {
  
  const [photoOfTheDay, setPhotoOfTheDay] = useState("")

  useEffect( () => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=Q6RD3lJAhyj5FK5PBQDjbzBnfmHtEtIbEcrCVWjS")
    .then(res => {
      console.log(res.data)
      setPhotoOfTheDay(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  },[])
  
  return (
    <div className="App">
      <div className="photoHolder">
        <img src={photoOfTheDay.url} alt={photoOfTheDay.title} />
      </div>
    </div>
  );
}

export default App;
