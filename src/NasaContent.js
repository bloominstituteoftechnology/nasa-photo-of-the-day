import axios from "axios"
import React, {useState, useEffect} from "react";
import styled, { keyframes} from "styled-components"

const keyFra = keyframes `
  50% {
    opacity: 0.5;
}
  100%{
    opacity: 1;
}`

const StyledDate = styled.h3`
  color: ${props => props.theme.white};
`

const StyledTitle = styled.h1`
  color: ${props => props.theme.quaternaryColor};
`

const StyledNasaContent = styled.div`
    opacity: 0;
    animation: ${keyFra} 2s forwards;
    background-color: ${props => props.theme.primaryColor};
    color: ${props => props.theme.secondaryColor};
    padding: ${props => props.theme.paddingSmall};
      
    &:hover {
      color: ${props => props.theme.tertiaryColor};
      transition: all 0.5s ease-in-out;
    }
    `


 function NasaContent(){
    const [content, setContent] = useState([])
    
  

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=zlgvIZAKfTSDnWa4uJ0sVWjCIzXovvagHzkROPh8")
    .then((response) => {
      console.log(response.data)
      setContent(response.data)
    })
    .catch((error) =>{
      console.log(error)
    })
  },[])
  return (content &&
    <StyledNasaContent className="App">
        <div>

      <StyledTitle>
        {content.title} <span role="img" aria-label='go!'>🚀</span>!
      </StyledTitle>

      <StyledDate>{content.date}</StyledDate>
      </div>
      <div><img alt="data" src={content.url}></img></div>
     <div> <p><span> </span>{content.explanation}</p> </div>
    </StyledNasaContent>
  );
  }
  export default  NasaContent; 