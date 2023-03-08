import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Title from "./Title";
import Body from "./body";
import Datelist from "./Datelist";

function App() {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <Title />

      {!data
        ? "Loading..."
        : [
            <Body
              title={data.title}
              img={data.hdurl}
              description={data.explanation}
            />,
            <Datelist />,
          ]}
    </div>
  );
}

export default App;
