import React, { useState, useEffect } from "react";
import ImageContainer from "./components/ImageContainer";
import ModalContainer from "./components/Modal";
import styled from "styled-components";
import axios from "axios";
import "./App.css";

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: transparent;
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
          justifyContent: "flex-start",
          marginLeft: "1em"
        }}
      >
        <img
          style={{ height: "70px", width: "70px" }}
          src="https://invention.nasa.gov/assets/images/banner-meatball.png"
        />
      </div>
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
          style={{ opacity: "0.9", marginLeft: "1.5em", borderRadius: "10px" }}
          onChange={onChange}
        />
      </div>
      <ImageContainer data={nasa} />
    </Wrapper>
  );
}

export default App;
