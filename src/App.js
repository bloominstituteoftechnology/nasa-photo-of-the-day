import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Header from './Header';
import Title from './Title';
import Photo from './Photo';
import Copyright from './Copyright';
import Description from './Description';

function App() {

  const photoApi = 'https://lambda-github-api-server.herokuapp.com/';
  const [photoData, setPhotoData] = useState();

  useEffect(() => {
    axios.get(photoApi)
      .then(response => {
        setPhotoData(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

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
      </div>
    );
  }

}

export default App;
