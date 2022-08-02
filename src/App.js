import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Route } from 'react-router-dom'
import Header from './Header'
import PhotoOfTheDay from './PhotoOfTheDay'
import Description from './Description'
import MarsRoverPhotos from './MarsRoverPhotos'
import GlobalNavBar from './GlobalNavBar'
import Home from './Home'
import { API_KEY } from './index'
import "./css/App.css";
import './css/Description.css'
import './css/Header.css'
import './css/Dropdown.css'
import './css/GlobalNavBar.css'
import './css/Home.css'


function App() {

  {/*=============================Nasa Phot of the day API and state============================================= */}
  const [data, setData] = useState([])
  const [desc, setDesc] = useState(null)
  const [date, setDate] = useState(data.date)


  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then(res =>
        setData(res.data))
      .catch(err =>
        console.log(err))

    return () => {
      console.log('cleanup')
    }
  }, [])

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`)
      .then(res =>
        setData(res.data))
      .catch(err =>
        console.log(err))

    return () => {
      console.log('cleanup')
    }
  }, [date], [])

  {/*=================================Mars data API and state===================================== */ }

  const [marsData, setMarsData] = useState([])
  const [img, setImg] = useState(1)
  const [marsDate, setMarsDate] = useState(null)


  useEffect(() => {
    axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/Curiosity/photos?earth_date=${date}&page=${img}&api_key=${API_KEY}`)
      .then(res => {
        return setMarsData(res.data.photos)
      })
      .catch(err => {
        console.log(err)
      })

    return () => {
      console.log('cleaned up YW')
    }
  }, [img, date])

  return (
    <div className="App">
      {/* ============================Global Nav Bar================================ */}
      <GlobalNavBar />
      {/*===============================Home Page======================================= */}
      <Route exact path='/'>
        <Home
          img={data.hdurl}
        />
      </Route>
      {/* ============================Photo of the Day================================ */}
      <Route path='/PhotoOfDay'>
        <Header
          title={data.title}
          setDate={setDate}
          date={data.date}
        />
        <div className='holdsImgAndDesc'>
          <PhotoOfTheDay
            hdurl={data.hdurl}
          />
          <Description
            explanation={data.explanation}
            desc={desc}
            setDesc={setDesc}
          />
        </div>
      </Route>
      {/* ========================Mars Rover Photo Selector============================== */}
      <Route path='/MarsPhotos'>
        <MarsRoverPhotos
          marsData={marsData}
          setMarsData={setMarsData}
          date={marsDate}
          setDate={setMarsDate}
          img={img}
          setImg={setImg}
        />
      </Route>
    </div>
  );
}

export default App;
