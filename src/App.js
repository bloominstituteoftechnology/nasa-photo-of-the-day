import React, { useState, useEffect } from 'react'
import TopBar from './top-bar/topbar'
import MainHeader from './main-header/main-header'
import FeaturedImg from './featured-img/featured-img'
import axios from 'axios'

function App() {
  const [image, setImage] = useState([])

  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=krgov0zYymJ4pGF1sVUvTq1L6sDrvLv5DIdd4AD3&date=2020-12-08')
      .then(res => setImage(res.data))
      .catch(error => console.log(error))
  }, [])
  console.log(image);
  return (
    <div className='app-container'>
      <TopBar />
      <MainHeader image={image} />
      <FeaturedImg image={image} />
    </div>
  );
}
export default App;