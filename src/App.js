import React, { useState, useEffect } from 'react'
import "./App.css";
import axios from 'axios';
import Media from './components/Media/Media'
import {
  Col, Row, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardHeader
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [apod, setApod] = useState({})

  useEffect(() => {
    const fetchData = () => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
          .then(response => {
            console.log(response)
            setApod(response.data)
          })
          .catch(error => console.error("failed to get profile info:", error))
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      <Row>
        <Col sm="12" md={{ size: 8, offset: 2 }}>
          <Card body className="container">
            <CardHeader tag='h1'> NASA Picture of the Day</CardHeader>
            <Media pod={apod} />
            <CardBody>
              <CardTitle tag="h5" className="text-left">{apod.title}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-left text-muted">{apod.date}</CardSubtitle>
              <CardText className="text-left">{apod.explanation}</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default App;
