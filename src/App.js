import React, { useState, useEffect } from "react";
import axios from 'axios'
import NasaPhoto from "./Components/NasaPhoto";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'
import {Button} from 'reactstrap'


const Format = styled.div`
 background-color: lightgrey;
 @media ${pr => pr.theme.breakpointMobile} {
   width: 100%;
 }
  `


  function App() {
  const [data, setData] = useState();
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=OYQjUFNenvSho9S6HdJFN32UTu42cV94XX6lgD29')
      .then(res => {
        setData(res.data)
      })
      .catch(err => console.error(err))
  }, [])    



  return (
      
    <Format>
      <div>
  <Button href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' 
    color="dark"
  >
    Click Me
  </Button>
</div>
      <div className="App">
      {data && <NasaPhoto photo={data} />}
      </div>

    </Format>   
  );
}




export default App;

// https://api.nasa.gov/planetary/apod?api_key=OYQjUFNenvSho9S6HdJFN32UTu42cV94XX6lgD29