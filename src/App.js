import React, {  useState, useEffect  } from "react";
import "./App.css";
import axios from 'axios'
import Title from './components/Title'
import Description from './components/Description'
import Image from './components/Image'

function App() {
  const [nasa, setNasa] = useState()
  const apiKey = ''
  const date = '2020-07-15' 

  useEffect(() => {
    axios
    .get(`https://api.nasa.gov/#apod?api_key=${apiKey}&date=${date}`)
    .then((result) => {
      console.log(result.date)
      setNasa(result.data)
    })
    .catch((err) => console.log(err))
  }, [])

  return (
    <div className="App">
      <Title date={nasa.date} title={nasa.title} />
      {/* <h1> {nasa && nasa.title} </h1> */}
      <h1> {nasa && nasa.date} </h1>
      <Image url={nasa.url} />
      {/* <img src={nasa && nasa.url} alt={'Nasa Visual of the Day'}/> */}
      <Description explanation={nasa.explanation} copy={nasa.copy} />
      {/* <p> {nasa && nasa.explanation} </p>
      <span> {nasa && nasa.copyright} </span> */}
    </div>
  );
}

export default App;
