import React from "react";
import "./App.css";
import PicCard from './pictureCards/cardContainer';
import ImageList from './pictureCards/images';

function App() {
  return (
    <div className="App">
      <ImageList/>
      <PicCard/>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun !
      </p>
    </div>
  );
}

export default App;
