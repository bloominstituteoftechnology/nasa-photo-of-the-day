import React from "react";
import "./App.css";
import ImageList from './pictureCards/images';
import ApodHeader from './Header/mainHead'

function App() {
  return (
    <div className="App">
        <ApodHeader/>
        <ImageList/>
    </div>
  );
}

export default App;
