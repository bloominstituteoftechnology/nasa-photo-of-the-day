import React, {useState, useEffect} from "react";
import axios from 'axios'
import { BASE_URL } from './constants/index'
import "./App.css";
import ReactPlayer from "react-player";
import Title from './components/Title'
import Date from './components/Date'
import Media from './components/Media'
import Paragraph from './components/Paragraph'


function App() {
  
  const [information, setInformation] = useState([])

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=ASmf086iX6gKngleyHkq56PJfQlYytcaXXf3YTAK`)
      .then(res => {
      console.log(res.data)
      setInformation(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  },[])

  
  return (
    <div className="App">
      <Title title={information.title}/>
      <Date date={information.date}/>
      {/* <img src={information.url} alt="space" /> */}
      <Media url={information.url}/>
      <Paragraph explanation={information.explanation}/>
    </div>
  );
}

export default App;
