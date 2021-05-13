import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios';
import Image from './Image';
import styled from 'styled-components';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

const Container = styled.div`
  color: #33322f;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  `;

function App() {
  
  const [nasaData, setNasaData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(function (response) {
        console.log('Response: ', response.data);
        setNasaData(response.data);
      })
      .catch(function (error) {
        console.log('Error: ', error);
      })
  }, []);
  console.log('nasaData2: ', nasaData);

  if (!nasaData) return <h3>Loading...</h3>

  return (
    <Container>
      <h1>Nasa Photo of the Day</h1>
      <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Choose Date</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
            Anim pariatur cliche reprehenderit,
           enim eiusmod high life accusamus terry richardson ad squid. Nihil
           anim keffiyeh helvetica, craft beer labore wes anderson cred
           nesciunt sapiente ea proident.
          </CardBody>
        </Card>
      </Collapse>
      <Image src={nasaData.url} alt={nasaData.title} />
    </Container>
  );
}

export default App;
 