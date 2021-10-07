import React, {useState, useEffect} from "react";
import axios from 'axios';
import { BASE_URL, API_KEY, KEY_CONNECT } from "./getAPOD";
import "./App.css";
import styled from 'styled-components';

const StyledFriend = styled.div`
  width: 60%
  display: flex;
  justify-content: space-between;
  padding: 8px
  border-bottom: 2px solid white;
  line-height: 1.6;

  background-color: ${pr => pr.theme.primaryColor};
  color: ${pr => pr.theme.white}
`



function App() {
  const [nasaData, setNasaData] = useState([])
  //const [imgDisplay, setImgDisplay] = useState(null)
useEffect(()=> {
  axios.get(`${BASE_URL}${KEY_CONNECT}${API_KEY}`)
    .then(res => {
      console.log(res.data)
      setNasaData(res.data);
    }).catch(err =>{
      console.log(err)
    })
},[])

  return (
    <StyledFriend>
    <div className="App">
    <h1>{nasaData.title}</h1>
    <p>{nasaData.date}</p>
    <div className='body'>
      <img src={nasaData.url} alt={'Nebula'}/>
    </div>
    <p>{nasaData.explanation}</p>
    </div>
    </StyledFriend>
  );
}

export default App;
