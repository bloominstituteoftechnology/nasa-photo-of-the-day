import React, {useState,useEffect} from "react";
import axios from "axios"
import Photo from "./components/Photo"
import Header from "./components/Header"
import "./App.css";



function App() {
  const [nasaData, setNasaData] = useState()
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=KegHQiuuqdamaU7M8nYwsOF0gVINoftWAqEaf389')
      .then(res => {
        setNasaData(res.data)
      })
      .catch(err => console.error(err))
  }, [])
  return (
    <div className="App">
        {nasaData && <Header header={nasaData}/>}
        {nasaData && <Photo photo={nasaData} />}
    </div>
  );
}

export default App;
