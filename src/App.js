import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import MainData from "./MainData.jsx";
import Explanation from "./Explanation";
import Header from "./Header";


function App() {
  const [photo, setPhoto] = useState([])
  const [date, setDate] = useState([])
  const [explanation, setExplanation] = useState ([]);
  const [title, setTitle] = useState ([]);

  useEffect(() => {
    axios
    .get("https://api.nasa.gov/planetary/apod?api_key=ysbmouM5fhCOUpMLeZXAr2DbAnQCE6iun4ukTApX&date=2020-07-16")
    .then( response => {
      console.log(response);
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

    <Header title={title} date={date} photo={photo}/>
<MainData maindata={MainData}/>
 

    <div className = "NPOD"> 
      <Explanation explanation={explanation} />
    </div>
    
    
    

  </section>
   );
}

export default App;
