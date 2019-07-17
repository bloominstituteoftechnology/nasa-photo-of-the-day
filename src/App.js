import React from "react";
import{useEffect,useState} from 'react';
import "./App.css";
import axios from 'axios';

import Date from "./components/date";
import Explanation from "./components/explanation";
import Media from "./components/media";
import Title from "./components/title";


function App() {

  //fetch data but put in useEffect so it doesn't rerender

  const [file, setFile] = useState();

  useEffect(()=>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=KJyS6GWGUTV4Pdyb7NrPOrxtacGyaRnLBxKuYrI6&date=2012-03-14')
      .then((info)=>{
        setFile(info.data);
        console.log(info.data);
      })
      .catch(error=>{
        console.log(error);
      })
  }, []);

  let date = null;
  let explanation = null;
  let url = null;
  let title = null;

  if(file){
    date = file.date;
    explanation = file.explanation;
    url = file.url;
    title = file.title;
  }



  return (
    // <div className="App">
    //   <p>
    //     Read through the instructions in the README.md file to build your NASA
    //     app! Have fun 🚀!
    //   </p>
    // </div>

    <div className="main">
      <div className="text">
        <Title title={title}/>
        <Date date={date}/>
        <Explanation xplain={explanation} />
        <Media url={url}/>
      </div> 
    </div>
  );
}

export default App;
