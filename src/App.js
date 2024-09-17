import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import Photo from './photo';

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?count=3&api_key=o5nP3CqAEStW8O13S9a8TdN9jWmNaaQFhiks7Wbi`)
      .then(res => {
        console.log("first render", res);
        setPhotos(res.data);
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
      <h1>Nasa Astronomy Photos</h1>
      {photos.map(photo => {  
        return <Photo photoInfo={photo} key={photo.date}  />
      })}
    </div>
  );
}

export default App;
