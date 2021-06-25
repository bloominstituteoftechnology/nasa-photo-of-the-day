import React, { useState, useEffect } from "react";
import {Card, CardBody, Container, Row, Col,} from 'reactstrap'


import axios from 'axios';
import "./App.css";

export const API_KEY = 'jswv153dCEmtfUmDK7CypxsQ7B2bg7eglsVGzONb';
export const BASE_URL = 'https://api.nasa.gov/planetary/apod?';

function App() {
  
const bgColor={
  backgroundColor: 'teal',
  color: 'white'
}
  
  const imgStyle = {
    maxHeight: 500,
    maxWidth: 500
  }
  

  const [data, setData] = useState({});

  useEffect(()=>{
    const getData = () =>{
          axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
          .then(res =>{
           console.log(res)
           setData(res.data)


              })


                  .catch(error =>{
                    console.log(error)


              })

    }
    getData()
  },[])

  return (
    <Card style ={bgColor}>
    <div className="App">
      
      <Col lg="12">
      <CardBody>
        <p>Nasa photo of the day!</p>
     
      <img src={data.url} alt="space stuff" style={imgStyle} />
      
      <Col sm="12" md={{ size: 6, offset: 3 }}>
      <p>{data.title}</p>
      <p>{data.date}</p>
      <p>{data.explanation}</p>
      </Col>
      
      </CardBody>
      </Col>
      
    </div>
    </Card>
  );
}


export default App;
