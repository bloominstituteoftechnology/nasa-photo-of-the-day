import React from "react";
import styled from "styled-components";
import "./App.css";
// import Astros from "./components/Astro/Astros";
import SearchBar from "./components/Searchbar/SearchBar";

const AppStyle = styled.div`
      text-align: center;
`;

function App() {
  return (
    <AppStyle>
      <SearchBar />
    </AppStyle>
  );
}

export default App;
