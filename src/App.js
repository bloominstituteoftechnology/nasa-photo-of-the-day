import React, { useState, useEffect } from "react";
import { Spinner } from "reactstrap";
import "./App.css";
import Header from "./Heading";
import Nav from "./Nav";
import { NasaImages } from "./nasa-api";
import styled from "styled-components";
import CustomButton from "./button";

function App() {
  
  const [photo, setPhoto] = useState(29);


  return (
      <div className="App">  
        <div style={{width: "95%", border: "3px solid black", margin: "0 auto", padding: "30px"}}>
          <Header />
          <Nav />
          <CustomButton>Previous</CustomButton>
          <CustomButton>Next</CustomButton>

        </div>
        <div>
          <NasaImages />
        </div>
      </div>
  );
}

export default App;
