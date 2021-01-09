import React, { useState, useEffect } from "react";
import "./App.css";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { ParallaxProvider } from "react-scroll-parallax";
//axios
import axios from "axios";
//resources
import astronaut from "./resources/Astronaut.jpg";
import nasalogo from "./resources/nasalogo.png";
import nebula from "./resources/nebula.jpg";
import moon from "./resources/moon.jpg";
import launch from "./resources/launch.jpg";
import PhotoBooth from "./PhotoBooth.js";
import Apollo from "./resources/apollo.jpg";
import Columbia from "./resources/columbia.jpeg";
import ProjectMercury from "./resources/project_mercury.jpg";
import ShuttlePatch from "./resources/shuttle-patch.jpg";
import Skylab from "./resources/skylab.jpg";

function App() {
 // const [astro, setAstro] = useState(astronaut);
 // const [nasa, setNasa] = useState(nasalogo);
 // const [galaxy, setGalaxy] = useState(nebula);
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
    <div>
      <img
        className=" justify-content-md-center background "
        src={nebula}
        alt="nebula sky"
      />
      <Container className=" container ">
        <div className="justify-content-md-center jumbotron">
          <div className="App">
            <h1
              className="display-4"
              style={{ paddingTop: "2rem", paddingBottom: "1rem" }}
            >
              NASA Astronomy Picture of the Day
            </h1>
            <img
              className="mx-auto d-block img-fluid"
              src={nasalogo}
              alt="nasa logo"
              style={{
                width: "50rem",
                paddingTop: "2rem",
                paddingBottom: "15%",
              }}
            />
            <hr style={{ width: "50%" }}></hr>
            <div className="parallax">
              <ParallaxProvider>
                <img
                  className="mx-auto d-block img-fluid w-100"
                  src={astronaut}
                  alt="spaceman"
                  style={{ paddingTop: "30%", paddingBottom: "3rem" }}
                />
              </ParallaxProvider>
            </div>
            <p
              className="text-dark txt"
              style={{ paddingBottom: "20%", fontSize: "1.5rem" }}
            >
              Take a virtual trip through the cosmos with the NASA Astronaut
              Picture of the Day{" "}
              <span role="img" aria-label="go!">
                🚀
              </span>
              !
            </p>
            <div>
              <img
                className="mx-auto d-block img-fluid w-50 "
                src={moon}
                alt="moon over hawaii"
              />
              <p>A great shot of the moon over Honolulu, Hawaii</p>
            </div>
          </div>
          <div className="App">
            <h2
              className="display-4"
              style={{ paddingBottom: "3rem", paddingTop: "30%" }}
            >
              Today's Photo
            </h2>
            <PhotoBooth data={data} />
          </div>
          <div style={{ paddingTop: "5rem" }}>
            <img
              src={launch}
              className="mx-auto d-block img-fluid w-50 "
              alt="shuttle launch"
            />
            <p>
              Engines rumble as the space shuttle Discovery rockets off into the
              sunset
            </p>
          </div>
          <div className="row" style={{ paddingTop: "7rem" }}>
            <img
              src={Skylab}
              className="col-sm-2 mx-auto d-block img-fluid"
              alt="skylab"
              style={{ height: "8%" }}
            />
            <img
              src={Apollo}
              className="col-sm-2 mx-auto d-block img-fluid"
              alt="apollo"
              style={{ height: "8%" }}
            />
            <img
              src={Columbia}
              className="col-sm-2 mx-auto d-block img-fluid"
              alt="columbia"
              style={{ height: "8%" }}
            />
            <img
              src={ProjectMercury}
              className="col-sm-2 mx-auto d-block img-fluid"
              alt="project mercury"
              style={{ height: "8%" }}
            />
            <img
              src={ShuttlePatch}
              className="col-sm-2 mx-auto d-block img-fluid"
              alt="shuttle patch"
              style={{ height: "10%" }}
            />
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <h4>Visit our other sites</h4>
          <button className="glow-on-hover">
            <a
              href="https://apod.nasa.gov/apod/archivepix.html"
              style={{ color: "white", textDecoration: "none"  }}
            >
              Archive
            </a>
          </button>
        </div>
      </Container>
    </div>
  );
}

export default App;
