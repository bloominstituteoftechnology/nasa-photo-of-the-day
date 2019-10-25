import React from "react";
import { useState, useEffect } from "react";
import CardData from "./components/CardData";
import HeaderCard from "./components/HeaderCard";
import CardCenter from "./components/CardCenter";
import CardBottom from "./components/CardBottom";
import { Container, Row, Col} from 'reactstrap';
import "./App.css";
import Axios from "axios";


function App() {

const [title, setTitle] = useState([]);
const [url, setUrl] = useState([]);
const [date, setDate] = useState([]);
const [explanation, setExplanation] =useState([]);

useEffect(() => {
  Axios
  .get('https://api.nasa.gov/planetary/apod?api_key=9cnUud9XB7N1J7hZzGBaL2ft0rP1AA0DSg1CevXP')
  .then(response => {
    console.log("title data",response.data);
      setTitle(response.data.title);
      setUrl(response.data.url);
      setDate(response.data.date);
      setExplanation (response.data.explanation);
    
  })
  .catch(error => {
    console.log("The data was not returned", error);
  });
}, []);




  return (
    <Container>

    <Row>

    <Col col-md-4><HeaderCard image = {url}/></Col>
    <Col col-md-3 offset-md-3><CardCenter date = {date}/>
    <CardBottom className="bottom" explanation={explanation} title={title}/></Col>

    </Row>

    </Container>
  );
}

export default App;