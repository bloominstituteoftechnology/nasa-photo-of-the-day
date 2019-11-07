import React, {useState, useEffect} from "react";
import Apod from "./apod";
import axios from "axios"

export default function ApiHandler() {
    const [api, setApi] = useState([])
    const [date, setDate] = useState("2019-09-25")
  
    useEffect(() => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
      .then(response => {
        console.log(response)
        setApi(response.data)
      })
      .catch( error => {
        console.log(error)
      })
    },[date])
    return (
      <div className="container">
        <button onClick ={() => setDate('')}>Today</button> 
        <button onClick ={() => setDate('2019-05-11')}>Yesterday</button>
        <button onClick ={() => setDate('2019-04-11')}>2 Days Ago</button>
        <div className="entry">
        <Apod title={api.title} url={api.url} date={api.date} explanation={api.explanation}/>
            </div>               
       </div>
      
    );
  }