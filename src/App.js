import React, {useState, useEffect} from "react";
import "./App.css";
import NasaTitle from "./Components/NasaTitle";
import NasaExplanation from "./Components/NasaExplanation";
import NasaDate from "./Components/NasaDate";
import NasaCopyright from "./Components/NasaCopyright";
import NasaPotd from "./Components/NasaPotd";
import axios from 'axios';
import styled from 'styled-components'

const AppSection = styled.section `
background: #AFEEEE;
width: 50vw;
margin: 0 auto;
;


`;



 function App(){
  const [explanation, setExplanation] = useState();
  const [title, setTitle] = useState();
  const [url, setUrl] = useState();
  const [date, setDate] = useState();
  const [copyright, setCopyright] = useState();


  useEffect(() => {
      axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=U5f2h4RNWlYb3It9tOm3PduYzhvmVstZVHmiMuCa`)
      .then( response => {
          console.log(response.data);

          setExplanation(response.data.explanation);
          setTitle(response.data.title);
          setUrl(response.data.url);
          setDate(response.data.date);
          setCopyright(response.data.copyright);
      })
      .catch(error => {
          console.log("Unable to retrieve data", error);

      });
  }, []);

  return (
    <AppSection><section className="App">
        <div className="container">
        <NasaTitle
          title={title} />
        <NasaPotd
          url={url} />
        <NasaExplanation 
          explanation = {explanation} />
        <NasaCopyright 
          copyright = {copyright} /> 
        <NasaDate 
          date = {date} />
        </div>
      </section></AppSection>
);
}

export default App;
