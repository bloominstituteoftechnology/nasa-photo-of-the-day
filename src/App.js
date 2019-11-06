import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import POTD from "./components/PicOfTheDay/POTD"

function App() {
  const [photoOfTheDay, setPhotoOfTheDay] = useState([])

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=4cXEcaQuRe0H2jVUHyBMwQOrScsgHBsrO33pMdvw")
    .then(response => {
      console.log(response.data)
      setPhotoOfTheDay(response.data)
    })
    .catch( error => {
      console.log("Photo data not coming through", error);
    })
  },[]);

  return (
    <div className="App">
      <POTD img={photoOfTheDay.url}/>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun!
      </p>
    </div>
  );
}

export default App;
