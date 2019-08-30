import React,{useState, useEffect} from "react";
import PhotoCard from "./components/PhotoCard";
import Axios from "axios";
import styled from 'styled-components';

const WrapperDiv =styled.div`
  font-family:sans-serif;
  text-align:center;
`;


function App() {
  const[data,setData]=useState({});
  useEffect(()=>{
    Axios.get("https://api.nasa.gov/planetary/apod?api_key=scHFqWVA9XYlpvQc9ZIwJ42GwTsdExZ0vT3zwAXI&date=2019-06-23")
    .then(response =>{
      setData(response.data);
    });
  },[]);
 

  return (
    <WrapperDiv className="App">
      
      <PhotoCard Title={data.title}
                  Url={data.url}
                  explanation={data.explanation}/>
    </WrapperDiv>
  );
}

export default App;
