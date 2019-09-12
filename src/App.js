import React from "react";
import styled from "styled-components"
import "./App.css";
import PhotoOfTheDay from "./components/Photo-of-the-Day"

const AppDiv = styled.div`
background-image: url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3151&q=80')

`


function App() {
  return (
    // <div className="App">
    //   <PhotoOfTheDay/>
    // </div>
    <AppDiv className="App">
      <PhotoOfTheDay/>
    </AppDiv>

  );
}

export default App;
