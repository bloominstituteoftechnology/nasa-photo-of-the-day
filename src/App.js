import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios';
import Data from "./nasaComponents/Data"
import Picture from "./nasaComponents/Picture"



function App() {
  const [info, setInfo] = useState({})

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=XSOKS0NvU6SHjsuq9Zwrf8JhwWfFU7xqx5dRMQfs')
      .then(response => {
        console.log("success",response)
        console.log(response.data)
        setInfo(response.data);
        console.log(setInfo);
      })
      .catch(error => console.log("failure", error))
  }, [])

  console.log(setInfo)
    
  return (
    <div className="App">
      <div className="Body">
          <Data data={setInfo}/>
          <Picture data={setInfo}/>
           <span role="img" aria-label='go!'>🚀</span>!
      </div>
    </div>
  );
}

export default App;
