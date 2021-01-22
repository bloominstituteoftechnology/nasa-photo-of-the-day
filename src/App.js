import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import PhotoContainer from "./components/PhotoContainer";

function App() {
  const [data, setData] = useState([]);
  // https://api.nasa.gov/planetary/apod?api_key=D8RTSrPeUTpZAxum4X1FLLAGp6loWx9Me63OgghH
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=D8RTSrPeUTpZAxum4X1FLLAGp6loWx9Me63OgghH"
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log("error");
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <PhotoContainer props={data} />
    </div>
  );
}

export default App;
