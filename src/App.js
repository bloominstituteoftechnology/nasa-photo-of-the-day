import React, {useState, useEffect} from "react";
import axios from 'axios'
import "./App.css";
import styled from 'styled-components'

const StyledApp = styled.div`
  *{
    background-color: black;
    color:white;
  }
  h1{
    color:red;
    font-size:3rem;
    margin-top:0%;
    margin-bottom:0%;
  }
  h2{
    margin-top:0%;
    margin-bottom:0%;
  }
  h3{
    margin-top:0%;
    margin-bottom:0%;
  }
  p{
    margin-top:0%;
    width:50%;
    margin-left:25%;
  }                                                                                                                             
  img{
    margin-top:0%;
    margin-bottom:0%;
    width:50%;
    border:dashed 3px white;
  }
`

function App(){
  const[photo, setPhoto] = useState({})
  // const[rover, setRover] = useState({})

  useEffect(() =>{
    const fetchImage = () =>{
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${inputValue}`)
      .then(res=>{
        setPhoto(res.data)
      })
      .catch(err=>{

      })
    }
    fetchImage()
  },[] )

  // useEffect(()=>{
  //   axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API_KEY}`)
  //   .then(res=>{
  //     setRover(res.data)
  //     console.log(res.data)
  //   })
  // },[])
  // console.log(rover)

  const[inputValue, setInputValue] = useState(' ')
  
  const changeInput = evt => {
    const { value } = evt.target;
    setInputValue(value)
  }

  const reset = () => {
    /* STEP 5 */
    setInputValue(' ')
  };


  const API_KEY = 'DXUUGOwFmoJZyyyeWI355njm4JXCa4licvy0cZNu'

  return (
    <StyledApp className="App">
    <h1>NASA Photo of the Day</h1>
    <h2>{photo.title}</h2>
      <h3>Date</h3>
      <h3>{photo.date}</h3>
      <img src={photo.url}/>
    <p>
      {photo.explanation}
    </p>
    <p>by {photo.copyright}</p>
  
  {/* <p>{rover.name}</p> */}
  <div id='output'></div> {/* STEP 3 */}
      <div>
        <input id='input' type='text' onChange={changeInput} value={inputValue} /> {/* STEP 6 */}
        <button id='resetInput' onClick={reset}>Reset</button>
      </div>
  </StyledApp>
);
}

export default App;
