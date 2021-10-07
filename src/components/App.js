import React, {useState, useEffect} from "react";
import "../App.css";
import axios from "axios";
import Title from "./Title"
import Image from "./Image"
import Explanation from "./Explanation"
import { BASE_URL, API_KEY } from '../constants/index.js'
//rimport styled from 'styled-components';

// import { Spinner } from 'reactstrap';


function App() {

  const [data, setData] = useState([])
  

useEffect(()=>{
axios.get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}`)
  .then(resp=>{
    console.log(resp)
    const data = resp.data;
    console.log(data)
    setData(data)
  })
  .catch(err=>{
    console.log(err);
  })}, [])
  
  useEffect(() => {
    console.log("I run ONLY after the first render!!!");
  }, [])

  return(
    <div className="App container">
      
      <h1>Nasa Picture of the {data.date}</h1>
      <Title title={data.title}/>
      <div className='section2'>
      <Image img = {data.hdurl}/>
      <Explanation explanation = {data.explanation}  color={'blue'}/> 
      </div>
   </div>
  )}
    

export default App;
