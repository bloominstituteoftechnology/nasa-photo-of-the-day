import React,{useState, useEffect} from "react";
import axios from 'axios'
import "./App.css";

import NasaPhoto from "./Components/NasaPhoto";


function App() {
  const [data, setData] = useState()
  useEffect(()=>{
axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  .then(res =>{
    console.log(res)
    setData(res.data);
})
  .catch(err => console.error(err));
  }, []);
  return (
    <div className="App">
      { data && <NasaPhoto Data={data}/>}

    </div>
  );
}

export default App;
// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY