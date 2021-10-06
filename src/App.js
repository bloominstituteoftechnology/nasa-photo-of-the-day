
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
      <h2>{data.title}</h2>
        <h3>the Date of this great photo: {data.date}</h3>
       </div>
      <p> I put two pictures the url and hdurl
        {/* Read through the instructions in the README.md file to build your NASA */}
        {/* app! Have fun <span role="img" aria-label='go!'>🚀</span>! */}
      </p>
      <div className=" pic-div">
      <img src={data.url} alt='best' width="400" height="300"/>
      <br />
      <img src={data.hdurl} alt='best' width="400" height="300"/>

      </div>
      <h3 className='artis-name'>{data.copyright}</h3>
      <p className =' explanation-data'>{data.explanation}</p>

      </div>
    </div>
  );
}

export default App;
