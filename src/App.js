import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import TitleCard from "./components/TitleCard";
import MidCard from "./components/MidCard";
import BottomCard from "./components/BottomCard";
import { Container, Row, Col} from 'reactstrap';

function App() {

  const [title,setTitle] = useState([]);
  const [url,setUrl] = useState([]);
  const [date,setDate] = useState([]);
  const [explanation,setExplanation] = useState([]);

  useEffect(() => {
      axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=3uDJzdFw8xvKQl11eHeLOWvtTMpIGsrndaqZJEpp`)
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

     
<div id="space">
  <div className="stars"></div>
  <div className="stars"></div>
  <div className="stars"></div>
  <div className="stars"></div>
  <div className="stars"></div>
</div>

    <Row>
 
      <Col className="col-md-4"><TitleCard image = {url}/></Col>

      <Col className="bottom-card   bg-transparent col-md-3 offset-md-3 ">
        <MidCard  date = {date}/> 
        <BottomCard explanation = {explanation} title ={title}/></Col> 

    </Row>
    
      </Container>
    
    
  );
}

export default App;


