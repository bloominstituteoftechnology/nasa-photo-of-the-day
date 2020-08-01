import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import NasaHeader from "./component/NasaHeader";
import NasaInfo from "./NasaInfo";

function App() {

  const [photo, setPhoto] = useState({})

  useEffect(() => {
    axios
    .get("https://api.nasa.gov/planetary/apod?api_key=KlcaosUJ0HlEb72piQHAMgUUmzGZgCgGHJony8un")
    .then(response => { console.log(response.data);
        setPhoto(response.data)})
    .catch(error => console.log(error))
}, []);

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <NasaHeader/>
      <NasaInfo
      title={photo.title}
      date={photo.date}
      explanation={photo.explanation}
      url={photo.url}
      copyright={photo.copyright}
      />
    </div>
  );
}
  
export default App;
