import React from "react";
import{useEffect,useState} from 'react';
import "./App.css";
import axios from 'axios';


import Date from "./components/date";
import Explanation from "./components/explanation";
import Media from "./components/media";
import Title from "./components/title";
import Copyright from "./components/copyright";

import styled from 'styled-components';

const AllDiv = styled.div`
    width: 100vw;
    heigh: 100vh;
`;

const WrapperDiv = styled.div`
    width: 100%;
    heigh: 100%;
    padding: auto;
    display: flex;
`;

const TextDiv = styled.div`
    width: 50vw;
    heigh: 33vh;
    margin: auto;
`;

const ImgDiv = styled.div`
    width: 50vw;
    heigh: 33vh;
    margin: auto;
`;




function App() {

  //fetch data but put in useEffect so it doesn't rerender

  const [file, setFile] = useState();

  useEffect(()=>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=KJyS6GWGUTV4Pdyb7NrPOrxtacGyaRnLBxKuYrI6&date=2019-07-17')
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
  let type = null;
  let url = null;
  let title = null;
  let cr = null;


  if(file){
    date = file.date;
    explanation = file.explanation;
    url = file.url;
    title = file.title;
    cr = file.copyright;
    type = file.media_type;
    console.log(url);
  }



  return (
    // <div className="App">
    //   <p>
    //     Read through the instructions in the README.md file to build your NASA
    //     app! Have fun 🚀!
    //   </p>
    // </div>

    <AllDiv>

      <WrapperDiv>
        <TextDiv>
          <Date date={date}/>
          <Title title={title}/>
          <Explanation xplain={explanation}/>
        </TextDiv>
        <ImgDiv>
          <Media type ={type} url={url}/>
          <Copyright cr={cr}/>
        </ImgDiv>
      </WrapperDiv> 
    </AllDiv>
  );
}

export default App;
