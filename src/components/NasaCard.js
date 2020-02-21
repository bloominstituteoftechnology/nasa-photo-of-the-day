import React, { useState } from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Container, Row, Col, Collapse } from 'reactstrap';
import styled from "styled-components";
import logo from '../assets/logo.png';

let Logo = styled.img`
width: 20%;
`;

let NewCard = styled(Card)`
display: flex;
flex-direction: column;
justify-content: center;
background: url('http://getwallpapers.com/wallpaper/full/1/a/3/241620.jpg');
background-size: cover;
height: 100vh;
`;

let NewHeader = styled(CardHeader)`
display: flex;
flex-direction: row;
justify-content: center;
overflow: auto;
align-items: center;
`;

let NewCardBody = styled.div`
`;

let Image = styled.img`
border: 2px solid grey;
width: 50%;
align-self: center;
`;

let Description = styled.p`
color: white;
width: 100%;

`;

let NasaCard = (props) =>{
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    
    return (
            // <Container>
            <NewCard>
                <NewHeader>
                    <Logo src={logo}/>
                    <div style={{color: 'white'}}>
                        <h1 className='today-date'>Date: {props.nasaData.date}</h1>
                        <h1>Photo of the Day</h1>
                    </div>
                </NewHeader>
                <NewCardBody>
                    <a href={props.nasaData.hdurl} title={'View Full HD Image'}>
                        <Button color="primary">View HD</Button>{' '}
                    </a>
                    <Image src={props.nasaData.url}/>
                    <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }} title={'View Description of Photo'}>View Description</Button>
                    <Collapse isOpen={isOpen}>
                        <Description>{props.nasaData.explanation}</Description>
                    </Collapse>
                </NewCardBody>
            </NewCard>
            // </Container>
        
    );
}

export default NasaCard;

{/* <Card>
<CardHeader tag="h3">Featured</CardHeader>
<CardBody>
  <CardTitle>Special Title Treatment</CardTitle>
  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
  <Button>Go somewhere</Button>
</CardBody>
<CardFooter className="text-muted">Footer</CardFooter>
</Card> */}