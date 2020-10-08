import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import PictureContainer from './components/MediaContainer/PictureContainer'

function App() {

  const [photoObject, setPhotoObject] = useState(null)


  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2020-03-05')
      .then(res => {
        console.log(res)
        const photoObject = res.data.url
        setPhotoObject(photoObject)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  

  return (
    <div className="App">
      <PictureContainer photoObject={photoObject} />
      {/* <PageTitle>
      <MediaContainer />
      </PageTitle>  */}
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
