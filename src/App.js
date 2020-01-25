import React, { useState, useEffect } from "react";
import ImageContainer from "./components/ImageContainer";
import ModalContainer from "./components/Modal";
import styled from "styled-components";
import axios from "axios";
import "./App.css";
import { format } from "path";

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

  // TODO:
  // take the input value (e.target.value) and store it in the var,
  // after that make the api call with the variable in the following format using backticks
  // `https://api.nasa.gov/planetary/apod?date=${your variable here}api_key=DEMO_KEY`
  // then update the state with the new api call and display the image along with the info
  // inside the modal, add if no images available alert or something

  // here is the link for your reference
  // https://codepen.io/rachelhawa/pen/XWJEXLL?editors=1010

  // FIXME:

  const onChange = e => {
    console.log(e.target.value);
  };
  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(res => {
        setNasa(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

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
