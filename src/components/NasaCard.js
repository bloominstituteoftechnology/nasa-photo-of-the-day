import React from "react";
import styled, {keyframes} from 'styled-components'

const kf = keyframes`
  100% {
    opacity: 1;
  }
`

const StyledCard = styled.div`
background-color: ${pr => pr.theme.background};
color: ${pr => pr.theme.fontColor};
font-weight: ${pr => pr.bold ? 'bold' : 'light'};

img{
    &:hover {
      transform: scale(.9);
      /* transition: all 0.5s ease-in-out; */
      opacity: .2;
  animation: ${kf} 10s ease-in-out forwards;
    }
}
h1,h2{
    &:hover{
        transform: scale(1.2);
    transition: all 0.5s ease-out;
    color: ${pr => pr.theme.hoverColor};
}
}
`

const NasaCard = (props) => {
    return (
        <StyledCard className="cardContainer">
         <h1>Title:<br></br>{props.data.title}</h1>
         <h2>Copyright: {props.data.copyright}</h2>
         <h2> Date : {props.data.date} </h2>
         <div className="cardImgInfo">
         <img src={props.data.url} alt='Nasa img of the day!'/>
         <p>{props.data.explanation}</p>
         </div>
       </StyledCard>
        
    )
}

export default NasaCard;