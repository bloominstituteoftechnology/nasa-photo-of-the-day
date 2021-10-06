import React, {useState, useEffect} from "react";
import "../App.css";
import axios from "axios";
import Title from "./Title"
import Image from "./Image"
import Explanation from "./Explanation"



function App() {

  const [data, setData] = useState([])
  

useEffect(()=>{
axios.get('https://api.nasa.gov/planetary/apod?api_key=JPdEuTaesq36aLpUHKFaSl9AfGzypW2GMFeDDa86')
  .then(resp=>{
    console.log(resp)
    const data = resp.data;
    console.log(data)
    setData(data)
  })
  .catch(err=>{
    console.log(err);
  })}, [])
  

  return(
    <div className="App">
      <h1>Nasa Picture of the Day</h1>
      <Title title={data.title}/>

      <Image img = {data.url}/>
      <Explanation explanation = {data.explanation}/> 
    </div>
  )}
    

export default App;
