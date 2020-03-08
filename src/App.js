import React, { useState, useEffect } from "react";
import Photo from './components/Photo';
import axios from 'axios';
import "./App.css";

function App() {
    const [data, setData] = useState([]);

   useEffect(() => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
         .then(response => {
            console.log(response.data);
            setData(response.data);
         })
         .catch(err => {
            console.log(`Error: ${err}`);
         })
   }, []);

   return (
      <div className="container">
               <Photo explanation={data.explanation} date={data.date} url={data.url}/>
      </div>
   );
}

export default App;