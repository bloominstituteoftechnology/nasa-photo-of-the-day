import React, {useState, useEffect} from 'react';
import NasaCard from '../main_content.js/nasaImg'
import axios from 'axios';
import './main.css';


function Main(){

  const [img, setImg] = useState([]);
  const [date, setDate] = useState();

  useEffect(()=>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=dR6HJjbWWnsJNIcqpHqrHtw5uezXohakocqhIEPE')
    .then(res => {
      setImg([res.data])
    })
    .catch(error => {
      console.log("Sorry no photo", error);
    });
  }, []);
return (
  <div className='mainBodyContainer'>
  <h2 className='day'>Photo Of The Day</h2>
  <label htmlFor="start"> Date: </label>
  <input type="date" id='start' name='photo-start'
  min='1900-01-01' max='2020-03-03'
  />
  <div className='imgOfDay'>
  {img.map(info =>{
    return (
     <NasaCard date={info.date} explanation={info.explanation} hdurl={info.hdurl} />
    )
  })}
  </div>
  </div>
)
}

export default Main;