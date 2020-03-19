import React, {useState, useEffect} from "react";
import {Container} from "reactstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from "axios"
import CardContent from "./CardContent"

function Card() {
  const [info, setInfo] = useState([])
  // console.log([info])

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then(response => {
        console.log(response)
        setInfo(response.data)
      })
      .catch(error => {
        console.log("no doggos", error);
      });
  }, []);

  return (
    <Container >
      <CardContent key={info.service_version} info ={info} />
    </Container>
  );
}

export default Card;
