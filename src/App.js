import React from "react";
import "./App.css";
import NasaImgCard from "./components/NasaImgCard";
import NasaImgGrid from "./components/NasaImgGrid";

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <h1>NASA Image Of Today</h1>
      <NasaImgCard />
      <h2>Gallery</h2>
      <NasaImgGrid/>
    </div>
  );
}

export default App;
