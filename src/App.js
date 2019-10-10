import React from "react";
import "./App.css";
import CardHolder from "./CardHolder"
import Header from "./header";
import styled from 'styled-components'





function App() {
  return (
    <div className="App" style ={{"backgroundColor": "black"}}>
        <Header />
        <CardHolder />
    </div>
  );
}
export default App;