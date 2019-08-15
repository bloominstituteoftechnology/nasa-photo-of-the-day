import React from "react";
import styled from "styled-components";

const TestP = styled.p `
font-size: 30px; 
color: cyan;
`;

const Button = styled.button`
color: palevioletred;
background-color: #FBBFE3;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
text-decoration: none;
font-color: palevioletred;
`;

const TomatoButton = styled(Button)`
color: tomato;
border-color: tomato;
`;

const Image = styled.img`
margin-top: 40px;
width: 800px;
height: 0 auto;
`



function Comp(props) {
      
      //console.log("Component rendered");
      //normal JSX part
    return (
      <div className="App">
        <div className="photoOfDay">
          <Image src = {props.picture}></Image>
        </div>
        <TestP>
          {props.title} || {props.date}
        </TestP>
        <p>{props.expla}</p>
        <Button> <a href="https://apod.nasa.gov/apod/astropix.html" target="_blank">Link to NASA Site</a></Button>
        <TomatoButton> <a href="https://api.nasa.gov/api.html" target="_blank">Link to NASA API</a></TomatoButton>
      </div>
      
    );
  } 
  
  //exporting data-
  export default Comp;