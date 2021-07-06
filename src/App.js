import React from "react";
import "./App.css";
import NasaPhoto from './NasaPhoto.js';

function App() {

  // const [src, setSrc] = useState(NasaPhoto);
  
  return (
    <div className="App">
      <NasaPhoto />
      {/* data={imgSrc} */}
      <h1>NASA Photo Of the Day!</h1>
      {/* <img alt="NASA Photo Of the Day!"/> */}
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
