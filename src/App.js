import React, {useEffect, useState} from "react";
import "./App.css";
import axios from 'axios'
import Title from './Title'
import Media from './Media'
import Explanation from "./Explanation";

function App() {

  const [nasaData, setNasaData] = useState(null)
  
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=yHrcEEmqivYemLhaBk4hlo4s3H1JxlHQ1qEfEYsA&date=2012-03-14`)
    .then(res => {
      console.log(res.data)
      setNasaData(res.data)
    })
    .catch(err => console.log(err))
  }, [])


  return (
    <div className="App">
      <h1>Photo Of The Day!</h1>
        {<Title nasaData = {Title}/>}
        {<Media />}
        {<Explanation />}
    </div>
  );

}
 
export default App;
