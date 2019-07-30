import React, {useEffect, useState} from "react";
import axios from 'axios';
import Title from './components/Title';
import Img from './components/Img';
import Info from './components/Info';
import NasaImg from './images/5081.png';
import Date from './components/Date';
import "./App.css";

function App() {

  const [APODImg, setAPODImg] = useState();
  const [APODTitle, setAPODTitle] = useState();
  const [APODInfo, setAPODInfo] = useState();
  const [APODDate, setAPODDate] = useState();

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then( res => {
        setAPODImg(res.data.url);
        setAPODTitle(res.data.title);
        setAPODInfo(res.data.explanation);
        setAPODDate(res.data.date)
      });
  }, []);

  return (
    <div className="App">
      <div className='header'>
        <img className='nasa-logo' src={NasaImg}></img>
        <Title title={APODTitle} />
        <img className='nasa-logo' src={NasaImg}></img>
      </div>
      <Img src={APODImg} />
      <Date date={APODDate} />
      <Info info={APODInfo}/>
    </div>
  );
}

export default App;
