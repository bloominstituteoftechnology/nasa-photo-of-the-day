import React from "react";
import "./App.css";
import  ApodCard from "./components/ApodCard";
import ApodGrid from "./components/ApodGrid";



function App() {
  return (
    <div className="App">
      <p>
      Astronomy Picture of the Day!
      </p>
        <ApodGrid/>
    </div>
  );
}

export default App;


