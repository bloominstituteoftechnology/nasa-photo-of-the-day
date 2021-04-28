import React, { useState, useEffect}from "react";
import axios from 'axios'
import Photo from './components/Photo'
import Title from './components/Title'
// import "./App.css";

function App() {

  const [data, setData] = useState('')

  const test = '&date=2012-03-14'

  useEffect( () => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY${test}`)
      .then(({data}) => {
        setData(data)
      })
      .catch(err => console.error(err))
  }, [])


  return (
    <div className="App">
      <Title data={data} />
      <Photo data={data} />
    </div>
  );
}

export default App;
