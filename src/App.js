import React from "react";
import "./App.css";
import ApodContainer from "./ApodContainer.js"
import sampleData from "./sampleApodDataSoIDontHitApiLimitWhileTesting"

function App() {
  console.log(sampleData)
  return (
    <div className="App">
      <ApodContainer data={sampleData}/>
    </div>
  );
}

export default App;
