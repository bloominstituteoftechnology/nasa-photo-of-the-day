import React, {useState, useEffect} from "react";
import axios from 'axios'
import "./App.css";
import NasaPhoto from "./NasaPhoto";
import Theme from './Theme';
// import styled, {keyframes} from 'styled-components'

const TitleStyle = Theme.div`
background-color: ${pr => pr.theme.primaryColor}
`


function App() {
  const [data, setData] = useState();
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=dO4U5RyTGBbYJS671j5oDYbAVjIIPeSMWOVtN7Kc')
    .then(res => {
      console.log(res)
      setData(res.data);
    })
    .catch(err => console.error(err))
  }, [])
  return (
    <TitleStyle className="App">
      {data && <NasaPhoto photo={data} />}
    </TitleStyle>
  );
}

export default App;
