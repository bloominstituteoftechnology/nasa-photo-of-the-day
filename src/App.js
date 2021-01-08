import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import Photo from "./Photo.js"
import Info from './Info.js'

function App() {
  const[error, setError] = useState('')
  const[nasa, setNasa] = useState([])
  const[isFetchingData, setisFetchingData]= useState(false)

  const getData = () => {
    setisFetchingData(true)

    axios.
      get('https://api.nasa.gov/#apod')
      .then(res => {
        setNasa(res.data)
        setisFetchingData(false)
         })

      .catch(error => {
      console.log(`error: ${error}`)
      setError(error)
      setisFetchingData(false)
    } )
  }
  

  return (
    <div className="App">
     
      <Info infoD={nasa} errorD= {'error'}/>
      <p>
        API from Americas space station <span role="img" aria-label='go!'>🚀</span>!
      </p>
        <Photo getDataBtn={getData} isFetchingData= {true}/>
       
      </div>
  );
}

export default App;
