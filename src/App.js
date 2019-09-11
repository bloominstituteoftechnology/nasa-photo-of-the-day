import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Header from './Header';
import Title from './Title';
import Photo from './Photo';
import Copyright from './Copyright';
import Description from './Description';
import DateSelector from './DateSelector';

function App() {

  const testPhotoApi = 'https://lambda-github-api-server.herokuapp.com/';
  const livePhotoApi = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';
  const testMode = true;
  const [photoData, setPhotoData] = useState();

  useEffect(() => {
    axios.get(testMode ? testPhotoApi : livePhotoApi)
      .then(response => {
        setPhotoData(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, [testMode]);

  if (!photoData) {
    return null;
  } else {
    return (
      <div className="App">
        <Header />
        <Title titleText={photoData.title} photoDate={photoData.date} />
        <Photo url={photoData.url} />
        <Copyright copyrightOwner={photoData.copyright}/>
        <Description descriptionText={photoData.explanation} />
        <DateSelector />
      </div>
    );
  }

}

export default App;
