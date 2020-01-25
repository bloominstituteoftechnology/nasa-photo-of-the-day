import React, { useState, useEffect } from "react";
import ImageContainer from "./components/ImageContainer";
import ModalContainer from "./components/Modal";
import styled from "styled-components";
import axios from "axios";
import "./App.css";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding-top: 3em;
  background-image: url("https://c1.staticflickr.com/4/3935/32253842574_d3d449ab86_c.jpg");
  background-color: black;
  background-size: 100% 100%;
`;

function App() {
  const [nasa, setNasa] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=L6Fjl7gZtReyMZa0M3XLLvKHoXcy9ZF5cWW0t4Jc"
      )
      .then(res => {
        setNasa(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const onChange = e => {
    var date = e.target.value;
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?date=${date}&api_key=L6Fjl7gZtReyMZa0M3XLLvKHoXcy9ZF5cWW0t4Jc`
      )
      .then(res => {
        setNasa(res.data);
      })
      .catch(err => {
        alert("sorry, no data available before June 16, 1995");
      });
  };

  return (
    <Wrapper>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "baseline"
        }}
      >
        <ModalContainer data={nasa} />
        <input
          type="date"
          style={{ opacity: "0.7", marginLeft: "1.5em" }}
          onChange={onChange}
        />
      </div>
      <ImageContainer data={nasa} />
    </Wrapper>
  );
}

export default App;
