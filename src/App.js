import React, {useState, useEffect} from "react";
import "./App.css";
import NasaTitle from "./Components/NasaTitle";
import NasaExplanation from "./Components/NasaExplanation";
import NasaDate from "./Components/NasaDate";
import NasaCopyright from "./Components/NasaCopyright";
import NasaPotd from "./Components/NasaPotd";
import axios from 'axios';

 function App(){
  const [explanation, setExplanation] = useState('');
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [date, setDate] = useState('');
  const [copyright, setCopyright] = useState('');


  useEffect(() => {
      axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then( response => {
          console.log(response.data);
          setExplanation(response.data.explanation);
          setTitle(response.data.title);
          setUrl(response.data.url);
          setDate(response.data.date);
          setCopyright(response.data.copyright);
      })
      .catch(error => {
          console.log("No data was returned", error);

      });
  }, []);

  return (
    <div className="App">
        <div className="container">
        <NasaTitle
          title={title} />
        <NasaPotd
          url={url} />
        <NasaExplanation 
          explanation={explanation} />
        <NasaDate 
          date={date} />
        <NasaCopyright 
          copyright={copyright} /> 
        </div>
      </div>
);
}

export default App;
