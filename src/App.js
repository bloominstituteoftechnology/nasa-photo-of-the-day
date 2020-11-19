import React from "react";
import "./App.css";
import Title from "./Title";
import Photo from "./Photo";
import Caption from "./Caption";
function App() {
  return (
    <div className="App">
      <h1>Astronomy Photo of the Day</h1>
      
      <Title />
      <Photo />
      <Caption />

      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
    </div>
  );
}

export default App;
