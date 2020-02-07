import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard  from "./components/PhotoCard";
import dayButton from "./components/button";
import "./App.css";

// getCurrentDate(separator='-'){

//   let newDate = new Date()
//   let date = newDate.getDate();
//   let month = newDate.getMonth() + 1;
//   let year = newDate.getFullYear();
  
//   let today = `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
//   }


function App() {
const [image, setImage] = useState({});
// const [day, setDay] = useState(today)
useEffect(() => {
  axios
     .get('https://api.nasa.gov/planetary/apod?api_key=w44QUG2ECbsfHOtpLlFGuMF5GYogIeRbyiGVewze')
     .then(response => {
       setImage(response.data);
     });
}, [])

  return (
    <div className="App">
      <dayButton>Previous</dayButton>
        <PhotoCard title={image.title}
        url={image.url}
        explanation={image.explanation} />
        <br /><br />
        <dayButton>Next</dayButton>
    </div>
  );
}

export default App;
