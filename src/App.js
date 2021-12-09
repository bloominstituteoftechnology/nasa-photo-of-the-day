import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";



function App() {
  const [data, setData] = useState([]);
  
  useEffect(()=>{
    axios.get('https://api.nasa.gov/#apod')
    .then(resp => {
      console.log(resp.data)
      setData(resp.data);
    })
    .catch(error => {
      console.log(error);
    })

  }, [])

  return (
    <div className="App">
      <p>
        {data}
      </p>
    </div>
  );
}

export default App;
