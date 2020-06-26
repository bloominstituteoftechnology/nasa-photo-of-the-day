import React, { useEffect, useState } from "react";
import "./App.css";
import NasaList from "./components/NasaList";
import nasa from "./nasa.png";
import Header from "./components/Header";
import Axios from "axios";
import Container from "./components/Container";

function App() {
  // step 1 - capture values in state
  const [nasaData, setNasaData] = useState("");
  // step 2 - create a useEffect
  useEffect(() => {
    // step 3 - call Axios and GET request the NASA APOD
    Axios.get(
      "https://api.nasa.gov/planetary/apod?api_key=Todv5y6q4RcbOU3Ov5o6g8mMgfAvtOszsy7CeA9x"
    )
      .then((response) => {
        // placeholder until we figure out what our data is
        console.log("nasa response", response);
        // step 4 - set nasaData to equal the response we get from NASA
        setNasaData(response.data);
      })
      .catch((error) => {
        // step 5 - handle the error response
        console.log("nasa data get request error", error);
      });
    // step 6 - implement a dependency array so that the call only runs when the data is updated
    // this prevents infinite loop
  }, []);
  console.log("data from nasa that lives in our state", nasaData);
  return (
    <div className="App">
      <img className="nasa" src={nasa} alt="NASA Logo" />
      <h1>NASA Project</h1>
      <h3>Photo of the Day</h3>
      <nav className="nav">
        <a style={{ textDecoration: "none" }} class="nav-link" href="#">
          Home
        </a>
        <a style={{ textDecoration: "none" }} class="nav-link" href="#">
          Missions
        </a>
        <a style={{ textDecoration: "none" }} class="nav-link" href="#">
          Photo of the Day
        </a>
        <a style={{ textDecoration: "none" }} class="nav-link" href="#">
          NASA TV
        </a>
        <a style={{ textDecoration: "none" }} class="nav-link" href="#">
          About
        </a>
      </nav>
      <NasaList />
      <Header />
      <Container nasaData={nasaData} />
      {/* creating a new component and pasing nasaData to the container component */}
      {/* what we call props is to the left of the equal sign, the data we pass to props is to the right */}
      {/* this nasaData comes from our state that was captured by our axios call */}
    </div>
  );
}

export default App;
