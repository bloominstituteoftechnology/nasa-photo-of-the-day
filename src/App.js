import React, { useState } from "react";
import Header from "./Header";
import NasaPhoto from "NasaPhoto";
import "./App.css";

function App() {
  useEffect(() => {
    axios
      .get("")
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <Header />

      <div className="App">
        <NasaPhoto />
        <div>
          <span>Caption Here</span>
        </div>
      </div>
    </>
  );
}

export default App;
