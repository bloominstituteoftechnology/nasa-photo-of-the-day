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
  const testMode = false;
  const [photoData, setPhotoData] = useState();

  const today = new Date();
  const dd = ('0' + today.getDate()).slice(-2);
  const mm = ('0' + (today.getMonth() + 1)).slice(-2);
  const yyyy = today.getFullYear();
  const dateToday = yyyy + '-' + mm + '-' + dd;
  const [photoDate, setPhotoDate] = useState(dateToday);

  useEffect(() => {
    axios.get(testMode ? testPhotoApi : livePhotoApi + '&date=' + photoDate)
      .then(response => {
        setPhotoData(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, [testMode, photoDate]);

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
        <DateSelector photoDate={photoDate} setPhotoDate={setPhotoDate} />
      </div>
    );
  }

}

export default App;
