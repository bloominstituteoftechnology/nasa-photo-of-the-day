import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Copyright from "./Copyright";


function App() {
  const [respData, setRespData] = useState({});

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=koSoeKoW8kDf1ksWBlA6PT9TphlGcMHOiF5Zubf9')
    .then(resp =>{
      setRespData(resp.data);
      
    })
    .catch(error =>{
      console.log(error)
    })
    
  }, [])

  return (
    <div className="App">
        <Copyright respData={respData}/>
    
    </div>
  );
}

export default App;
