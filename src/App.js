import React from "react";
import "./App.css";
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import ImageSection from './components/ImageSection/ImageSection.js';
import BottomContent from './components/BottomContent/BottomContent.js'

import {apiData} from './data';

const {  explanation,
  media_type,
  url,
  hdUrl,
  date,
  title,
  copyright} = apiData;

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="App-Content">
        <Header />
        <ImageSection  />
        <BottomContent {...apiData} />

      </div>
    </div>
  );
}

export default App;
