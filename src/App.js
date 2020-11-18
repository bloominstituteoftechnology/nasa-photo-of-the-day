import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";
import NasaCard from './NasaCard';

function App() {
const [spaceData, setSpaceData] = useState({});

useEffect(() => {
axios.get(`https://api.nasa.gov/planetary/apod?api_key=xW8tvx9T1fPT8yv72RGWnhqRzsemcqTAymQonuGb`)
.then(res => {
  console.log(res)
  setSpaceData(res.data)
})
.catch(err => console.log(err));
},[])
  return (
    <div className="App">
      <NasaCard spaceData={spaceData} />
    </div>
  );
}

export default App;
