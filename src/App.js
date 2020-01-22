import React from "react";
import "./App.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <Footer/>
    </div>
  );
}

export default App;
