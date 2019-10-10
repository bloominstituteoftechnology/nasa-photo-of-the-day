import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import TitleCard from "./components/TitleCard";
import MidCard from "./components/MidCard";
import BottomCard from "./components/BottomCard";


function App() {

  const [title,setTitle] = useState([]);
  const [url,setUrl] = useState([]);
  const [date,setDate] = useState([]);
  const [explanation,setExplanation] = useState([]);

  useEffect(() => {
      axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=3uDJzdFw8xvKQl11eHeLOWvtTMpIGsrndaqZJEpp`)
        .then(response => {
          console.log("title data",response.data);
            setTitle(response.data.title);
            setUrl(response.data.url);
            setDate(response.data.date);
            setExplanation (response.data.explanation);
          
        })
        .catch(error => {
          console.log("The data was not returned", error);
        });
    }, []);

  return (
    <div className="App">
      <div className="App-grid">
      <TitleCard title = {title} image = {url}/>
      <MidCard date = {date}/>
      <BottomCard explanation = {explanation}/>
      </div>
    </div>
  );
}

export default App;
