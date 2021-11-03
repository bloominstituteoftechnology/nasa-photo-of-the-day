import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
//Read through the instructions in the README.md file to build your NASA
//app! Have fun



function App(props) {
  const [nasa, setNasa] = useState([]);
  axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  .then(resp => {
    //console.log(resp);
    setNasa(resp.data);
  })
  .catch(err => {
    console.error(err);
  })
  return (
    <div className="App">
      <img url = {nasa.url} alt=''/>
      <p>
         <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
