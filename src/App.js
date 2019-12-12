import React, {useEffect, useState} from "react";
import "./App.css";
import axios from "axios";
import MainHead from "./components/mainHead/mainHead";
import HeaderDescription from "./components/mainHead/headerDescription";
import RandomDateButton from "../src/components/mainHead/randomDateButton";
function App() {
  const [apodData, setApodData] = useState([]);
  const [date, setDate] = useState("currentDate");

  var currentDate = new Date();
  let year = currentDate.getFullYear();
  let month = currentDate.getMonth() + 1;
  let day = currentDate.getDate()
  currentDate = year + "-" + month + "-" + day;

  useEffect(() => {  
  axios.get(`https://api.nasa.gov/planetary/apod?date=${currentDate}&api_key=JXS4kEFj3IdlwFH7RYrMgNehgIcDKcceVbnQz2br`)
  .then(response => {
    setApodData(response.data);
  });
}, []);

  useEffect(() => {

  }, [date])

  // axios.get("https://images-api.nasa.gov/search?media_type=image")
  // .then(response => {
  //   console.log(response.data.collection.items)
  // })
  return (
    <div className="App">
      <MainHead displayPicture = {apodData} />
      <RandomDateButton setDate = {setDate}/>
      <HeaderDescription displayText = {apodData}/>
    </div>
  );
}

export default App;
