 import React, {useState, useEffect} from "react";
 import Navbar from './components/Navbar.js'

 import axios from 'axios';
import "./App.css";

function App() {
  const defaultData = {title: '', explanation: '', url: '' }
  const [ data, setData ] = useState(defaultData)
useEffect(()=> {
  axios.get('https://api.nasa.gov/planetary/apod?api_key=odfiFzCoKkOrwsmXGGjpc6pAiegaEJa5pI1dGAA8')
  .then(response => {
    console.log(response.data);
    setData(response.data)
  })
  .catch(error => {
    console.log("Houston we have a problem")
  });
  
}, [])

  return (
    <div className="App">
      <Navbar />
      <br />
   <h1>Astronomy Photo Of The Day</h1>
      <br />
      <iframe width="600" height="400" src={data.url}></iframe>
      <h2>{data.title}</h2>
      <p><strong>Date: </strong>{data.date}</p>
      <p>{data.explanation}</p>
    </div>
  );
}

export default App;
