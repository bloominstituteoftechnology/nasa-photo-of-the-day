import React, {useState} from "react";

import Banner from "./components/Banner";
import Image from "./components/Image";
import ViewSpace from "./components/ViewSpace";

import "./App.css";

// const axios = require('axios').default;

const App = () => {
  const [imageOn, setImageOn] = useState(false)
  const showImage = evt => {
    
  }
  
  return (
    <div className="App">
      <Banner />
      <Image />
     <ViewSpace showImage={showImage}/>
      {/* <HideSpace /> */}
    </div>
  );
}

export default App;

//This is the main app