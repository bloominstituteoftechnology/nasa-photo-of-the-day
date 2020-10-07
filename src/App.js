import React, {useState, useEffect} from "react";
import axios from 'axios'
import Search from "./Components/Search"
import Title from "./Components/Title"
import Explaination from './Components/Explaination'
import Image from './Components/Image'
import "./App.css";

function App() {
  const [info, setInfo] = useState([])
  const [photo, setPhoto] = useState('')
  const BASE_URL = 'https://api.nasa.gov/planetary/apod?api_key=pUxe64fv7f4vGRG91qDFNbEOH5m1OyVGUZfILdXR'

  useEffect(() => {
    axios.get(`${BASE_URL}
    `).then(res => {
      setPhoto(res.data.url)
      setInfo(res.data)
    }).catch(err => {
      console.log('Error: '+err)
    })
  }, [])


  



  return (
    <div className="App">
      <Title title = {info.title} />
      {/* <Search/>
      <Explaination/>
      <Image/> */}
    </div>
  );
}

export default App;
