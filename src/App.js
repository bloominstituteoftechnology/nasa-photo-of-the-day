import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'

function App() {
  const [data, setData] = useState({})
  
  useEffect(()=>{
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res=>{
      console.log(res)
      setData(res.data)
      
    })
    .catch(err =>{
      console.log(err)
    })
  },[])
  return (
    <div className="App">
      <h1>
        Nasa OPAD
      </h1>
      <h4>
        Made by: Steve Rivera
      </h4>
      <div className="title">{data.title}
        <div className="data">{data.date}
          <div className="hdurl">{data.url}</div>
        </div>
      </div>


      </div>
      
   
  );
}

export default App;
