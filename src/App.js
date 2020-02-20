import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import GetData from "./Components/GetData";

function App() {
  return (
    <div className="App">
      <Header />

      <GetData />
      <Footer />
    </div>
  );
}

export default App;


