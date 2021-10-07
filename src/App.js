import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Col } from "reactstrap";
import "./App.css";

export const BASE_URL = "https://api.nasa.gov/planetary/apod";
export const API_KEY = "DEMO_KEY";

function App() {
  const [picOfDay, setPicOfDay] = useState([]);

  const colorStyling = {
    backgroundColor: "#c2c2c2",
    color: "#800080",
    
  };

  const img = {
    maxHeight: "40rem",
    maxWidth: "50rem",
  };

  const text = {
    width: "60rem",
    // marginLeft: "10%",
    // marginRight: "30%",
    paddingBottom: "5rem",
    color: "#0000ff",
  };

  useEffect(() => {
    const getPicOfDay = () => {
      axios
        .get(`${BASE_URL}?api_key=${API_KEY}`)
        .then((res) => {
          console.log(res);
          setPicOfDay(res.data);
        })

        .catch((err) => {
          console.log(err);
        });
    };
    getPicOfDay();
  }, []);

  return (
    <div className="App">
      <Card style={colorStyling}>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <h1>Nasa Photo Of The Day!</h1>
          <img
            src={picOfDay.url}
            alt="NASA Photo Of The Day"
            style={img}
          />
          <div className="text">
            <h2>{picOfDay.title}</h2>
            <h3>{picOfDay.date}</h3>
            <p style={text}>{picOfDay.explanation}</p>
          </div>
        </Col>
      </Card>
    </div>
  );
}
export default App;
