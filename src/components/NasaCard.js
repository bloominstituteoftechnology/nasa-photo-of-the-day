import React, {useState} from "react";
import styled from "styled-components";
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import logo from "../assets/logo.png"

//styles component(s)
let ImageAndInfo = styled.div`
display: flex;
flex-direction: column;
width: 100%;
justify-content: center:
content-align: center;
align-items: center;
`;
let Header = styled.header`
display: flex;
flex-direction: row;
justify-content: center;
overflow: auto;
align-items: center;

`;

const NasaCard = props => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
    return (
      <div className="" key={props.url}>
        <Header>
          <img className = "logo" src = {logo} alt = {"Nasa Official Logo"}/>
          <div>
            <p>Date: {props.date}</p>
            <h1>Nasa's Photo of the Day</h1>
            <h2>{props.title}</h2>
          </div>
        </Header>  
        <ImageAndInfo>
          <img src= {props.img} alt = {"Nasa image of the Day"}></img>
          <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Learn about this Image</Button>
          <Collapse isOpen={isOpen}>
            <Card>
              <CardBody>
                {props.explanation}
              </CardBody>
            </Card>
          </Collapse>
          </ImageAndInfo>
      </div>
    );
  };


export default NasaCard;