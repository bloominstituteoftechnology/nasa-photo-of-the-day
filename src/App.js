import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./App.css";
import Card from './components/Card';

function App() {

const [data, setData] = useState([]);

useEffect(() => {
  const fetchData = () => {
  axios.get('https://api.nasa.gov/planetary/apod?api_key=LtbYC1cZ97Dm9BeUVxauVTdTqSlKwET4micWPNzT')
  .then(res => {
    console.log('res:', res.data)
    setData(res.data)
  })
  .catch(err => {
    console.error(err)
  })
}
  fetchData()
}, [])

  return (
    <div className="App">
      <Card data={data}/>
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
    </div>
  );
}

export default App;
