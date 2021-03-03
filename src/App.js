import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios'
function App() {
  const [imageOfToday, setImageOfToday] = useState([]);
  useEffect(() =>{

  axios.get (`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14`)
       .then(res =>(setImageOfToday(res.data.url)))
       .catch(err => console.log('error'))

  },[])






  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
