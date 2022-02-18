import React, {useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import BodyBuild from './Body'
import styled from 'styled-components'

 const StyledHeadline= styled.h1`
 background-color: gainsboro ;
 
 `
 const StyledNote = styled.p`
 background-color: dimgray;
 `
 function App() {
  const [copy, setCopy] = useState()
  


useEffect(() => {
  axios.get(`https://api.nasa.gov/planetary/apod?api_key=CP9ybXLIceXiyidiZgPDegKVLsL4iMscgj07zGoL`)
.then(resp => {
    // console.log(resp.data)
    setCopy(resp.data.copyright)
  })
})


  return (
    <div className="App">
      <StyledHeadline className='h1'> EVERYONE NEEDS SPACE TO GROW </StyledHeadline>
      { <BodyBuild />}
      <StyledNote className="classInstructions">
        Read through the instructions in the README.md file to build your NASA
        aStyledNotep! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </StyledNote>
      <h4>copyright:{copy}</h4>
    </div>
  

    
  );
}

export default App;
