import React, { useState, useEffect } from "react";
import axios from 'axios'
import Header from './components/Header/header'
import Details from './components/Details/details'
// import Footer from './components/Footer/footer'

import "./App.css";

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=K0WoxlyKhHuS8X9jJ90PhQ16dFdsWZbiZ2VDuKMb')
      .then((response) => {
        console.log(response)
        setData(response.data)
      }).catch((error) => { console.log(error) })
  }, [])

  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀 🚀 🚀</span>!
      </p> */}
      <Details
        key={data.id}
        date={data.date}
        title={data.title}
        url={data.url}
      />
      <Header headerData={data} />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
