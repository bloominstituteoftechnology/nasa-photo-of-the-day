import React, {useState,useEffect}from "react";

 import Info from "./Info";
 import {ContainerDiv, H1, ImageNasa} from './Example';
import "./App.css";

const axios = require('axios');

function App() {
  const [item , setItem] = useState("")
  useEffect(()=>{
   axios.get('https://api.nasa.gov/planetary/apod?api_key=niD4avUKf4y1kNTQanryPfOb8fcRkRBdLhTs0n33')
   .then(res=>{
     console.log(res.data)
     setItem(res.data)
   })
   .catch(err=>{
     console.log("I got something wrong ", err)
   })
  },[])
  return (   
       <ContainerDiv>
          <H1>Nasa Picture of the day</H1>
          <ImageNasa src={item.url} alt={item.title}/>
          <Info item={item} />
      </ContainerDiv>
  );
}

export default App;
