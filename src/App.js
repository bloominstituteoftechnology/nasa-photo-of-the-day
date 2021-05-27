import React, {useState,useEffect}from "react";
 import Info from "./Info"
import "./App.css";
const axios = require('axios');
function App() {
  const [item , setItem] = useState("")
  useEffect(()=>{
   axios.get('https://api.nasa.gov/planetary/apod?api_key=niD4avUKf4y1kNTQanryPfOb8fcRkRBdLhTs0n33&date=2021-03-14')
   .then(res=>{
     setItem(res.data)
   })
   .catch(err=>{
     console.log("I got something wrong ", err)
   })
  },[])
  return (
    <div className="App">
       <div>
          <h1>Nasa Picture of the day</h1>
       </div>
       <img src={item.url} alt={item.title}/>
       <Info item={item} />
    </div>
  );
}

export default App;
