import React from 'react';
import '../App.css'; 
import  VideoPlayer  from "react-video-js-player";
import styled,{keyframes} from 'styled-components'

const kf = keyframes`
100%{
    opacity : 1;
    transform: scale(1) rotateZ(0);
}
`


const StyledTitle = styled.div`
width: 100%;
justify-content: space-between;
padding: 8px;
border-bottom: 2px solid white;
background-color: ${props => props.theme.primaryColor};
color: ${props => props.theme.white};
@media ${props => props.theme.breakpointMobile}{
  width: initial
}

img{
    border: 5px;
    opacity: 0;
    transform: scale(2) rotateZ(360deg);
    animation: ${kf} 0.5s ease-in-out forwards;
}
h1:hover{
    transition: all 0.2s ease-in-out;
    color: ${props => props.theme.tertiaryColor};   
}
h3 {
    text-align: centre;
    padding: 2%;
}
&:hover {
  transition: all 0.2s ease-in-out;
  background-color: ${props => props.theme.black}; 
}

}`

const Title = (props) => {
    return <StyledTitle>
    <h1>{props.title}</h1>
    <h2>{props.date}</h2> 
    <img src={props.url} allow="encrypted-media" width='50%' height='30%'  />
    <h3>{props.explanation}</h3>
    </StyledTitle>
}
export default Title;