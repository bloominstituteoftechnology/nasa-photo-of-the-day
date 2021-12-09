//https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
import React from "react";
import styled from "styled-components";


const StyledContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  border-bottom: 2px solid white;

  img {
    border-radius:5%;
    transition: transform 1s;
    &:hover {
        transition: transform 1s;
        transform: scale(1.5)
        
    }  
  }
  h2 {
      color : #98817b;
      &:hover {
        background-color: #abcdef;
      }
  }
  p {
    &:hover {
        background-color: #abcdef;
      }
  }
  h4 {
    &:hover {
        background-color: #abcdef;
      }
  }
`

const Photos = (props) => {
    const { info } = props;
    return (
        <StyledContent className='photo'>
            <div className='Heading'>
                <h2>{info.title}</h2>
                <p>{info.explanation}</p>
                <h4>{info.date}</h4>
            </div>
            <img src={info.url} />
        </StyledContent>

    )
}

export default Photos;