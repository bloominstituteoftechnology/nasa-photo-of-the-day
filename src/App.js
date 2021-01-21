import React, {useState, useEffect} from "react";
import axios from 'axios'
import "./App.css";
import Media from './components/media'
import styled from 'styled-components'

function App() {
  const [data, setData] = useState({})
  useEffect(()=>{
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=StiJUP4brMLR5zQuYaPjAtTsqLwJsrwAr7pl7Wgw')
    .then((res)=> {
     setData(res.data)
})

  },[])


  return (
    <div className="App">
      <Media url={data.url} title={data.title}/>
      <StyledText>
       {data.explanation}
      </StyledText>

    </div>
  );
}
const StyledText = styled.p`
  font-size: 1.2rem;
  font-weight:lighter;
  width: 90%;
  margin: 0 auto;

`


export default App;
