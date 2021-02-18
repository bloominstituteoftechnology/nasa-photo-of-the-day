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
import cameraChart from './resources/cameras.png'

const API_KEY = "aW4mba0GtK7XjhiRZpoV3FudBspsIYDqtl7CZ0VP";
const initialRoverValue = {
  value: "curiosity",
};
const initialCameraValue = {
  camera: "fhaz",
};

const initialSolValue = '1000'

function App() {
  const [mars, setMars] = useState();
  const [data, setData] = useState({});
  const [roverValue, setRoverValue] = useState(initialRoverValue.value);
  const [camera, setCamera] = useState(initialCameraValue.camera);
  const [sol, setSol] = useState(initialSolValue)

  //console.log(data);

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then((res) => {
        setData(res.data);
        //console.log("fetched data", res.data);
      })
      .catch((err) => console.log("The API request failed"));
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverValue}/photos?sol=${sol}&camera=${camera}&api_key=${API_KEY}`
      )
      .then((res) => {
        setMars(res.data.photos[0].img_src);
        console.log("fetched data", res.data.photos);
       
      })
      .catch((err) => console.log("The API request failed"));
  }, [ camera, roverValue, sol ]);

  const handleRoverSubmit = e => {
    setRoverValue(e.target.value)
  }

  const handleCameraSubmit = e => {
    setCamera(e.target.value)
  }

  const handleSolSubmit = e => {
    setSol(e.target.value)
  }
  console.log(mars)
  return (
    <div>
      <img
        className=" justify-content-md-center background "
        src={nebula}
        alt="nebula sky"
      />
      <Container className=" container ">
        <div className="justify-content-md-center bg-dark jumbotron">
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
                width: "100vw",
                margin: '3rem 0'
              }}
            />
            <h3 style={{margin: '5rem 0'}}>
              Check back daily to see the mysteries of the cosmos courtesy of
              NASA
            </h3>

            <div className="parallax">
              <ParallaxProvider>
                <img
                  className="mx-auto d-block img-fluid w-100"
                  src={astronaut}
                  alt="spaceman"
                  style={{ margin: "5rem 0" }}
                />
              </ParallaxProvider>
            </div>
            <p
              className="text-light txt"
              style={{ paddingBottom: "20%", fontSize: "1.5rem" }}
            >
              Take a virtual trip through the cosmos with the NASA Astronomy
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
                style={{margin: '1.5rem 0'}}
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
          {/* MARS PICTURES  */}

          <div className='d-flex justify-content-center align-items-center flex-column'>
            <h1 style={{marginTop: '3rem', textAlign: 'center'}}>Mars Rover Images</h1>
            <img src={cameraChart} alt='cam chart' style={{maxWidth: '70%', boxShadow: '0 0 1.5rem black', marginTop: '3rem'}} />
            <div className='d-flex justify-content-center flex-column' style={{margin: '2rem 0 ', textAlign: 'center'}}>
              <label htmlFor='rover' style={{marginTop: '1rem'}}>Enter Rover name: </label>
            <input
              onSubmit={handleRoverSubmit}
              name='rover'
              type="text"
              placeholder="input rover name"
              value={roverValue}
              style={{textAlign: 'center'}}
              onChange={(e) => setRoverValue(e.target.value)}
            />
              <label htmlFor='camera' style={{marginTop: '1rem'}}>Enter Camera name: </label>
             <input
              onSubmit={handleCameraSubmit}
              name='camera'
              type="text"
              placeholder="input camera value"
              value={camera}
              style={{textAlign: 'center'}}
              onChange={(e) => setCamera(e.target.value)}
            />
            <label htmlFor='sol' style={{marginTop: '1rem'}}>Enter Mission Sol (Martian Day) Number: </label>
            <input
              onSubmit={handleSolSubmit}
              name='sol'
              type="text"
              placeholder="day of mission value"
              value={sol}
              style={{textAlign: 'center'}}
              onChange={(e) => setSol(e.target.value)}
            /></div>
 {/* /            {mars.map((item, idx) => {
              return <img key={idx} src={mars[idx].img_src} alt={mars.photos[idx].name} />
            })} */}
            <img src={mars} alt='mars' style={{maxWidth: '100%', margin: '3rem 0'}}></img>
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
              style={{ color: "white", textDecoration: "none" }}
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
