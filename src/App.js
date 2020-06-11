import React from "react";
import "./App.css";
import NasaFile from '../src/Component/Axios/NasaFile'
import NavMenu from'../src/Component/NavBar/NavMenu'




function App() {
  return (
    <div className="App">
      <NavMenu />
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
        
      </p> */}
      
      <NasaFile />
      
    </div>
  );
}

export default App;