import React from "react";
import "./App.css";

import { useState, useEffect } from 'react';

import axios from 'axios';

import header from '../components/header.js';
import photo from '../components/photo.js';
import caption from '../components/caption';




function App() {

  const [photo, changePhoto] = useState([]);
  const [caption, changeCaption] = useState('');


  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React, { useState, useEffect } from "react";
import "./App.css";
import Photo from './Photo';

import axios from 'axios';



function App() {
  const [data, setData] = useState({});
  
  //Here is the data returned that I'll be working with
  // {
  //   "date": "2021-01-06",
  //   "explanation": "Why are these sand dunes on Mars striped?  No one is sure.  The featured image shows striped dunes in Kunowsky Crater on Mars, photographed recently with the Mars Reconnaissance Orbiter\u2019s HiRISE Camera.  Many Martian dunes are known to be covered unevenly with carbon dioxide (dry ice) frost, creating patterns of light and dark areas.  Carbon dioxide doesn\u2019t melt, but sublimates, turning directly into a gas. Carbon dioxide is also a greenhouse material even as a solid, so it can trap heat under the ice and sublimate from the bottom up, causing geyser-like eruptions.  During Martian spring, these eruptions can cause a pattern of dark defrosting spots, where the darker sand is exposed.  The featured image, though, was taken during Martian autumn, when the weather is getting colder \u2013 making these stripes particularly puzzling.  One hypothesis is that they are caused by cracks in the ice that form from weaker eruptions or thermal stress as part of the day-night cycle, but research continues.  Watching these dunes and others through more Martian seasons may give us more clues to solve this mystery.",
  //   "hdurl": "https://apod.nasa.gov/apod/image/2101/StripedDunes_HiRISE_1182.jpg",
  //   "media_type": "image",
  //   "service_version": "v1",
  //   "title": "Striped Sand Dunes on Mars",
  //   "url": "https://apod.nasa.gov/apod/image/2101/StripedDunes_HiRISE_1080.jpg"
  // }
  useEffect(() => {
    
    const API_KEY = '8adQhyE9TJsap80yfjJbINFpsjj5PNVHFeENwfBv';

    // This axios GET request will return a single image
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`) //This is the string literal inserting the API key
      // Which we then set to state
      .then(res => {
        setData(res.data);
      // console.log("fetch data", res.data);
      })
      // Always include error handling
      .catch(err => console.log(err));
      
  }, []); //setting this to an empty array makes sure that the request only happens one time

  // console.log("Data: ", data);

  return (
    <div className="App">
      
        <Photo cat={data} />
     
    </div>


  );
}

export default App;