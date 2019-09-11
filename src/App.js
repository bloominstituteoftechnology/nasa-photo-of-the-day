import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Nasa from "./components/nasa.js";
import axios from "axios";
import "./index.css";
import galactic from "./content/galactic.jpg";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

function App() {
  const [nasa, setNasa] = useState([]);
  const errorNasa = {
    media_type: "image",
    hdurl: galactic,
    title: "Image Not Found, Sorry!",
    explanataion:
      "The image you have requested is not available. Please try on another date!"
  };

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then(res => {
        setNasa(res.data);
      })
      .catch(error => {
        setNasa(errorNasa);
        console.log(error);
      });
  }, []);

  return (
    <div className="APP">
      <div className="SHUTTLE">
        {console.log(nasa)}
        {!nasa.url || !nasa.hdurl ? (
          <h3 className="loader">
            <p className="loadText">{" Loading... "}</p>
            <Loader type="Triangle" color="red" height={300} width={300} />
          </h3>
        ) : (
          <Nasa
            date={nasa.date}
            explanation={nasa.explanation}
            src={nasa.url}
            media_type={nasa.media_type}
            hdurl={nasa.hdurl}
            title={nasa.title}
          />
        )}
        ;
      </div>
    </div>
  );
}

export default App;
