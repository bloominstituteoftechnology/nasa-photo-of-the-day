import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import Info from './Info.js'
import Picture from './Picture.js'




function App() {

const [info, setInfo] = useState([])


  useEffect(() => {
   const getAllData = () => { 
    axios.get('https://api.nasa.gov/planetary/apod?api_key=4gBi5apMtp8xXvdW1mAEJNduRmOuDrhXWdMBfzez')
    .then(res => {
      setInfo(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }
  getAllData()
}, [])


  return (
    <div className="App">
      <h1>{info.title}</h1>
  <Picture source={info.url}/>
    <Info copywrite={info.copyright} date={info.date} explanation={info.explanation}/> 
    </div>
  );
}

export default App;
