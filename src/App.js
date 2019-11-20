import React, { useEffect, useState} from "react";
import axios from "axios";
import Photo from "./components/Photo";
import Date from "./components/Date";

import "./App.css";

function App() {
  const [photo, setPhoto] = useState([]);
  const [date, setDate] = useState('2019-11-19');

  const didUpdate = () => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
      .then(response => {
        setPhoto(response.data);
        console.log(response);
      })
      .catch(error => console.log(error));
  };

  useEffect(didUpdate, [date]);

  return (
    <div className="App">
      <Date photo={photo} setDate={setDate}/>
      <h1>NASA Astronomy Photo of the Day</h1>
      <Photo photo={photo} />
    </div>
  );
}

export default App;
