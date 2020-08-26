import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import NasaCard from './components/NasaCard'
// import NasaFun from './components/NasaFun'
import NasaButton from './components/NasaButton'


function App() {
  const [data, setData] = useState([])

useEffect(()=> {
  axios
  .get('https://api.nasa.gov/planetary/apod?api_key=bUKc9pVW7zXsCIqd7d7suplm8kTolEG3ZDBCheIg')
  .then((res)=> {
    setData(res.data)
    console.log(res.data)
  })
  .catch((err)=>{
    console.log(`Err: ${err}`)
  })

}, [])


  return (
    <div className="App">
      <img src={data.hdurl} alt=""/>
      <p>Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>
      </p>
      <NasaCard data = {data}/>
      <NasaButton version = {data.service_version}/>
    </div>
  );
}

export default App;
