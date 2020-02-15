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
  const [error, setError] = useState("");
  const [url, setUrl] = useState(
    "https://api.nasa.gov/planetary/apod?api_key=L6Fjl7gZtReyMZa0M3XLLvKHoXcy9ZF5cWW0t4Jc"
  );

  useEffect(() => {
    axios
      .get(url)
      .then(res => {
        setNasa(res.data);
      })
      .catch(err => {
        setError("Sorry not data for the date you picked! Try different date");
      });
  }, [url]);

  const onChange = e => {
    var date = e.target.value;
    setUrl(
      `https://api.nasa.gov/planetary/apod?date=${date}&api_key=L6Fjl7gZtReyMZa0M3XLLvKHoXcy9ZF5cWW0t4Jc`
    );
    setError("");
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
        <a href="https://www.nasa.gov/">
          <img
            style={{ height: "70px", width: "70px" }}
            src="https://invention.nasa.gov/assets/images/banner-meatball.png"
          />
        </a>
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
      {error && (
        <p style={{ textAlign: "center", fontSize: "1.5rem", color: "red" }}>
          {error}
        </p>
      )}
      {!error ? <ImageContainer data={nasa} /> : ""}
    </Wrapper>
  );
}

export default App;
