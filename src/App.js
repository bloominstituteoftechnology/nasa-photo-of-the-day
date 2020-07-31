import React, { useState, useEffect } from "react"
import "./App.css";
import axios from "axios"
import NasaPhoto from "./NasaPhoto"
import NasaHeader from "./component/NasaHeader";

function App() {

  const [date, setDate] = useState([])
  const [photo, setPhoto] = useState([])

  useEffect(() => {
    axios
    .get("https://api.nasa.gov/planetary/apod?start_date=2020-07-30&end_date=2020-07-30&api_key=KlcaosUJ0HlEb72piQHAMgUUmzGZgCgGHJony8un")
    .then((response) => {
        console.log(response);
        setPhoto(response.data);
    })
    .catch((error => console.log(error)));
}, []);
console.log(photo);


  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <NasaHeader/>
      <NasaPhoto/>
    </div>
  );
};
  
export default App;
