import React, { useState, useEffect } from "react";
import NavBar from "./Components/navBar";
import "./App.css";

function App() {
  const [typeOfImg, setTypeOfImg] = useState('auto');
  

  return (
    <div className="App">
      <NavBar setTypeOfImg={setTypeOfImg} />
    </div>
  );
}

export default App;
