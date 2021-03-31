import React, { useState, useEffect } from  'React';
import "./App.css";
import Gallery from './gallery'
import Header from './header'
import Details from './details'
import axios from 'axios'

function App() {
  const [data, setData] = useState([])


  useEffect(()=> {
    axios
    .get(`https://apod.nasa.gov/apod/image/2103/M87bhPolarized_Eht_3414.jpg`)
    .then(res => {
      setData(res.data)
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  })



  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <Header headerData={data}/>
      <Gallery imgData={data}/>
      <Details info={data}/>

    </div>
  );
}

export default App;
