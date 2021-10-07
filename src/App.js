import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Description from "./Description";
import Image from "./Image";
import styled, { keyframes } from 'styled-components';



const BackgroundStyledDiv = styled.div`
  background-image: url(https://images.unsplash.com/photo-1542228846-2d791a09d7d1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80);
  height:100%;
  width:auto;
  padding:5%;
`

const StyledDiv = styled.div`
  color:yellow;
  font-family:roboto-motion-offset;

  p{
    font-size:1.4rem;
    line-height: 150%;
  }
  .theDate{
    color:white;
  }
  h1{
    color:red;
    font-size:2.4rem;
    }
  }
  button{
    margin:2%;
    padding:10px;
    border-radius:25px;
    font-weight:bold;
    :hover{
      cursor:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='100' height='120' viewport='0 0 100 100' style='fill:black;font-size:60px;'><text y='50%'>🤖</text></svg>") 16 0,auto; /*!emojicursor.app*/
  }
`

function App() {
  
  const [data, setData] = useState([])
  const [isToggled, setIsToggled] = useState(false)
  // https://api.nasa.gov/planetary/apod?api_key=eZ9SoGT9vzhRWxb96gplCe8kADvwAfuKbtVaVnRj
  // https://api.nasa.gov/planetary/apod?api_key=WZW4y7Tt3gRhfUUFBWb6ml29HpVbuL30dFinJ7rV

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=WZW4y7Tt3gRhfUUFBWb6ml29HpVbuL30dFinJ7rV')
      .then(res => {
        setData(res.data);
      //  console.log(res.data);
      }).catch(err => {
        console.error(err);
      })
  }, [])

console.log(data)

const altText= "To see the image of the day, you must click the button!"

  return (
    <div className="App">
      <BackgroundStyledDiv>
        <StyledDiv>
          <h1>NASA Photo of the Day presents...</h1>
          <Description data={data}/>
          <p className='theDate'>The photo was taken on {data.date}</p>
          <button onClick={() => setIsToggled(!isToggled)}>
          CLICK FOR IMAGE
          </button>
          {isToggled ? <Image data={data}/> : <h3>{altText}</h3>}
        </StyledDiv>
      </BackgroundStyledDiv>
    </div>
    
  );
}

export default App;
