import React, { useEffect,useState }from "react";
import NasaCards from "./components/nasaCards"
import "./App.css";
import Axios from "axios"

function App() {
  const [nasaData,SetNasaData] = useState([])

useEffect(()=>{Axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
.then(resp => SetNasaData(resp.data))
.catch(err=>{console.log('error', err)})}
,[]);


  return (
    <div className="App">
      <NasaCards nasaData={nasaData}/>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      
    </div>
  );
}

export default App;
