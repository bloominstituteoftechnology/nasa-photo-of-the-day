import React, {useState} from "react";

import Banner from "./components/Banner";
import Image from "./components/Image";
import ViewSpace from "./components/ViewSpace";
import HideSpace from "./components/HideSpace";
import Explanation from "./components/Explanation";


//Import bootstrap for styling
// import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";

const axios = require('axios').default;




const App = () => {
  const [imageState, setImageState] = useState(false)
  const [imageUrl, setImageUrl] = useState('')
  
  
  const endPoint = "https://api.nasa.gov/planetary/apod?api_key=nucIeDL0aUJlrbCdOpPOaPvvcfqxjzbUr0dIMLm9&date=2012-03-14"
  
  const showImage = () => {
    setImageState (true);
    axios.get(endPoint)
    .then(res => {
      setImageUrl(res.data.url);
    })
    .catch((error) => {
      console.log("Oh snap")
    })
  }


  const hideImage = () => {
    setImageState (false);
  }
  
  return (
    <div className="App">
      <Banner />
      <Image imageState={imageState} imageUrl={imageUrl}/>
     <ViewSpace showImage={showImage}/>
      <HideSpace hideImage={hideImage}/>
    </div>
  );
}

export default App;

//This is the main app