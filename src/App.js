import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Title from "./Title";
import Body from "./body";

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
  console.log(data);
  return (
    <div className="App">
      <Title />
      {!data ? (
        "Loading..."
      ) : (
        <Body
          title={data.title}
          img={data.hdurl}
          date={data.date}
          description={data.explanation}
        />
      )}
    </div>
  );
}

export default App;
