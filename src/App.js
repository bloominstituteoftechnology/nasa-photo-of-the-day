import React, { useState, useEffect } from "react"
import "./App.css"
import axios from "axios"
import Photo from "./Photo"
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';


function App() {

  const [photo, setPhoto] = useState([])
  const [date, setDate] = useState([])
  const [explanation, setExplanation] = useState ([]);
  const [title, setTitle] = useState ([]);

  useEffect(() => {
    axios
    .get("https://api.nasa.gov/planetary/apod?api_key=hI7mvMrtmts3yLRICMpu41ASYPcS8rrPGgFYc2Qw&date=2020-06-25")
    .then( response => {
      console.log(photo);
      setDate(response.data.date)
      setTitle(response.data.title)
      setPhoto(response.data.url)
      setExplanation(response.data.explanation)
    })
    .catch( error => {
      console.log("The data was not returned", error);
    });
   } , []);
 

  return (
    
    
    <section className = "App">
      
            
          <div className = "App-logo"></div>  
          <div className = "App-header">NASA Photo of the Day
          <div className = "App-link">The App Link</div>
          <div className = "outerEyeOpen"> {title} </div>
          <img src= {photo} alt= "NPOD"/>
          <div className = "date"> {date}</div>
          
          <div className = "NPOD"> 
          
          
          <Button>Button</Button>
         
          </div>

                    
         
          
      
          <article className= "explanation">{explanation}</article>
          </div>
          <div className = "outerEyeClose"></div>
           
        </section>
  );
}

export default App;