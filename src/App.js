import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios"
// import APOD from './APOD'

const API_KEY = 'DEMO_KEY'
const URL = 'https://api.nasa.gov/planetary/'



function App() {
  const [pics, setPic] = useState(null);


  useEffect(() => {
    const fetchAPOD = () => {
      axios
      .get(`${URL}/apod?api_key${API_KEY}`)
      .then(res => {
        setPic(res.data)
      })
      .catch(err => {
        console.log(`ERROR: ${err}`)
      })
    }
    fetchAPOD()
  }, [])


  return (
    <div className="App">
      
    </div>
  );
}

export default App;
