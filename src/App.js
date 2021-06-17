import "./App.css";
import Header from "./header";
import Img from "./img";
import axios from "axios";
import React, { useEffect, useState } from "react";
import TextContainer from "./text";
import Buttons from "./buttons";

// import Buttons from "./buttons";
// import Text from "./text";

///import names above instead of typical html element names
function App() {
  const [stillLoading, setStillLoading] = useState(true);
  const [nasaData, setNasaData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(15);

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=2017-07-01&end_date=2017-07-30")
      .then((response) => {
        console.log("2. here is future data", response);
        setNasaData(response.data);
        setStillLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });

    console.log("1. here is the result", nasaData);
  }, []);

  if (stillLoading) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Header></Header>
      <Img nasaData={nasaData} currentIndex={currentIndex} />
      <Buttons nasaData={nasaData} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
      <TextContainer nasaData={nasaData} currentIndex={currentIndex} />

      <p>
        Read through the instructions in the README.md file to build your NASA app! Have fun{" "}
        <span role="img" aria-label="go!">
          🚀
        </span>
        !
      </p>
    </div>
  );
}

export default App;
//test
