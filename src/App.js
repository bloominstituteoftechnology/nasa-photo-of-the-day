import React, { useState, useEffect } from "react";
import ApodCard from './ApodCard';
import "./App.css";
import Axios from 'axios';


function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
      Axios.get('https://api.nasa.gov/planetary/apod?api_key=q00ToKMkG9FiKJwasa48xbdmXAzhfrkv0BobVPFQ')
      .then(response => {
          setData(response.data);
      })
      .catch( err => {
          console.log("Nothing to Display!", err);
      })
  }, []);
  
  return (
    <div className="App">
      <ApodCard data={data}/>
    </div>
  );
}

export default App;
