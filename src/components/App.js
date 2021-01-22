import React from "react";
import "../App.css";
import Apod from "./Apod"

import styled from "styled-components"

const Wrapper = styled.div`

background-color: orange;


`;





function App() {
  return (

    
    <Wrapper>
    <div className="App">

      <Apod />
      

    </div>
    </Wrapper>
  );
}

export default App;
