import React, {useState, useEffect} from "react";
import "../App.css";
import axios from "axios";
import Title from "./Title"
import Image from "./Image"
import Explanation from "./Explanation"


function App() {

  const [image, setImage] = useState('')
  


  axios.get('https://api.nasa.gov/planetary/apod?api_key=JPdEuTaesq36aLpUHKFaSl9AfGzypW2GMFeDDa86')
  .then(resp=>{
    console.log(resp)
  })
  .catch(err=>{
    console.error(err);
  })
  return (
    <div className="App">
      <h1>Nasa Picture of the Day</h1>
      <Title />
      <Image />
      <Explanation />
    </div>
  );
}

export default App;
