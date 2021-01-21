import React from "react";
import styled from 'styled-components'
const Display = (props) => {
  const { date, title, url, explain } = props;

  return (

     <StyleDiv>
       <div className="displayDiv">
      <h1>{title}</h1>
      <h2>{date}</h2>
      <img src={url} alt="space" />
      <p>{explain}</p>
    </div>
    </StyleDiv>
  );
};


const StyleDiv = styled.div`
width:  100%;
height: 100%;
margin-top: 2rem;

background-color: #f9ab55;
display: flex;
justify-content: center;
align-items: center;


h1{
  font-size: 3rem;
  color: white;
}

img{
  height: 50vh;
  width: 60vw;
  border-radius: 50%;
}
p{
  font-size: 1rem;
  color: white;
  padding: 3em 3em;
  /* background-color: #084887; */
  margin: 0 30em;
}
`

export default Display;
