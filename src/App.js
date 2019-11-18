import React from "react";
import "./App.css";
import ImageList from "./ImageList";
import styled from "styled-components";
import Button from "./ImageCard";

const Row = styled.div`
  &::after{
    content:"";
    clear: both;
    display:table;
  }
`;

function getWidthString(span){
  if (!span) return;

  let width = span / 12*100;
  return `width: ${width}%;`;
}

const Column = styled.div`
  display: flex;
  ${({xs}) => (xs ? getWidthString(xs) : "width: 100%")};

  @media only screen and (min-width:768px){
    ${({sm}) => sm && getWidthString(sm)};
  }

  @media only screen and (min-width: 992px){
    ${({ md }) => md && getWidthString(md)};
  }

  @media only screen and (min-width: 1200px){
    ${({ lg }) => lg && getWidthString(lg)};
  }
`;

const MainTitle = styled.h2`
  font-size: 30px;
  color: navy;
  float: center;
`;



function App() {
  return (
    <div>
      <Row>
        <Column className="MainTitle" xs="12" sm="12" lg="12">
        <MainTitle> Picture of the day <spam className="nasa">by Nasa</spam></MainTitle>  
        </Column> 
      </Row>

      <Row>
      <Column xs="12" sm="12" lg="12">
             <ImageList />
      </Column> 
      </Row>

      <Row>
        <Column>
          <Button />
        </Column>
      </Row>
    </div>
  );
}





export default App;

