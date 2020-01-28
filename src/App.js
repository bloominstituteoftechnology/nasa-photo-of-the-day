import React from "react";
import ApodList from "./components/ApodList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      {/* <Header /> */}
      <ApodList />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
