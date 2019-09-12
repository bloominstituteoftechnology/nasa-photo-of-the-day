import React, { useState, useEffect } from "react";
import Title from "./components/Title";
import Figure from "./components/Figure";
import Details from "./components/Details";
import "./App.css";

const App = () => {
  const [state, setState] = useState({});

  useEffect(() => {
    const api = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";

    fetch(api)
      .then(res => res.json())
      .then(data => {
        setState(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const { title, url, copyright, date, explanation } = state;

  return (
    <div className="App">
      <Title date={date} className="title" />
      <div className="details">
        <Figure copyright={copyright} title={title} imgUrl={url} />
        <Details title={title} description={explanation} />
      </div>
    </div>
  );
};

export default App;
