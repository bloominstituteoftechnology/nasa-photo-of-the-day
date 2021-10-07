
import React, { useState, useEffect } from 'react';
import "./App.css";
import axios from 'axios'
import {BASE_URL, API_KEY} from './constants';


function App() {
  const [data,setData] = useState([])

  useEffect(() => {
     axios.get('https://api.nasa.gov/planetary/apod?api_key=HTnoFGO9m7Zx8DCFlDoUUOpkDHqWsNDIuzU2vNka')
     .then(response => {
       const data = response.data;
       console.log(data);
       setData(data);

     }).catch(error => {
       console.log("ERROR ,can not display data, check data path ");
     })
  }, [])

  return (
    <div className="App">
      <div className ="container">
      <h1>Nasa Photo of the Day</h1>
      <div className=" date-first">
      <h2>Title: {data.title}</h2>
        <h3>The Date of this great Photo: {data.date}</h3>
       </div>
       <div className="ptags">
      <p className="first-p" type="text"> This is the Image from Data:URL </p>
      <p className="second-p" type="text"> This is the Image from Data:Hdurl</p>
      </div>
      <div className=" pic-div">
      <img src={data.url} alt='best' width="600" height="300"/>
      <br />
      <img src={data.hdurl} alt='best' width="600" height="300"/>
      </div >

      <h3 className='artis-name'>Artist Name: {data.copyright}</h3>
      <p className =' explanation-data'>{data.explanation}</p>

      </div>
    </div>
  );
}

export default App;
