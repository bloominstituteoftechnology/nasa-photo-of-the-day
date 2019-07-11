import React, { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Header";

function App() {
  const [media, updateMedia] = useState("");

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
