import React, { useState, useEffect } from "react";
import "./App.css";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "react-bootstrap/JumboTron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
//axios
import axios from "axios";
//resources
import astronaut from "./resources/Astronaut.jpg";
import nasalogo from "./resources/nasa-logo.png";
import nebula from "./resources/nebula.jpg";
import PhotoBooth from "./PhotoBooth.js";

function App() {
  const [astro, setAstro] = useState(astronaut);
  const [nasa, setNasa] = useState(nasalogo);
  const [galaxy, setGalaxy] = useState(nebula);
  const [data, setData] = useState({});

  //console.log(data);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=aW4mba0GtK7XjhiRZpoV3FudBspsIYDqtl7CZ0VP"
      )
      .then((res) => {
        setData(res.data);
        //console.log("fetched data", res.data);
      })
      .catch((err) => console.log("The API request failed"));
  }, []);

  return (
    <div style={{ backgroundColor: "black" }}>
      <img
        className="justify-content-md-center"
        src={galaxy}
        alt="nebula sky"
        style={{
          position: "fixed",
          right: 0,
          bottom: 0,
          width: "100%",
          height: "100%",
        }}
      />
      <Container
        style={{
          backgroundColor: "#AAA",
          paddingBottom: "5rem",
          paddingTop: "1rem",
          opacity: 0.75,
        }}
      >
        <Jumbotron
          className="justify-content-md-center"
          style={{
            backgroundColor: "#FFF",
            paddingTop: "3rem",
            paddingBottom: ".5rem",

            height: "4000px",
          }}
        >
          <div className="App">
            <h1
              className="display-4"
              style={{ paddingTop: "3rem", paddingBottom: "1rem" }}
            >
              NASA Astronaut Picture of the Day
            </h1>
            <img
              className="mx-auto d-block img-fluid w-50"
              src={nasa}
              alt="nasa logo"
              style={{ width: "15rem", paddingBottom: "15%" }}
            />
            <hr style={{ width: "50%" }}></hr>
            <img
              className="mx-auto d-block img-fluid w-100"
              src={astro}
              alt="spaceman"
              style={{ paddingTop: "30%", paddingBottom: "3rem" }}
            />

            <p className="text-dark txt" style={{ paddingBottom: "40%", fontSize: "1.5rem"}}>
              Take a virtual trip through the cosmos with the NASA Astronaut
              Picture of the Day{" "}
              <span role="img" aria-label="go!">
                🚀
              </span>
              !
            </p>
          </div>
          <div className="App">
            <h2 className="display-5-dark" style={{ paddingBottom: "3rem" }}>
              Today's Photo
            </h2>
            <PhotoBooth data={data} />
          </div>
        </Jumbotron>
      </Container>
    </div>
  );
}

export default App;
