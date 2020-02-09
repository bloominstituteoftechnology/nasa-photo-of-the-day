import React, { useState, useEffect } from "react";
import axios from 'axios';
import PhotoCard from './components/PhotoCard.js';
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    console.log('first render');
  
  axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2020-02-08")
  .then(res => {
    console.log(res.data);
    setData(res.data);
  });
}, []);
  return (
    <div className="App">
     <p>
       Read through the instructions.
     </p>
     {data
        ? <PhotoCard title={data.title} 
                url={data.url}
                explanation={data.explanation} />
     : <div>Loading</div>
      }
    </div>
  );
}
export default App;
